import React from "react";
import { servicesData } from "../data/services";
import { ServiceCard } from "../components/ServiceCard";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#082B59] tracking-tight">
            Our <span className="text-[#0868B2]">Services</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#65748A] font-medium leading-relaxed">
            End-to-end digital services to turn your ideas into impactful digital experiences.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
