"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/components/data";
import { ExternalLink } from "lucide-react";

export default function projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="flex flex-1 py-20 px-4 sm:px-6 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-8 sm:mb-12 text-center">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-secondary/30 rounded-lg overflow-hidden shadow-lg group touch-manipulation"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-4 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-accent/80 transition-colors min-h-[44px] min-w-[44px]"
                  >
                    View Live <ExternalLink size={16} />
                  </Link>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-secondary/20"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-300 transform ${
                    hoveredProject === project.id ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/rubayet211"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:no-underline border-b border-accent font-medium px-4 py-3 flex items-center gap-2 transition-all duration-300 transform hover:scale-105 min-h-[44px]"
          >
            View All Projects <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
