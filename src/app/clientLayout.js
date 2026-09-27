"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollArrow from "@/components/ScrollArrow";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="content" className="flex-1 pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
      <ScrollArrow />
    </div>
  );
}
