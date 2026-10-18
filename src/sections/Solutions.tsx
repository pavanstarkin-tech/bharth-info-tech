import React, { useState, useEffect, useRef } from "react";
import { solutionsData } from "../data/solutions";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SolutionsProps {
  onSelectSolution: (serviceName: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution }) => {
  const [activeIndex, setActiveIndex] = useState(2); // Center card active by default
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = solutionsData.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Auto-slide every 3.5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, total]);

  // Touch swipe support for mobile/tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX.current;
    if (Math.abs(diffX) > 40) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="solutions"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#F4F9FD] via-[#EBF4FA] to-[#F4F9FD] relative overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching other sections */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#082B59] tracking-tight">
            Our <span className="text-[#0868B2]">Solutions</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#65748A] font-medium leading-relaxed">
            Transforming ideas into powerful digital products for every industry.
          </p>
        </div>

        {/* Carousel Stage with Navigation Controls completely outside cards */}
        <div className="relative flex items-center justify-between px-1 sm:px-4 lg:px-8">
          {/* Left Arrow Button - positioned completely outside cards */}
          <button
            type="button"
            onClick={handlePrev}
            className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white shadow-lg hover:shadow-2xl border border-slate-200/90 text-[#082B59] hover:text-[#0868B2] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-40 shrink-0"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 3D Arc Sliding Stage - constrained so cards stay strictly between the flanking arrows */}
          <div
            className="relative flex-1 h-[420px] sm:h-[460px] lg:h-[490px] flex items-center justify-center overflow-visible mx-2 sm:mx-6 lg:mx-8"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {solutionsData.map((item, index) => {
              // Calculate circular shortest distance to active index (-2 to +2)
              let diff = index - activeIndex;
              if (diff > 2) diff -= total;
              if (diff < -2) diff += total;

              const isCenter = diff === 0;
              const absDiff = Math.abs(diff);

              // Decreased card scale according to position:
              // Center card: 1.22 (prominent)
              // Mid cards (diff 1): 0.84 (moderately smaller)
              // Outer cards (diff 2): 0.68 (much smaller)
              const cardScale = isCenter ? 1.22 : absDiff === 1 ? 0.84 : 0.68;
              const cardTranslateY = isCenter ? "-26px" : absDiff === 1 ? "10px" : "24px";
              const cardRotate = diff * 4;
              const cardOpacity = absDiff > 2 ? 0 : absDiff === 2 ? 0.72 : absDiff === 1 ? 0.9 : 1;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isCenter) {
                      onSelectSolution(item.formServiceValue);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  className={`absolute w-[220px] sm:w-[250px] md:w-[270px] lg:w-[285px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer will-change-transform flex flex-col items-center`}
                  style={{
                    transform: `
                      translateX(calc(${diff} * clamp(110px, 15vw, 195px)))
                      translateY(${cardTranslateY})
                      scale(${cardScale})
                      rotate(${cardRotate}deg)
                    `,
                    zIndex: isCenter ? 30 : 20 - absDiff,
                    opacity: cardOpacity,
                    pointerEvents: absDiff > 2 ? "none" : "auto",
                  }}
                  aria-label={`${item.title} solution`}
                >
                  {/* Pillow Card Container */}
                  <div
                    className={`w-full bg-white rounded-[26px] sm:rounded-[34px] transition-all duration-500 overflow-hidden ${
                      isCenter
                        ? "p-2.5 sm:p-3.5 shadow-2xl ring-2 ring-[#0868B2]/40 shadow-[#0868B2]/25"
                        : "p-2 sm:p-2.5 shadow-md hover:shadow-xl border border-slate-200/80"
                    }`}
                  >
                    <div className="w-full aspect-[3/4] rounded-[20px] sm:rounded-[26px] overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Title & See More beneath card */}
                  <div className="text-center mt-3 sm:mt-3.5 space-y-0.5 select-none w-full">
                    <h3
                      className={`font-heading tracking-tight transition-colors line-clamp-1 ${
                        isCenter
                          ? "text-base sm:text-lg lg:text-xl font-extrabold text-[#0868B2]"
                          : absDiff === 1
                          ? "text-xs sm:text-sm font-bold text-[#082B59]"
                          : "text-xs font-semibold text-[#65748A]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSolution(item.formServiceValue);
                      }}
                      className={`text-xs font-semibold transition-all block mx-auto ${
                        isCenter
                          ? "text-[#0868B2] hover:text-[#065494] underline"
                          : "text-[#65748A] hover:text-[#0868B2] hover:underline"
                      }`}
                    >
                      See More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button - positioned completely outside cards */}
          <button
            type="button"
            onClick={handleNext}
            className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white shadow-lg hover:shadow-2xl border border-slate-200/90 text-[#082B59] hover:text-[#0868B2] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-40 shrink-0"
            aria-label="Next solution"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* 5 Pagination Dots below the cards */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-8 sm:mt-10">
          {solutionsData.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 ${
                activeIndex === index
                  ? "w-3.5 h-3.5 rounded-full bg-[#0868B2] scale-110 shadow-sm"
                  : "w-2.5 h-2.5 rounded-full border-2 border-[#0868B2]/40 bg-transparent hover:border-[#0868B2]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


