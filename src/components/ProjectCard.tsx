import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card-style group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-background-elevated">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-sm font-serif text-foreground-secondary mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
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
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-md transition-colors duration-200"
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
