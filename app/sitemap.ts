import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/contact";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Con barra final, igual que el canonical de la home.
      url: `${BUSINESS.siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
