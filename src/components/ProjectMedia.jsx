import Image from "next/image";

export default function ProjectMedia({ project, priority = false, sizes = "(max-width: 1024px) 100vw, 50vw" }) {
  if (!project.image) {
    return (
      <div className="flex aspect-[16/10] flex-col justify-end border border-line bg-surface p-6">
        <p className="eyebrow">No public screenshot</p>
        <p className="mt-3 max-w-sm text-lg leading-7 text-foreground">
          Browser extension. The interface lives in Chrome, not on a marketing site.
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden border border-line bg-surface">
      <Image
        src={project.image}
        alt={project.imageAlt || project.title}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  );
}
