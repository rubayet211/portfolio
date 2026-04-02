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
      <Header />
      <main className="flex-1 pt-24 md:pt-28">{children}</main>
      <Footer />
      <ScrollArrow />
    </div>
  );
}
