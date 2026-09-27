"use client";

import { useMemo, useState } from "react";
import ProjectActions from "@/components/ProjectActions";
import ProjectMedia from "@/components/ProjectMedia";

function CaseBlock({ label, children }) {
  return (
    <div>
      <dt className="eyebrow">{label}</dt>
      <dd className="mt-2 text-sm leading-6 text-muted">{children}</dd>
    </div>
  );
}

export default function ProjectIndex({ projects, filters }) {
  const [activeFilter, setActiveFilter] = useState(filters[0]?.id ?? "all");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((filter) => {
          const isActive = filter.id === activeFilter;

          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter.id)}
              className={isActive ? "primary-button" : "secondary-button"}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4" aria-live="polite">
        <p className="text-sm text-muted">
          {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      {visibleProjects.length === 0 ? (
        <p role="status" className="mt-10 border-t border-line py-10 text-muted">
          Nothing in this group.
        </p>
      ) : (
        <div className="mt-6 grid gap-16">
          {visibleProjects.map((project) => (
            <article key={project.id} className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <ProjectMedia project={project} sizes="(max-width: 1024px) 100vw, 40vw" />
              <div>
                <p className="eyebrow">{project.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">{project.title}</h2>
                <p className="mt-4 text-base leading-7 text-foreground">{project.summary}</p>
                <dl className="mt-6 grid gap-5">
                  <CaseBlock label="Product">{project.product}</CaseBlock>
                  <CaseBlock label="My role">{project.role}</CaseBlock>
                  <CaseBlock label="Engineering challenge">{project.challenge}</CaseBlock>
                  <div>
                    <dt className="eyebrow">What I built</dt>
                    <dd>
                      <ul className="mt-2 grid gap-2">
                        {project.built.map((item) => (
                          <li key={item} className="text-sm leading-6 text-muted">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Decisions</dt>
                    <dd>
                      <ul className="mt-2 grid gap-2">
                        {project.decisions.map((item) => (
                          <li key={item} className="text-sm leading-6 text-muted">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag-chip">
                      {item}
                    </span>
                  ))}
                </div>
                <ProjectActions project={project} emphasizeVisit />
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
