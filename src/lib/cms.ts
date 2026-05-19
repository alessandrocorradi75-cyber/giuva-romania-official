export type ContentSource = "static" | "sanity" | "strapi";

export const contentSource: ContentSource = "static";

export function cmsStatus() {
  return {
    source: contentSource,
    nextStep:
      "Connect Sanity or Strapi and replace static data imports with typed fetchers."
  };
}
