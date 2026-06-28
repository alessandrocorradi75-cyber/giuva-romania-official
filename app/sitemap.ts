import type { MetadataRoute } from "next";
import { disciplines, newsCenter } from "@/data/site";

const baseUrl = "https://www.giuva.ro";

const staticRoutes = [
  "",
  "/ro",
  "/en",
  "/despre",
  "/discipline",
  "/giuva-ai",
  "/giuva-network",
  "/resurse-institutionale",
  "/transparenta",
  "/guvernanta",
  "/events",
  "/publicatii",
  "/download-center",
  "/faq",
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
  const newsRoutes = newsCenter.map((article) => `/news/${article.slug}`);
  const disciplineRoutes = disciplines.map((discipline) => `/discipline/${discipline.slug}`);

  return [...staticRoutes, ...disciplineRoutes, ...newsRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/discipline/") ? 0.75 : 0.7
  }));
}
