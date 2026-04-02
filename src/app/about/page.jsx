import Image from "next/image";
import { Download } from "lucide-react";
import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn more about Rhyme Rubayet, a software engineer focused on maintainable full-stack product delivery and polished web experiences.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="page-shell">
      <div className="container-shell">
        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="surface-card page-reveal p-6 sm:p-8">
            <span className="eyebrow">About</span>
            <h1 className="section-title mt-4 text-left">A practical engineer with a product mindset.</h1>
            <p className="section-copy mt-5">{siteContent.about.intro}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {siteContent.about.highlights.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">{item.value}</p>
                </div>
              ))}
            </div>

            <a
              href={siteContent.person.resumePath}
              download={`${siteContent.person.name.replaceAll(" ", "_")}_CV.pdf`}
              className="secondary-button mt-8 inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="space-y-6">
            <div className="surface-card page-reveal p-4 sm:p-5">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src="/profile.png"
                  alt={`Portrait of ${siteContent.person.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(9,12,16,0.24))]" />
              </div>
            </div>

            <article className="surface-card p-6 sm:p-8">
              <h2 className="text-3xl font-semibold text-white">How I work</h2>
              <div className="mt-5 space-y-4">
                {siteContent.about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-8 text-white/[0.72] sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 grid gap-4">
                {siteContent.about.principles.map((principle) => (
                  <div
                    key={principle}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/[0.72]"
                  >
                    {principle}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
