import { siteContent } from "@/content/site";

const LOCAL_FALLBACK_URL = "http://localhost:3000";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return new URL(LOCAL_FALLBACK_URL);
  }

  const normalizedUrl = configuredUrl.startsWith("http")
    ? configuredUrl
    : `https://${configuredUrl}`;

  try {
    return new URL(normalizedUrl);
  } catch {
    return new URL(LOCAL_FALLBACK_URL);
  }
}

export function buildPageMetadata({ title, description, path = "/" }) {
  const siteUrl = getSiteUrl();
  const pageUrl = new URL(path, siteUrl).toString();
  const imageUrl = new URL(siteContent.seo.ogImage, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteContent.person.name}`,
      description,
      url: pageUrl,
      siteName: siteContent.seo.siteName,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Rhyme Rubayet, full-stack product engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteContent.person.name}`,
      description,
      images: [imageUrl],
    },
  };
}
