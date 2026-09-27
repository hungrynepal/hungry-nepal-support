import React from "react";
import {
  UtensilsCrossed,
  Smartphone,
  Bike,
  ShoppingBag,
  Users,
  Sliders,
  UserCheck,
  MapPin,
  Gift,
  CreditCard,
  Bell,
  Heart,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/shared/Container";
import { constructMetadata } from "@/lib/seo";
import { aboutContent } from "@/content/about";
import { COMPANY_NAME, LOCATION, SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/constants";

export const metadata = constructMetadata({
  title: "About Us | Hungry Hetauda",
  description:
    "Learn about Hungry Hetauda Private Limited, our mission to deliver delicious meals in Makwanpur, and our digital food ordering app.",
  path: "/about",
});

const ICON_MAP: Record<string, React.ElementType> = {
  UtensilsCrossed,
  Smartphone,
  Bike,
  ShoppingBag,
  Users,
  Sliders,
  UserCheck,
  MapPin,
  Gift,
  CreditCard,
  Bell,
  Heart,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50/40">
      <PageHeader
        title="About Hungry Hetauda"
        description="Your favorite meals, prepared with care and delivered fresh across Hetauda."
        breadcrumbs={[{ label: "About Us" }]}
        badges={[
          { label: "Entity", value: COMPANY_NAME },
          { label: "Location", value: LOCATION },
        ]}
      />

      <Container size="legal" className="py-10 sm:py-16">
        {/* Intro Block */}
        <section className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl space-y-4 text-stone-700 leading-relaxed text-base sm:text-lg">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {aboutContent.hero.tagline}
            </h2>
            <p>{aboutContent.hero.description}</p>
            <p className="font-medium text-stone-900 bg-red-500/10 p-4 rounded-xl border border-red-500/20 text-sm sm:text-base">
              {aboutContent.hero.companyNotice}
            </p>
          </div>
        </section>

        {/* Menu Showcase Section */}
        <section className="mb-12 rounded-2xl border border-red-200 bg-gradient-to-br from-red-50/70 via-white to-rose-50/30 p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2 flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5 text-red-600" aria-hidden="true" />
              <span>Explore Our Menu</span>
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Discover a wide selection of local and multi-cuisine favorites through the Hungry Hetauda app. Browse dishes, check real-time pricing, select quantities, and enjoy seamless ordering.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {aboutContent.menuHighlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-stone-800 border border-stone-200/90 shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" aria-hidden="true" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {aboutContent.sections.map((section) => {
            const Icon = ICON_MAP[section.icon || ""] || UtensilsCrossed;
            return (
              <section
                key={section.id}
                id={section.id}
                className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-3 text-stone-700 text-sm leading-relaxed mb-4">
                    {section.paragraphs?.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {section.listItems && section.listItems.length > 0 && (
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-600 pl-1 mb-4">
                      {section.listItems.map((li, liIdx) => (
                        <li key={liIdx} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer Company Card */}
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-xs uppercase tracking-widest font-bold text-stone-500 mb-1">
            {aboutContent.footerNote.company}
          </p>
          <h3 className="text-xl font-extrabold text-stone-900 mb-2">
            {aboutContent.footerNote.closing}
          </h3>
          <p className="text-sm font-semibold text-red-600 mb-6">
            {aboutContent.footerNote.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-600 border-t border-stone-100 pt-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-600" aria-hidden="true" />
              <span>{LOCATION}</span>
            </span>
            <a
              href={`tel:${SUPPORT_PHONE.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-1.5 text-stone-700 font-semibold hover:text-red-600"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" aria-hidden="true" />
              <span>{SUPPORT_PHONE}</span>
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="flex items-center gap-1.5 text-red-600 font-semibold hover:underline"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{SUPPORT_EMAIL}</span>
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
}
