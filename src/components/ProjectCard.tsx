import React from "react";
import { ProjectItem } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
}) => {
  const handleClick = () => {
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      className="group flex flex-col text-left cursor-pointer transition-all duration-300 hover:-translate-y-2 focus:outline-none bg-white rounded-3xl p-3 sm:p-3.5 border border-slate-200/80 shadow-soft hover:shadow-xl hover:border-[#0868B2]/40"
      aria-label={`Project: ${project.title}`}
    >
      {/* Device Mockup Display Container: Full width, square aspect ratio, no side gaps */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Interactive hover overlay with subtle sheen */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#082B59]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Interactive floating indicator on hover */}
        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#082B59] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-[#0868B2]" />
        </div>
      </div>

      {/* Title & Subtitle beneath image */}
      <div className="mt-3.5 px-1 pb-1 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-base sm:text-lg font-bold text-[#082B59] group-hover:text-[#0868B2] transition-colors line-clamp-1">
            {project.title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#65748A] font-medium">
          {project.categoryLabel}
        </p>
      </div>
    </div>
  );
};

