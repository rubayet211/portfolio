import Image from "next/image";
import ExperienceList from "@/components/ExperienceList";
import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Rhyme Rubayet is a full-stack product engineer in Dhaka, working remotely with ComboKid and shipping his own production systems.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="page-shell">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.7fr)] lg:items-start">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="section-title mt-4">I ship the system, not only the screen.</h1>
            <p className="section-copy mt-5 max-w-2xl">{siteContent.about.intro}</p>
            <div className="mt-8 grid max-w-2xl gap-5">
              {siteContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-8 grid max-w-2xl gap-3">
              {siteContent.about.principles.map((principle) => (
                <li key={principle} className="border-l border-accent pl-3 text-sm leading-6 text-muted">
                  {principle}
                </li>
              ))}
            </ul>
            <a href={siteContent.person.resumePath} download className="secondary-button mt-8">
              Download résumé
            </a>
          </div>

          <figure className="lg:pt-14">
            <div className="relative aspect-[4/5] overflow-hidden border border-line">
              <Image
                src="/profile.png"
                alt={`Portrait of ${siteContent.person.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              {siteContent.person.location}. {siteContent.person.availability}
            </figcaption>
          </figure>
        </div>

        <section className="mt-16 border-t border-line pt-12">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">Experience</h2>
          <div className="mt-8">
            <ExperienceList />
          </div>
        </section>
      </div>
    </div>
  );
}
