import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card-style group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg relative h-full flex flex-col">
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-background-elevated flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Description with hover tooltip */}
        <div className="relative group/desc flex-grow">
          <p className="text-sm font-serif text-foreground-secondary mb-4 line-clamp-4 cursor-help">
            {project.description}
          </p>
          
          {/* Full description tooltip on hover - positioned top right */}
          <div className="absolute right-0 bottom-full mb-2 p-4 bg-background-elevated border border-border rounded-lg shadow-xl opacity-0 invisible group-hover/desc:opacity-100 group-hover/desc:visible transition-all duration-200 z-50 pointer-events-none max-w-sm">
            <p className="text-sm font-serif text-foreground-secondary leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-sans text-foreground-tertiary border border-border rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        {/* <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-md transition-colors duration-200 flex-shrink-0"
        >
          View Project
          <ExternalLink
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </a> */}
          <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-md transition-colors duration-200 flex-shrink-0 self-start"
        >
          View Project
          <ExternalLink
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}
