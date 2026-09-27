export default function ProjectActions({ project, emphasizeVisit = false }) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="tag-chip">{project.status}</span>
        {project.source === "private" ? <span className="tag-chip">Private repository</span> : null}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={emphasizeVisit ? "primary-button" : "secondary-button"}
          >
            Visit site
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="secondary-button">
            Source
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>
      {project.domainNote ? <p className="max-w-xl text-sm leading-6 text-muted">{project.domainNote}</p> : null}
    </div>
  );
}
