import React from "react";
import { company } from "../data/company";
import { Award, Smile, Building2, Clock } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const statsList = [
    {
      value: company.stats.projects,
      label: "Projects Delivered",
      icon: Award,
    },
    {
      value: company.stats.clients,
      label: "Happy Clients",
      icon: Smile,
    },
    {
      value: company.stats.solutions,
      label: "Industry Solutions",
      icon: Building2,
    },
    {
      value: company.stats.experience,
      label: "Years of Experience",
      icon: Clock,
    },
  ];

  return (
    <section id="why-choose-us" className="relative bg-[#062044] text-white overflow-hidden py-12 sm:py-16 border-y border-slate-800/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Why Businesses Choose Us
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-medium">
            Your trusted partner for building practical digital solutions.
          </p>
        </div>

        {/* 4 Stat Columns with Gold Numbers matching reference image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center text-center">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#DDA43A]/40 bg-[#DDA43A]/10 flex items-center justify-center text-[#DDA43A]">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                </div>
                <div className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
