import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

export interface SEOProps {
  title: string;
  description: string;
  path: string;
}

export function constructMetadata({
  title,
  description,
  path,
}: SEOProps): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? `${SITE_NAME} | Food Delivery` : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/brand/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Food Delivery & Brand Portal`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/brand/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
