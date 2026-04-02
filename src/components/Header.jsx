"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationItems, siteContent } from "@/content/site";

const primaryNavigation = navigationItems.filter((item) => item.href !== "/contact");

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`header-shell fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        hasScrolled ? "border-white/10 bg-[#090c10]/[0.84] shadow-2xl backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-shell">
        <div className="flex items-center justify-between gap-4 px-1 py-4 sm:px-2">
          <Link href="/" className="inline-flex items-center gap-3 rounded-full pr-3 transition hover:opacity-100">
            <Image
              src="/logo.png"
              alt={`${siteContent.person.name} logo`}
              width={44}
              height={44}
              className="rounded-full border border-white/10 bg-white/[0.03]"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-wide text-white">{siteContent.person.name}</p>
              <p className="text-xs text-white/[0.55]">{siteContent.person.role}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link key={item.href} href={item.href} className={`nav-link ${isActive ? "active" : ""}`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={siteContent.person.resumePath} download className="secondary-button">
              Download CV
            </a>
            <Link href="/contact" className="primary-button">
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} transition duration-300`}
      >
        <div className="fixed inset-0 top-[5.5rem] bg-black/55 backdrop-blur-sm" />
        <div
          id="mobile-navigation"
          className={`fixed inset-x-4 top-[5.9rem] rounded-[2rem] border border-white/10 bg-[#0d1218]/[0.96] p-6 shadow-2xl backdrop-blur-xl transition duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Navigation
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/[0.65]">{siteContent.person.availability}</p>

          <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl border px-4 py-4 text-base font-medium transition ${
                    isActive
                      ? "border-[var(--color-accent-soft)] bg-white/[0.07] text-white"
                      : "border-white/[0.08] bg-white/[0.03] text-white/[0.78] hover:bg-white/[0.06]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
