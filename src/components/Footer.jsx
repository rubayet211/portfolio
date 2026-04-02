import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { navigationItems, siteContent } from "@/content/site";

const socialIcons = {
  GitHub: Github,
  X: Twitter,
  LinkedIn: Linkedin,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/10">
      <div className="container-shell px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {siteContent.person.name}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{siteContent.person.tagline}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/[0.65]">{siteContent.footer.note}</p>
            <a
              href={`mailto:${siteContent.person.email}`}
              className="mt-5 inline-flex text-sm text-white/[0.82] transition hover:text-[var(--color-accent)]"
            >
              {siteContent.person.email}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Explore</p>
            <div className="mt-4 flex flex-col gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/[0.65] transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Elsewhere</p>
            <div className="mt-4 flex items-center gap-3">
              {siteContent.socialLinks.map((link) => {
                const Icon = socialIcons[link.label];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-sm leading-7 text-white/[0.65]">{siteContent.person.availability}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright (c) {currentYear} {siteContent.person.name}. All rights reserved.</p>
          <p>{siteContent.person.location}</p>
        </div>
      </div>
    </footer>
  );
}
