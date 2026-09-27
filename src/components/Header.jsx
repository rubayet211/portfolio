"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationItems, siteContent } from "@/content/site";
import ResumeLink from "@/components/ResumeLink";

const primaryNavigation = navigationItems.filter((item) => item.href !== "/contact");

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

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

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`header-shell fixed inset-x-0 top-0 z-50 ${
        hasScrolled ? "border-line bg-background" : "border-transparent bg-background/80"
      }`}
    >
      <div className="container-shell">
        <div className="flex items-center justify-between gap-4 px-1 py-3 sm:px-0">
          <Link href="/" className="inline-flex min-h-11 items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={36}
              height={36}
              className="rounded-sm border border-line"
            />
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-foreground">{siteContent.person.name}</span>
              <span className="hidden text-xs text-muted sm:block">{siteContent.person.role}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link key={item.href} href={item.href} className={`nav-link ${isActive ? "active" : ""}`} aria-current={isActive ? "page" : undefined}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ResumeLink className="secondary-button">Résumé</ResumeLink>
            <Link href="/contact" className="primary-button">
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line text-foreground lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-line bg-background lg:hidden">
          <nav className="container-shell flex flex-col px-1 py-3" aria-label="Mobile">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b border-line px-1 py-4 text-base ${isActive ? "text-foreground" : "text-muted"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <ResumeLink className="border-0 bg-transparent px-1 py-4 text-left text-base text-foreground">
              Résumé
            </ResumeLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
