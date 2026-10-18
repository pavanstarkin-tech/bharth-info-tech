import React from "react";
import { SolutionItem } from "../data/solutions";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  solution: SolutionItem;
  onSelectSolution: (serviceName: string) => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  onSelectSolution,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelectSolution(solution.formServiceValue)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelectSolution(solution.formServiceValue);
        }
      }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100 text-left cursor-pointer"
      aria-label={`Select ${solution.title}`}
    >
      {/* Top Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={solution.image}
          alt={solution.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Bottom Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-sm sm:text-base font-bold text-[#082B59] group-hover:text-[#0868B2] transition-colors leading-snug">
            {solution.title}
          </h3>
          <p className="mt-1.5 text-xs text-[#65748A] leading-relaxed">
            {solution.description}
          </p>
        </div>

        {/* Small circular arrow button at bottom right */}
        <div className="mt-4 pt-2 flex justify-end">
          <div className="w-7 h-7 rounded-full bg-slate-100 text-[#082B59] group-hover:bg-[#0868B2] group-hover:text-white flex items-center justify-center transition-all duration-200">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
