import Link from "next/link";
import {
  UtensilsCrossed,
  Bike,
  ShoppingBag,
  Users,
  ShieldCheck,
  FileText,
  UserX,
  Info,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { constructMetadata } from "@/lib/seo";
import {
  COMPANY_NAME,
  LOCATION,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  TAGLINE,
} from "@/lib/constants";
import { aboutContent } from "@/content/about";

export const metadata = constructMetadata({
  title: "Hungry Hetauda | Food Delivery & Official Support Portal",
  description:
    "Official brand and information portal for Hungry Hetauda. Explore our menu, food delivery services, and view terms, privacy, and account deletion policies.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-stone-200/80 bg-gradient-to-b from-red-500/10 via-stone-50/50 to-stone-50/20 py-16 sm:py-24 lg:py-28">
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-white/95 px-4 py-1.5 text-xs font-semibold text-red-900 shadow-2xs mb-6 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" aria-hidden="true" />
              <span>Official Brand & Support Portal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl leading-[1.15]">
              Hot, Fresh Food,{" "}
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 bg-clip-text text-transparent">
                Delivered Across Hetauda.
              </span>
            </h1>

            {/* Tagline & Subtitle */}
            <p className="mt-5 text-lg sm:text-xl font-medium text-stone-700">
              {TAGLINE}
            </p>
            <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              {COMPANY_NAME} connects food lovers in Makwanpur with delicious meals, hygienic kitchen standards, and rapid doorstep delivery.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-500 transition-colors"
              >
                <span>Explore Our Brand</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href="#portal-links"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-sm font-bold text-stone-800 shadow-2xs hover:bg-stone-50 focus-visible:ring-2 focus-visible:ring-red-500 transition-colors"
              >
                <span>Documentation & Policies</span>
              </a>
            </div>
          </div>
        </Container>

        {/* Subtle decorative background glow */}
        <div
          className="absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-red-400/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
      </section>

      {/* About Overview Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                About Hungry Hetauda
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-snug">
                Local Taste Heritage Meets Fast Digital Convenience
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {aboutContent.hero.description}
              </p>
              <p className="text-stone-600 leading-relaxed">
                At Hungry Hetauda, good food is about bringing friends and families together. Our mission is to make ordering meals effortless while keeping food hot, fresh, and consistent every day.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700 hover:underline"
                >
                  <span>Learn more about our journey & menu</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50/60 via-white to-rose-50/30 p-6 sm:p-8 shadow-xs">
                <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-red-600" aria-hidden="true" />
                  <span>Popular Offerings</span>
                </h3>
                <p className="text-xs text-stone-500 mb-4">
                  Freshly cooked with quality ingredients and authentic recipes:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {aboutContent.menuHighlights.slice(0, 9).map((dish, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-stone-800 border border-stone-200/80 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" aria-hidden="true" />
                      <span className="truncate">{dish}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
                  <span>Available on the Hungry Hetauda app</span>
                  <span className="font-semibold text-stone-700">{LOCATION}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* App & Service Experience Grid */}
      <section className="py-16 sm:py-20 bg-stone-50/50 border-b border-stone-200/80">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Convenient Digital Ordering
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Designed for Daily Food Lovers
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Seamless menu browsing, easy dish customization, and prompt order tracking right from your mobile device.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs hover:border-red-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2">
                Diverse Menus
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Explore biryanis, momos, burgers, pizzas, curries, and drinks with clear transparent prices.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs hover:border-red-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-4">
                <Bike className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2">
                Speedy Delivery
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Get hot food delivered straight to your home or office in Hetauda with live rider updates.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs hover:border-red-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-4">
                <ShoppingBag className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2">
                Self Takeaway
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Place your order ahead of time and pick it up freshly prepared with no waiting in line.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs hover:border-red-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2">
                Partner Kitchens
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Partnering with verified eateries in Makwanpur committed to food hygiene and delicious flavors.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Documentation & Legal Hub */}
      <section id="portal-links" className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Information & Compliance
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Official Documentation & Support
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Access official brand disclosures, terms of service, data safety policies, and account deletion mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* About Card */}
            <Link
              href="/about"
              className="group rounded-2xl border border-stone-200 bg-stone-50/50 p-6 sm:p-7 shadow-xs hover:border-red-400 hover:bg-white transition-all focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Info className="w-5 h-5" aria-hidden="true" />
                </div>
                <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-red-600 transition-colors">
                About Hungry Hetauda
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Brand story, culinary philosophy, menu highlights, and mobile food ordering features.
              </p>
            </Link>

            {/* Terms Card */}
            <Link
              href="/terms"
              className="group rounded-2xl border border-stone-200 bg-stone-50/50 p-6 sm:p-7 shadow-xs hover:border-red-400 hover:bg-white transition-all focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" aria-hidden="true" />
                </div>
                <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-red-600 transition-colors">
                Terms & Conditions
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Comprehensive legal terms governing app usage, food orders, digital payments, delivery, and refunds.
              </p>
            </Link>

            {/* Privacy Card */}
            <Link
              href="/privacy"
              className="group rounded-2xl border border-stone-200 bg-stone-50/50 p-6 sm:p-7 shadow-xs hover:border-emerald-400 hover:bg-white transition-all focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-red-600 transition-colors">
                Privacy Policy
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Full transparency regarding data protection, user privacy, and Google Play Data Safety compliance.
              </p>
            </Link>

            {/* Delete Account Card */}
            <Link
              href="/delete-account"
              className="group rounded-2xl border border-stone-200 bg-stone-50/50 p-6 sm:p-7 shadow-xs hover:border-rose-400 hover:bg-white transition-all focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <UserX className="w-5 h-5" aria-hidden="true" />
                </div>
                <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-red-600 transition-colors">
                Account & Data Deletion
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Clear instructions for in-app deletion, email deletion requests, and data retention guidelines.
              </p>
            </Link>
          </div>

          {/* Contact Bar */}
          <div className="mt-12 rounded-2xl border border-stone-200/90 bg-stone-50/70 p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-stone-900 text-base">
                Have questions or need assistance?
              </h4>
              <p className="text-xs text-stone-500 mt-1">
                Reach out directly to our Hetauda support team for customer inquiries and policy help.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${SUPPORT_PHONE.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-stone-800 border border-stone-200 shadow-2xs hover:bg-stone-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-600" aria-hidden="true" />
                <span>{SUPPORT_PHONE}</span>
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-xs font-bold text-white shadow-2xs hover:bg-red-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-white" aria-hidden="true" />
                <span>{SUPPORT_EMAIL}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
