import { siteContent } from "@/content/site";

export default function ExperienceList() {
  return (
    <div className="grid gap-8">
      {siteContent.experience.map((job) => (
        <article key={`${job.company}-${job.role}`} className="border-t border-line pt-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              {job.role}
              <span className="text-muted"> · {job.company}</span>
            </h3>
            <p className="mono text-xs uppercase tracking-[0.12em] text-muted">{job.period}</p>
          </div>
          <p className="mt-2 text-sm text-muted">{job.location}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-foreground">{job.summary}</p>
          <ul className="mt-5 grid gap-3">
            {job.points.map((point) => (
              <li key={point} className="max-w-3xl text-sm leading-6 text-muted">
                {point}
              </li>
            ))}
          </ul>
        </article>
      ))}
      <p className="text-sm leading-6 text-muted">{siteContent.person.education}. 2020–2024.</p>
    </div>
  );
}
