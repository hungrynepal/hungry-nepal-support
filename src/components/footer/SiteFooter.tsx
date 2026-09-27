import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck, Heart } from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { Container } from "@/components/shared/Container";
import {
  COMPANY_NAME,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  LOCATION,
  TAGLINE,
  FOOTER_LEGAL_LINKS,
} from "@/lib/constants";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-stone-200 bg-white pt-12 pb-8 text-stone-600">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-5 lg:col-span-6">
            <BrandLogo size="md" />
            <p className="text-sm text-stone-500 max-w-sm leading-relaxed">
              {TAGLINE}
            </p>
            <div className="pt-2 text-xs space-y-2 text-stone-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" aria-hidden="true" />
                <span>{COMPANY_NAME} • {LOCATION}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${SUPPORT_PHONE.replace(/[^+\d]/g, "")}`}
                  className="text-stone-700 hover:text-red-600 font-medium hover:underline"
                >
                  {SUPPORT_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-stone-700 hover:text-red-600 font-medium hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Legal Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4">
              Documentation & Legal
            </h2>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-600 hover:text-red-600 hover:underline transition-colors focus-visible:ring-2 focus-visible:ring-red-500 rounded py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & App Info */}
          <div className="space-y-3 md:col-span-3 lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4">
              Compliance & Safety
            </h2>
            <div className="rounded-xl border border-stone-200/90 bg-stone-50/60 p-3.5 text-xs text-stone-600 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>Google Play Data Safety</span>
              </div>
              <p className="leading-relaxed text-[11px] text-stone-500">
                Transparent data practices, privacy disclosures, and straightforward account deletion workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-stone-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-stone-400">
            <span>Crafted with love for Hetauda</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
