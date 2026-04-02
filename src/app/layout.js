import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import ClientLayout from "./clientLayout";
import { siteContent } from "@/content/site";
import { getSiteUrl } from "@/lib/metadata";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["system-ui", "sans-serif"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();
const ogImageUrl = new URL(siteContent.seo.ogImage, siteUrl).toString();

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
        alt: `${siteContent.person.name} profile image`,
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
  themeColor: "#090c10",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
