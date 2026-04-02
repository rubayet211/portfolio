import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Projects",
  description:
    "Selected product, e-commerce, SaaS, and full-stack work by Rhyme Rubayet with clearer stack and link details.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <div className="container-shell">
        <section className="surface-card page-reveal p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Projects</span>
            <h1 className="section-title mt-4 text-left">Work that shows range without losing product focus.</h1>
            <p className="section-copy mt-5">
              These projects span commerce, education, SaaS, and platform-style workflows. Some are live client
              deployments, while others are source-available build examples.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {siteContent.projects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:border-[var(--color-accent-soft)] hover:bg-white/[0.05]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(9,12,16,0.05),rgba(9,12,16,0.6))]" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="tag-chip">{project.type}</span>
                    <span className="tag-chip">{project.status}</span>
                    {project.featured ? <span className="tag-chip">Featured</span> : null}
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold text-white">{project.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/70">{project.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="tag-chip">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button"
                      >
                        Live demo
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {project.repoUrl ? (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                      >
                        Source code
                        <Github className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Looking for more context?</p>
              <p className="mt-2 text-sm leading-7 text-white/[0.65]">
                Additional experiments and source-available work live on GitHub.
              </p>
            </div>
            <Link
              href="https://github.com/rubayet211"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub profile
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
