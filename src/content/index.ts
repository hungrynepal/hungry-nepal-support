import fs from "fs";
import path from "path";
import { parseLegalMarkdown, LegalDocumentData } from "@/lib/legal-parser";
import { aboutContent } from "./about";

export function getLegalDocument(filename: string): LegalDocumentData {
  const filePath = path.join(process.cwd(), "content", filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return parseLegalMarkdown(raw);
}

export function getAboutData() {
  return aboutContent;
}

export function getTermsData(): LegalDocumentData {
  return getLegalDocument("terms.md");
}

export function getPrivacyData(): LegalDocumentData {
  return getLegalDocument("privacy.md");
}

export function getDeleteAccountData(): LegalDocumentData {
  return getLegalDocument("account-delete.md");
}
