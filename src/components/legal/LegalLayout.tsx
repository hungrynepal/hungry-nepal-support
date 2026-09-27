import React from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/shared/Container";
import { LegalTableOfContents } from "./LegalTableOfContents";
import { LegalSectionItem } from "./LegalSectionItem";
import { LegalDocumentData } from "@/lib/legal-parser";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Building, MapPin, Mail, Phone } from "lucide-react";
import { SUPPORT_PHONE } from "@/lib/constants";

interface LegalLayoutProps {
  document: LegalDocumentData;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  extraNotice?: React.ReactNode;
}

export function LegalLayout({
  document,
  description,
  breadcrumbs,
  extraNotice,
}: LegalLayoutProps) {
  const badges: Array<{ label: string; value: string }> = [];

  if (document.metadata.effectiveDate) {
    badges.push({ label: "Effective", value: document.metadata.effectiveDate });
  }
  if (document.metadata.lastUpdated) {
    badges.push({ label: "Updated", value: document.metadata.lastUpdated });
  }
  if (document.metadata.version) {
    badges.push({ label: "Version", value: document.metadata.version });
  }

  const tocItems = document.sections.map((s) => ({
    id: s.id,
    title: s.title,
  }));

  return (
    <div className="min-h-screen bg-stone-50/40">
      <PageHeader
        title={document.title}
        description={description}
        breadcrumbs={breadcrumbs}
        badges={badges}
      />

      <Container size="legal" className="py-10 sm:py-14">
        {extraNotice && <div className="mb-8">{extraNotice}</div>}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Table of Contents Column */}
          <div className="lg:col-span-4 xl:col-span-4">
            <LegalTableOfContents items={tocItems} />
          </div>

          {/* Main Reading Column */}
          <main className="lg:col-span-8 xl:col-span-8 max-w-3xl">
            {/* Metadata Summary Card */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-xs mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">
                Document Overview & Entity Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
                {document.metadata.company && (
                  <div className="flex items-start gap-2.5">
                    <Building className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="block font-semibold text-stone-900">Entity</span>
                      <span>{document.metadata.company}</span>
                    </div>
                  </div>
                )}
                {document.metadata.address && (
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="block font-semibold text-stone-900">Jurisdiction</span>
                      <span>{document.metadata.address}</span>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="block font-semibold text-stone-900">Phone Support</span>
                    <a
                      href={`tel:${SUPPORT_PHONE.replace(/[^+\d]/g, "")}`}
                      className="text-stone-700 hover:text-red-600 font-semibold hover:underline"
                    >
                      {SUPPORT_PHONE}
                    </a>
                  </div>
                </div>
                {document.metadata.email && (
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="block font-semibold text-stone-900">Official Inquiries</span>
                      <a
                        href={`mailto:${document.metadata.email}`}
                        className="text-red-600 font-semibold hover:underline"
                      >
                        {document.metadata.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Intro text */}
            {document.introItems.length > 0 && (
              <div className="mb-8 pb-8 border-b border-stone-200 text-stone-700 text-base sm:text-lg leading-relaxed">
                {document.introItems.map((item, idx) => {
                  if (item.type === "paragraph" && item.text) {
                    return (
                      <p key={idx} className="mb-4">
                        {item.text}
                      </p>
                    );
                  }
                  if (item.type === "list" && item.items) {
                    return (
                      <ul key={idx} className="list-disc pl-6 space-y-2 mb-4">
                        {item.items.map((li, liIdx) => (
                          <li key={liIdx}>{li}</li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>
            )}

            {/* Sections */}
            <div className="space-y-2">
              {document.sections.map((section) => (
                <LegalSectionItem key={section.id} section={section} />
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
