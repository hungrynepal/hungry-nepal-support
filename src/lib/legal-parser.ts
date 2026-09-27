export interface ContentItem {
  type: "paragraph" | "list";
  text?: string;
  items?: string[];
  ordered?: boolean;
}

export interface LegalSubSection {
  id: string;
  title: string;
  items: ContentItem[];
}

export interface LegalSection {
  id: string;
  title: string;
  rawTitle: string;
  items: ContentItem[];
  subsections: LegalSubSection[];
}

export interface LegalDocumentData {
  title: string;
  metadata: {
    effectiveDate?: string;
    lastUpdated?: string;
    version?: string;
    company?: string;
    brand?: string;
    address?: string;
    email?: string;
  };
  introItems: ContentItem[];
  sections: LegalSection[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function parseLegalMarkdown(raw: string): LegalDocumentData {
  const lines = raw.split(/\r?\n/);
  let title = "Document";
  const metadata: LegalDocumentData["metadata"] = {};
  const introItems: ContentItem[] = [];
  const sections: LegalSection[] = [];

  let currentSection: LegalSection | null = null;
  let currentSubSection: LegalSubSection | null = null;
  let currentList: { type: "list"; items: string[]; ordered: boolean } | null = null;

  function commitList() {
    if (!currentList) return;
    if (currentSubSection) {
      currentSubSection.items.push(currentList);
    } else if (currentSection) {
      currentSection.items.push(currentList);
    } else {
      introItems.push(currentList);
    }
    currentList = null;
  }

  function commitParagraph(text: string) {
    if (!text.trim()) return;
    const item: ContentItem = { type: "paragraph", text: text.trim() };
    if (currentSubSection) {
      currentSubSection.items.push(item);
    } else if (currentSection) {
      currentSection.items.push(item);
    } else {
      introItems.push(item);
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      commitList();
      continue;
    }

    // Skip horizontal rules
    if (line === "---" || line === "***") {
      commitList();
      continue;
    }

    // Main document title (# Title)
    if (line.startsWith("# ") && !currentSection) {
      title = line.replace(/^#\s+/, "").trim();
      continue;
    }

    // Metadata extraction (e.g. **Effective Date:** ...)
    if (!currentSection && line.startsWith("**") && line.includes(":")) {
      const match = line.match(/\*\*([^:]+):\*\*\s*(.*)/);
      if (match) {
        const key = match[1].trim().toLowerCase();
        const value = match[2].trim().replace(/^\[(.*)\]\(mailto:.*\)$/, "$1");
        if (key.includes("effective")) metadata.effectiveDate = value;
        else if (key.includes("updated")) metadata.lastUpdated = value;
        else if (key.includes("version")) metadata.version = value;
        else if (key.includes("company")) metadata.company = value;
        else if (key.includes("brand")) metadata.brand = value;
        else if (key.includes("address")) metadata.address = value;
        else if (key.includes("email")) metadata.email = value;
        continue;
      }
    }

    // Section header (## ... or # N. ...)
    const isH1Section = /^#\s+\d+\./.test(line);
    const isH2Section = /^##\s+/.test(line);

    if (isH1Section || isH2Section) {
      commitList();
      if (currentSubSection && currentSection) {
        currentSection.subsections.push(currentSubSection);
        currentSubSection = null;
      }
      if (currentSection) {
        sections.push(currentSection);
      }

      const rawHeading = line.replace(/^(#|##)\s+/, "").trim();
      const sectionId = slugify(rawHeading);

      currentSection = {
        id: sectionId,
        title: rawHeading,
        rawTitle: rawHeading,
        items: [],
        subsections: [],
      };
      continue;
    }

    // Subsection header (### ...)
    if (line.startsWith("### ")) {
      commitList();
      if (currentSubSection && currentSection) {
        currentSection.subsections.push(currentSubSection);
      }
      const rawSub = line.replace(/^###\s+/, "").trim();
      currentSubSection = {
        id: slugify(rawSub),
        title: rawSub,
        items: [],
      };
      continue;
    }

    // List item (ordered: 1. or unordered: * or • or -)
    const isOrdered = /^\d+\.\s+/.test(line);
    const isUnordered = /^(\*|•|-)\s+/.test(line);

    if (isOrdered || isUnordered) {
      const itemText = line.replace(/^(\d+\.|\*|•|-)\s+/, "").trim();
      if (!currentList || currentList.ordered !== isOrdered) {
        commitList();
        currentList = {
          type: "list",
          ordered: isOrdered,
          items: [itemText],
        };
      } else {
        currentList.items.push(itemText);
      }
      continue;
    }

    // Ordinary paragraph text
    commitList();
    commitParagraph(line);
  }

  commitList();
  if (currentSubSection && currentSection) {
    currentSection.subsections.push(currentSubSection);
  }
  if (currentSection) {
    sections.push(currentSection);
  }

  return {
    title,
    metadata,
    introItems,
    sections,
  };
}
