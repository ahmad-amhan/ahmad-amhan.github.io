import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { profile, type Contact } from "@/content/profile";

/**
 * CV variants differ only in contact details.
 *
 * `cairo` is public: it is exported with the site and is the downloadable PDF.
 * Any other variant lives in `content/cv-variants.local.json`, which is
 * git-ignored, and is only rendered when CV_PRIVATE=1 (set by `pnpm cv`).
 * That keeps private phone numbers out of the deployed site and out of git.
 */
const LOCAL_FILE = path.join(process.cwd(), "content", "cv-variants.local.json");

export const PUBLIC_VARIANT = "cairo";

function privateVariants(): Record<string, Contact> {
  if (process.env.CV_PRIVATE !== "1" || !existsSync(LOCAL_FILE)) return {};
  return JSON.parse(readFileSync(LOCAL_FILE, "utf8")) as Record<string, Contact>;
}

export function cvVariants(): Record<string, Contact> {
  return { [PUBLIC_VARIANT]: profile.contact, ...privateVariants() };
}
