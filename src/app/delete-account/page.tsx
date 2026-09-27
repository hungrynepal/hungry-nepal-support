import React from "react";
import { UserX, Smartphone, Mail, AlertTriangle, Phone } from "lucide-react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { getDeleteAccountData } from "@/content";
import { constructMetadata } from "@/lib/seo";
import { SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/constants";

export const metadata = constructMetadata({
  title: "Account & Data Deletion | Hungry Hetauda",
  description:
    "Official guide and instructions to request deletion of your Hungry Hetauda account and eligible personal information in accordance with Google Play requirements.",
  path: "/delete-account",
});

export default function DeleteAccountPage() {
  const document = getDeleteAccountData();

  const deletionQuickGuide = (
    <div className="rounded-2xl border border-rose-200 bg-white p-6 sm:p-8 shadow-xs">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
          <UserX className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-stone-900">
            Quick Account Deletion Instructions
          </h2>
          <p className="text-xs text-stone-500">
            Follow either of the official methods below to submit your account deletion request.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* In-App Deletion Method */}
        <div className="rounded-xl border border-stone-200/90 bg-stone-50/60 p-5">
          <div className="flex items-center gap-2 font-bold text-stone-900 text-sm mb-2">
            <Smartphone className="w-4 h-4 text-red-600" aria-hidden="true" />
            <span>Method 1: Inside the Mobile App</span>
          </div>
          <p className="text-xs text-stone-600 mb-4 leading-relaxed">
            If you have access to the Hungry Hetauda application on your phone, you can request immediate deletion directly:
          </p>
          <div className="rounded-lg bg-white border border-stone-200 px-3.5 py-2.5 font-mono text-xs font-semibold text-stone-800 text-center shadow-2xs">
            Profile → Settings → Account → Delete Account
          </div>
          <p className="mt-3 text-[11px] text-stone-500">
            You may be asked to authenticate via password, OTP, or SMS verification before deletion is processed.
          </p>
        </div>

        {/* Email / Direct Support Deletion Method */}
        <div className="rounded-xl border border-stone-200/90 bg-stone-50/60 p-5">
          <div className="flex items-center gap-2 font-bold text-stone-900 text-sm mb-2">
            <Mail className="w-4 h-4 text-red-600" aria-hidden="true" />
            <span>Method 2: Support Request</span>
          </div>
          <p className="text-xs text-stone-600 mb-3 leading-relaxed">
            If you cannot log in or prefer to request deletion via email or telephone, contact our team:
          </p>
          <div className="rounded-lg bg-white border border-stone-200 p-3 space-y-1.5 text-xs shadow-2xs">
            <div className="flex items-center gap-1.5 text-stone-700">
              <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" aria-hidden="true" />
              <span className="text-stone-400 font-medium">Email:</span>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-bold text-red-600 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-stone-700">
              <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" aria-hidden="true" />
              <span className="text-stone-400 font-medium">Phone:</span>
              <a
                href={`tel:${SUPPORT_PHONE.replace(/[^+\d]/g, "")}`}
                className="font-bold text-stone-900 hover:text-red-600 hover:underline"
              >
                {SUPPORT_PHONE}
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-stone-700">
              <span className="text-stone-400 font-medium">Subject:</span>
              <span className="font-semibold text-stone-900">Account Deletion Request</span>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-stone-500">
            Please include the email address or phone number associated with your account for identity verification.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-red-200/80 bg-red-50/50 p-4 flex items-start gap-3 text-xs text-red-900">
        <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
        <p className="leading-relaxed">
          <strong>Important Note:</strong> Deleting your account will permanently disable your login, saved delivery addresses, and preferences. Certain transaction and accounting records will be retained where required by applicable law (such as tax compliance and fraud prevention).
        </p>
      </div>
    </div>
  );

  return (
    <LegalLayout
      document={document}
      description="Hungry Hetauda provides transparent account and data deletion mechanisms in compliance with Google Play Developer Program Policies."
      breadcrumbs={[{ label: "Account Deletion" }]}
      extraNotice={deletionQuickGuide}
    />
  );
}
