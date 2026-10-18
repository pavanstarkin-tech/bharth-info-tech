import React, { useEffect } from "react";
import { ProjectItem } from "../data/projects";
import { PlaceholderImage } from "./PlaceholderImage";
import { X, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Cpu } from "lucide-react";

export interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  onDiscussProject?: (serviceName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
  onDiscussProject,
}) => {
  // Close on Escape & Lock body scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#082B59]/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop click */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col my-auto">
        {/* Header bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0868B2] px-2.5 py-1 bg-[#EDF6FC] rounded-full">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-semibold text-[#DDA43A] bg-[#DDA43A]/10 px-2.5 py-1 rounded-full border border-[#DDA43A]/20">
              {project.conceptBadge}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="p-2 rounded-xl text-slate-600 hover:text-[#082B59] hover:bg-slate-100 transition-colors"
              aria-label="Previous project"
              title="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={onNext}
              className="p-2 rounded-xl text-slate-600 hover:text-[#082B59] hover:bg-slate-100 transition-colors"
              aria-label="Next project"
              title="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-600 hover:text-[#082B59] hover:bg-slate-100 transition-colors ml-2"
              aria-label="Close modal"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Large Image Preview */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] shadow-soft">
            <PlaceholderImage
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Title & Overview */}
          <div>
            <h2
              id="modal-project-title"
              className="font-heading text-2xl sm:text-3xl font-extrabold text-[#082B59]"
            >
              {project.title}
            </h2>
            <p className="mt-3 text-base text-[#65748A] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Concept Disclaimer Alert */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF8F2] border border-[#DDA43A]/40 text-xs sm:text-sm text-[#26364B]">
            <AlertCircle className="w-5 h-5 text-[#DDA43A] shrink-0 mt-0.5" />
            <p>
              <strong>Illustrative Sample Concept:</strong> This project specification showcases Bharat Intelli Tech Systems&apos; solution architecture, UI/UX modeling, and development stack. Real completed client case studies will be published following mutual launch approval.
            </p>
          </div>

          {/* 2-Column: Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h3 className="font-heading text-base font-bold text-[#082B59] mb-2">
                Business Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#65748A] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EDF6FC]/60 border border-[#078BCB]/20">
              <h3 className="font-heading text-base font-bold text-[#082B59] mb-2">
                Proposed Solution
              </h3>
              <p className="text-xs sm:text-sm text-[#26364B] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-heading text-lg font-bold text-[#082B59] mb-4">
              Key Architecture Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#26364B]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0868B2] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#082B59]">
              <Cpu className="w-4 h-4 text-[#078BCB]" />
              <span>Example Technology Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold bg-slate-100 text-[#082B59] px-3 py-1.5 rounded-lg border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#65748A]">
              Interested in a similar architecture for your organization?
            </span>
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onDiscussProject) {
                  onDiscussProject("Custom Business Solutions");
                }
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#082B59] hover:bg-[#0868B2] text-white font-heading font-semibold text-sm transition-colors shadow-soft"
            >
              Discuss This Architecture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
