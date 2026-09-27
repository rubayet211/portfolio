import { getSiteUrl } from "@/lib/metadata";

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const paths = ["/", "/projects", "/about", "/contact"];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date("2026-09-26"),
  }));
}
