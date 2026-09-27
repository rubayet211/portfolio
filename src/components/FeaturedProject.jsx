import ProjectActions from "@/components/ProjectActions";
import ProjectMedia from "@/components/ProjectMedia";

export default function FeaturedProject({ project, reverse = false, priority = false }) {
  return (
    <article className="grid gap-8 border-t border-line py-12 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div className={reverse ? "lg:order-2" : undefined}>
        <ProjectMedia project={project} priority={priority} />
      </div>
      <div className={reverse ? "lg:order-1" : undefined}>
        <p className="eyebrow">{project.eyebrow}</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{project.title}</h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">{project.summary}</p>
        <ul className="mt-6 grid gap-3">
          {project.built.slice(0, 3).map((item) => (
            <li key={item} className="border-l border-accent pl-3 text-sm leading-6 text-foreground">
              {item}
            </li>
          ))}
        </ul>
        <ProjectActions project={project} emphasizeVisit />
      </div>
    </article>
  );
}
