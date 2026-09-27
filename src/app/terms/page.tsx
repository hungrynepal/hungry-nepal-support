import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { getTermsData } from "@/content";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms & Conditions | Hungry Hetauda",
  description:
    "Official Terms & Conditions governing access to and use of Hungry Hetauda mobile application, food delivery services, and related offerings.",
  path: "/terms",
});

export default function TermsPage() {
  const document = getTermsData();

  return (
    <LegalLayout
      document={document}
      description="Please read these terms and conditions carefully before using our mobile application or placing food orders."
      breadcrumbs={[{ label: "Terms & Conditions" }]}
    />
  );
}
