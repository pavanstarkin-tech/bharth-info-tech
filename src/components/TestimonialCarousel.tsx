import React, { useState, useEffect, useCallback } from "react";
import { TestimonialItem } from "../data/testimonials";
import { Star, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const [_currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Client Testimonials Carousel"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-soft hover:shadow-md transition-shadow duration-300 flex items-start gap-4 text-left"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 shadow-sm bg-slate-100">
              <img
                src={item.portrait}
                alt={item.portraitAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <div className="font-heading text-xs sm:text-sm font-bold text-[#082B59]">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#65748A]">
                  {item.role}
                </div>
              </div>
              <div className="flex items-center gap-1 pt-0.5">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E59819] text-[#E59819]" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border border-slate-200 text-[#082B59] hover:bg-[#EDF6FC]"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsPlaying((p) => !p)}
          className="p-2 rounded-full border border-slate-200 text-slate-500 hover:text-[#082B59]"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full border border-slate-200 text-[#082B59] hover:bg-[#EDF6FC]"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
