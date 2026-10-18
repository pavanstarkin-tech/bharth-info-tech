import React from "react";
import { ServiceItem } from "../data/services";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelectService(service.formServiceValue)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelectService(service.formServiceValue);
        }
      }}
      className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer text-left aspect-[16/11] sm:aspect-[16/10] bg-slate-900 border border-slate-200/40"
      aria-label={`Select ${service.title}`}
    >
      {/* Background Image */}
      <img
        src={service.image}
        alt={service.imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark Gradient Overlay matching reference */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

      {/* Content at Bottom */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4">
        <div className="space-y-1.5">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#26B5D8] transition-colors">
            {service.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-200 leading-snug line-clamp-2 max-w-xs font-normal">
            {service.description}
          </p>
        </div>

        {/* Circular Arrow Button from reference image */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#082B59] flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#0868B2] group-hover:text-white transition-all duration-200 transform group-hover:scale-110">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
