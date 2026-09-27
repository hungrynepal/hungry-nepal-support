export interface NavItem {
  label: string;
  href: string;
}

export interface LegalSubSection {
  id: string;
  title: string;
  paragraphs?: string[];
  listItems?: string[];
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs?: string[];
  listItems?: string[];
  subsections?: LegalSubSection[];
}

export interface LegalDocument {
  title: string;
  subtitle?: string;
  effectiveDate: string;
  lastUpdated: string;
  version?: string;
  company: string;
  brand: string;
  address: string;
  email: string;
  sections: LegalSection[];
}
