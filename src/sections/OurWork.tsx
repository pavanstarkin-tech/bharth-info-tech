import React from "react";
import { projectsData, ProjectItem } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { assets } from "../data/assets";

interface OurWorkProps {
  onDiscussProject: (serviceName: string) => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onDiscussProject }) => {
  const handleSelectProject = (project: ProjectItem) => {
    onDiscussProject(project.title);
  };

  return (
    <section id="our-work" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Subtle Amaravati Heritage Stupa Sketch in Top Right matching reference */}
      <div className="absolute top-0 right-0 w-80 h-32 opacity-15 pointer-events-none select-none">
        <img
          src={assets.footerSketch}
          alt="Amaravati heritage motif"
          className="w-full h-full object-contain object-right-top filter grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#082B59] tracking-tight">
            Our <span className="text-[#0868B2]">Work</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#65748A] font-medium leading-relaxed">
            Real projects. Real results. Real businesses.
          </p>
        </div>

        {/* 4 Interactive Project Cards utilizing full container width without side navigation arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={handleSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

