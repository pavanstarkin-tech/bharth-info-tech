import React from "react";
import { testimonialsData } from "../data/testimonials";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#082B59] tracking-tight">
            What Our <span className="text-[#0868B2]">Clients Say</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#65748A] font-medium leading-relaxed">
            People who trusted us, and the results speak for themselves.
          </p>
        </div>

        {/* Testimonials Carousel Container with Arrows matching reference */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            type="button"
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md text-slate-600 hover:text-[#0868B2] hover:border-[#0868B2] items-center justify-center transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* 3 White Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-soft hover:shadow-md transition-shadow duration-300 flex items-start gap-4 text-left"
              >
                {/* Circular Portrait on the Left */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 shadow-sm bg-slate-100">
                  <img
                    src={item.portrait}
                    alt={item.portraitAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Testimonial Quote & Author Info */}
                <div className="flex-1 space-y-2">
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="pt-1">
                    <div className="font-heading text-xs sm:text-sm font-bold text-[#082B59]">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-[#65748A]">
                      {item.role}
                    </div>
                  </div>

                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1 pt-0.5">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#E59819] text-[#E59819]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md text-slate-600 hover:text-[#0868B2] hover:border-[#0868B2] items-center justify-center transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
