import React from "react";
import { ShieldCheck } from "lucide-react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { getPrivacyData } from "@/content";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy | Hungry Hetauda",
  description:
    "Official Privacy Policy of Hungry Hetauda Private Limited detailing personal data collection, user rights, and security safeguards.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const document = getPrivacyData();

  const privacyNotice = (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-emerald-900">
      <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
      <div>
        <p className="font-bold">Google Play Data Safety & Regulatory Compliance</p>
        <p className="mt-1 text-emerald-800 leading-relaxed text-xs">
          Hungry Hetauda is committed to total transparency. This policy complies with applicable privacy laws, including the Nepal Privacy Act 2075 and Google Play Developer Program Policies.
        </p>
      </div>
    </div>
  );

  return (
    <LegalLayout
      document={document}
      description="This Privacy Policy explains how Hungry Hetauda collects, receives, uses, protects, and deletes personal information when you use our mobile application and services."
      breadcrumbs={[{ label: "Privacy Policy" }]}
      extraNotice={privacyNotice}
    />
  );
}
