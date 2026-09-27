import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "./clientLayout";
import { siteContent } from "@/content/site";
import { getSiteUrl } from "@/lib/metadata";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = getSiteUrl();
const ogImageUrl = new URL(siteContent.seo.ogImage, siteUrl).toString();

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteContent.person.name,
  jobTitle: siteContent.person.role,
  email: siteContent.person.email,
  url: siteUrl.toString(),
  image: new URL("/profile.png", siteUrl).toString(),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "American International University-Bangladesh",
  },
  worksFor: {
    "@type": "Organization",
    name: siteContent.person.currentCompany,
  },
  sameAs: siteContent.socialLinks.map((link) => link.href),
  knowsAbout: [
    "Full-stack product engineering",
    "SvelteKit",
    "Next.js",
    "E-commerce integrations",
    "AI workflow development",
  ],
};

export const metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteContent.seo.defaultTitle,
    template: `%s | ${siteContent.person.name}`,
  },
  description: siteContent.seo.description,
  keywords: siteContent.seo.keywords,
  applicationName: siteContent.person.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.seo.defaultTitle,
    description: siteContent.seo.description,
    url: "/",
    siteName: siteContent.seo.siteName,
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Rhyme Rubayet, full-stack product engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.defaultTitle,
    description: siteContent.seo.description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101214",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
