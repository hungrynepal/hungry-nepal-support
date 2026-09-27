import { NavItem } from "@/types";

export const SITE_NAME = "Hungry Hetauda";
export const COMPANY_NAME = "Hungry Hetauda Private Limited";
export const SUPPORT_EMAIL = "contact@hungryheatauda.com";
export const SUPPORT_PHONE = "+977 980-2501461";
export const LOCATION = "Hetauda, Makwanpur, Nepal";
export const TAGLINE = "Your Favorite Meals, Delivered Fresh in Hetauda.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://help.hungrynepal.com";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Delete Account", href: "/delete-account" },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Account Deletion", href: "/delete-account" },
];
