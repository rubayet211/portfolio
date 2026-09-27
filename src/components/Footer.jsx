import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { navigationItems, siteContent } from "@/content/site";
import ResumeLink from "@/components/ResumeLink";

const socialIcons = {
  GitHub: Github,
  X: Twitter,
  LinkedIn: Linkedin,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-shell px-4 py-10 sm:px-0">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div>
            <p className="eyebrow">{siteContent.person.name}</p>
            <p className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-foreground">
              {siteContent.person.tagline}
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted">{siteContent.footer.note}</p>
            <a href={`mailto:${siteContent.person.email}`} className="mt-4 inline-flex min-h-11 items-center text-sm text-foreground">
              {siteContent.person.email}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Pages</p>
            <div className="mt-3 flex flex-col">
              <Link href="/" className="inline-flex min-h-11 items-center text-sm text-muted hover:text-foreground">
                Home
              </Link>
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-sm text-muted hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Elsewhere</p>
            <div className="mt-3 flex items-center gap-2">
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
            <ResumeLink className="mt-4 inline-flex min-h-11 items-center border-0 bg-transparent text-left text-sm text-muted hover:text-foreground">
              Résumé
            </ResumeLink>
            <p className="mt-2 text-sm leading-6 text-muted">{siteContent.person.availability}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteContent.person.name}
          </p>
          <p>{siteContent.person.location}</p>
        </div>
      </div>
    </footer>
  );
}
