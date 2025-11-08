import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-effect rounded-xl overflow-hidden card-hover group">
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden bg-background-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>

        <p className="text-foreground-secondary text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-accent-cyan/10 text-accent-cyan rounded-full border border-accent-cyan/20"
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan hover:bg-accent-blue text-background font-medium rounded-lg transition-all duration-200 group/button"
        >
          View Project
          <ExternalLink
            size={16}
            className="transition-transform group-hover/button:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}

