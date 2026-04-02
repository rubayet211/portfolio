import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Layers3, MessageSquareText } from "lucide-react";
import { siteContent } from "@/content/site";

export default function HomePage() {
  const featuredProjects = siteContent.projects.filter((project) => project.featured);
  const serviceIcons = [Layers3, BriefcaseBusiness, MessageSquareText];

  return (
    <div className="page-shell">
      <div className="container-shell">
        <section className="hero-panel page-reveal overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,190,118,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(42,92,128,0.18),transparent_32%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="eyebrow">{siteContent.hero.eyebrow}</span>
              <h1 className="section-title mt-5 max-w-4xl text-left text-5xl sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
                {siteContent.hero.title}
              </h1>
              <p className="section-copy mt-6 max-w-2xl text-base sm:text-lg">
                {siteContent.hero.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={siteContent.hero.primaryCta.href} className="primary-button">
                  {siteContent.hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={siteContent.hero.secondaryCta.href} className="secondary-button">
                  {siteContent.hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {siteContent.hero.highlights.map((highlight) => (
                <div key={highlight.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm font-semibold text-white">{highlight.label}</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">{highlight.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {siteContent.home.services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <article key={service.title} className="surface-card page-reveal p-6 sm:p-7">
                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] p-3 text-[var(--color-accent)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/70">{service.description}</p>
              </article>
            );
          })}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="surface-card p-6 sm:p-8">
            <span className="eyebrow">Snapshot</span>
            <h2 className="section-title mt-4 text-left text-4xl">What working together feels like</h2>
            <div className="mt-6 space-y-4">
              {siteContent.home.credibilityNotes.map((note) => (
                <div key={note} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/[0.72]">
                  {note}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {siteContent.home.featuredSkillTags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="surface-card p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow">Featured work</span>
                <h2 className="section-title mt-4 text-left text-4xl">Selected projects</h2>
              </div>
              <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] transition hover:text-white">
                See the full project list
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-4">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[var(--color-accent-soft)] hover:bg-white/[0.05]"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="tag-chip">{project.type}</span>
                    <span className="tag-chip">{project.status}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="tag-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
