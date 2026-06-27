import type { MetadataRoute } from "next";
import { news } from "@/data/site";

const baseUrl = "https://www.giuva.ro";

const staticRoutes = [
  "",
  "/ro",
  "/en",
  "/despre",
  "/discipline",
  "/riders-rescue",
  "/community",
  "/journey",
  "/project-pulse",
  "/civil-response",
  "/voluntari",
  "/deschide-o-sediu",
  "/partner",
  "/sustine",
  "/news",
  "/contact",
  "/privacy-policy",
  "/cookie-policy"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const newsRoutes = news.map((article) => `/news/${article.slug}`);

  return [...staticRoutes, ...newsRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
