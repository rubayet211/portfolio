import Link from "next/link";
import FeaturedProject from "@/components/FeaturedProject";
import ExperienceList from "@/components/ExperienceList";
import SectionHeading from "@/components/SectionHeading";
import ResumeLink from "@/components/ResumeLink";
import { siteContent } from "@/content/site";

const rangeLabels = [
  "Production platforms",
  "Full-stack systems",
  "AI workflows",
  "Browser extensions",
  "Commerce integrations",
];

export default function HomePage() {
  const featuredProjects = siteContent.projects.filter((project) => project.featured);

  return (
    <div className="page-shell">
      <div className="container-shell">
        <section className="grid gap-10 border-b border-line pb-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">{siteContent.hero.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {siteContent.hero.title}
            </h1>
            <p className="mt-4 text-xl font-medium text-foreground sm:text-2xl">{siteContent.hero.role}</p>
            <p className="section-copy mt-5 max-w-2xl">{siteContent.hero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={siteContent.hero.primaryCta.href} className="primary-button">
                {siteContent.hero.primaryCta.label}
              </Link>
              <Link href={siteContent.hero.secondaryCta.href} className="secondary-button">
                {siteContent.hero.secondaryCta.label}
              </Link>
              <ResumeLink className="secondary-button">Résumé</ResumeLink>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {siteContent.socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
            <a href={`mailto:${siteContent.person.email}`} className="mt-3 inline-flex break-all text-sm text-muted hover:text-foreground">
              {siteContent.person.email}
            </a>
          </div>

          <dl className="grid gap-4 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {siteContent.hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-2 text-sm leading-6 text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <ul className="grid border-b border-line sm:grid-cols-2 lg:grid-cols-5" aria-label="Range">
          {rangeLabels.map((label) => (
            <li key={label} className="border-b border-line px-1 py-4 text-sm text-foreground sm:border-b-0 sm:px-4 sm:first:pl-0">
              {label}
            </li>
          ))}
        </ul>

        <section id="work" className="pt-16">
          <SectionHeading eyebrow="Selected work" title="Four systems, four different jobs.">
            The first screen of each project is a current capture of the live deployment. Private repositories stay private.
          </SectionHeading>
          <div className="mt-8">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={project.id} project={project} reverse={index % 2 === 1} priority={index === 0} />
            ))}
          </div>
          <div className="border-t border-line pt-6">
            <Link href="/projects" className="text-sm font-semibold text-accent hover:text-foreground">
              All projects, including commerce and the extension
            </Link>
          </div>
        </section>

        <section id="capabilities" className="mt-20 border-t border-line pt-16">
          <SectionHeading eyebrow="Engineering" title="What the work actually required." />
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {siteContent.capabilities.map((capability) => (
              <article key={capability.title}>
                <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-line pt-16">
          <SectionHeading eyebrow="Experience" title="ComboKid, since March 2024.">
            Remote product work for a Hong Kong-based team. I have not added metrics I cannot verify.
          </SectionHeading>
          <div className="mt-8">
            <ExperienceList />
          </div>
        </section>

        <section id="stack" className="mt-20 border-t border-line pt-16">
          <SectionHeading eyebrow="Stack" title="Tools I use on production work." />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {siteContent.stack.map((group) => (
              <article key={group.title}>
                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="tag-chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-muted">{siteContent.stackNote}</p>
        </section>

        <section className="mt-20 border-t border-line pt-16">
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-foreground">Have a product that needs to ship?</h2>
          <p className="section-copy mt-4 max-w-xl">
            If you need the interface, the data, and the operational path built as one piece of work, start with an email or the contact form.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="primary-button">
              Contact me
            </Link>
            <a href={`mailto:${siteContent.person.email}`} className="secondary-button">
              {siteContent.person.email}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
