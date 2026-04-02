import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Skills",
  description:
    "A grouped overview of the technologies and platforms Rhyme Rubayet uses for frontend, backend, and full-stack delivery.",
  path: "/skill",
});

export default function SkillsPage() {
  return (
    <div className="page-shell">
      <div className="container-shell">
        <section className="surface-card page-reveal p-6 sm:p-8 lg:p-10">
          <span className="eyebrow">Skills</span>
          <h1 className="section-title mt-4">Grouped by how I work, not just what I know.</h1>
          <p className="section-copy mt-5 max-w-3xl">
            The goal is not to collect as many tools as possible. I prefer a stack that helps teams ship
            clearly, maintain code confidently, and improve products without unnecessary complexity.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {siteContent.skills.map((group) => (
              <article key={group.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                <h2 className="text-2xl font-semibold text-white">{group.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/[0.68]">{group.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
