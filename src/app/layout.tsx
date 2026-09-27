import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { ServiceWorkerRegister } from "@/components/shared/ServiceWorkerRegister";
import {
  SITE_NAME,
  COMPANY_NAME,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  LOCATION,
  SITE_URL,
} from "@/lib/constants";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Official Food Delivery Brand & Support`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Official website, brand information, and legal support portal for Hungry Hetauda food delivery application.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icons/icon-192.png" }],
  },
  manifest: "/manifest.webmanifest",
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: COMPANY_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/brand/logo.svg`,
        email: SUPPORT_EMAIL,
        telephone: SUPPORT_PHONE,
        address: {
          "@type": "PostalAddress",
          addressLocality: LOCATION,
          addressCountry: "NP",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${urbanist.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-stone-50/50 font-sans text-stone-900 antialiased flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
