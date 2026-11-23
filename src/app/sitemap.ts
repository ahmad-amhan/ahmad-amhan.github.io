import type { MetadataRoute } from "next";
import { site } from "@/content/profile";

export const dynamic = "force-static";

/** Empty until NEXT_PUBLIC_SITE_URL is set (a sitemap needs absolute URLs). */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return [{ url: `${site.url.replace(/\/$/, "")}/`, changeFrequency: "monthly", priority: 1 }];
}
