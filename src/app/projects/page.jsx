import ProjectIndex from "@/components/ProjectIndex";
import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Work",
  description:
    "Selected production platforms, commerce systems, AI products, and a browser extension built by Rhyme Rubayet.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <div className="container-shell">
        <header className="max-w-3xl">
          <p className="eyebrow">Work</p>
          <h1 className="section-title mt-4">Proof, with the source labeled honestly.</h1>
          <p className="section-copy mt-5">
            Featured work is a production platform, a commerce operation, and two AI systems. Supporting
            work is still deployed, or it is an extension with no public store page. Private repositories
            are described here and are not linked.
          </p>
        </header>
        <ProjectIndex projects={siteContent.projects} filters={siteContent.projectFilters} />
      </div>
    </div>
  );
}
