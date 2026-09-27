import React from "react";
import { Hash } from "lucide-react";
import { LegalSection, ContentItem } from "@/lib/legal-parser";

interface LegalSectionItemProps {
  section: LegalSection;
}

function renderFormattedText(text: string) {
  // Replace email addresses with mailto links
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  const parts = text.split(emailRegex);

  return parts.map((part, i) => {
    if (emailRegex.test(part)) {
      return (
        <a
          key={i}
          href={`mailto:${part}`}
          className="font-semibold text-red-600 hover:underline focus-visible:ring-2 focus-visible:ring-red-500 rounded px-0.5"
        >
          {part}
        </a>
      );
    }

    // Bold formatting (**word**)
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((subPart, j) => {
      if (subPart.startsWith("**") && subPart.endsWith("**")) {
        return (
          <strong key={`${i}-${j}`} className="font-semibold text-stone-900">
            {subPart.slice(2, -2)}
          </strong>
        );
      }
      return subPart;
    });
  });
}

function renderContentItem(item: ContentItem, index: number) {
  if (item.type === "paragraph" && item.text) {
    return (
      <p key={index} className="text-stone-700 leading-[1.8] text-[15px] sm:text-base mb-4">
        {renderFormattedText(item.text)}
      </p>
    );
  }

  if (item.type === "list" && item.items) {
    if (item.ordered) {
      return (
        <ol key={index} className="list-decimal pl-6 space-y-2 mb-5 text-[15px] sm:text-base text-stone-700 leading-[1.75]">
          {item.items.map((li, liIndex) => (
            <li key={liIndex} className="pl-1">
              {renderFormattedText(li)}
            </li>
          ))}
        </ol>
      );
    }

    return (
      <ul key={index} className="list-disc pl-6 space-y-2 mb-5 text-[15px] sm:text-base text-stone-700 leading-[1.75]">
        {item.items.map((li, liIndex) => (
          <li key={liIndex} className="pl-1">
            {renderFormattedText(li)}
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

export function LegalSectionItem({ section }: LegalSectionItemProps) {
  return (
    <article
      id={section.id}
      className="scroll-mt-28 py-8 first:pt-2 border-b border-stone-200/70 last:border-b-0"
    >
      <div className="group flex items-center gap-2 mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
          {section.title}
        </h2>
        <a
          href={`#${section.id}`}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-stone-400 hover:text-red-600 focus-visible:opacity-100 p-1 rounded"
          aria-label={`Link to section: ${section.title}`}
        >
          <Hash className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      <div className="text-stone-700">
        {section.items.map((item, idx) => renderContentItem(item, idx))}

        {section.subsections && section.subsections.length > 0 && (
          <div className="mt-6 space-y-6 pl-2 sm:pl-4 border-l-2 border-red-500/30">
            {section.subsections.map((sub) => (
              <div key={sub.id} id={sub.id} className="scroll-mt-28">
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  {sub.title}
                </h3>
                {sub.items.map((subItem, subIdx) => renderContentItem(subItem, subIdx))}
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
