import React, { useState } from "react";
import { assets } from "../data/assets";
import { ArrowRight, Play, X, Landmark, Compass, Sparkles } from "lucide-react";

interface HeroProps {
  onStartProject: () => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-[580px] lg:min-h-[640px] flex items-center pt-20 pb-16 lg:py-0 overflow-hidden bg-[#FAF8F2]"
      >
        {/* Full-width Background Composite from Reference */}
        <div className="absolute inset-0 z-0">
          <img
            src={assets.heroBgFull}
            alt="Amaravati Capital Region Sunset Panorama"
            className="w-full h-full object-cover object-right md:object-center"
          />
          {/* Diagonal white fade on the left half - protects text legibility on laptops while leaving Buddha and sunrise clear */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.90) 28%, rgba(255,255,255,0.65) 44%, rgba(255,255,255,0.2) 58%, transparent 68%)",
            }}
          />
        </div>

        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-left py-6">
            {/* Eyebrow */}
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#082B59] uppercase mb-3 drop-shadow-sm">
              AMARAVATI | FUTURE CAPITAL
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-[#082B59] leading-[1.14] tracking-tight drop-shadow-sm">
              Building Mobile Applications <br className="hidden sm:inline" />
              <span className="text-[#D98207]">for a Smarter Tomorrow</span>
            </h1>

            {/* Supporting Line */}
            <p className="mt-3 text-base sm:text-lg font-heading font-bold text-[#082B59] tracking-wide drop-shadow-sm">
              Websites &nbsp;|&nbsp; Mobile Apps &nbsp;|&nbsp; Custom Business Solutions
            </p>

            {/* Narrative Description - high-contrast deep navy for crystal clear legibility on laptops */}
            <p className="mt-4 text-xs sm:text-sm md:text-base text-[#123055] leading-relaxed max-w-xl font-medium">
              Empowering businesses with innovative digital solutions from the heart of Amaravati, the new era of Andhra Pradesh.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full font-heading font-semibold text-xs sm:text-sm text-white bg-[#0868B2] hover:bg-[#065494] active:bg-[#082B59] transition-all duration-200 shadow-md group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => setShowStoryModal(true)}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full font-heading font-semibold text-xs sm:text-sm text-[#082B59] bg-[#FAF8F2]/90 border border-slate-300 hover:bg-white hover:border-[#0868B2] transition-all duration-200 shadow-sm"
              >
                <div className="w-5 h-5 rounded-full bg-[#082B59] text-white flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>

        {/* Reference Image Badge: Amaravati The Capital of a Brighter Tomorrow */}
        <div className="hidden lg:flex absolute bottom-8 right-12 z-10 flex-col items-end text-right pointer-events-none text-[#7d5614] font-heading select-none opacity-90">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase">AMARAVATI</span>
          <span className="text-[10px] font-semibold tracking-wider">THE CAPITAL OF</span>
          <span className="text-[11px] font-bold tracking-[0.2em]">A BRIGHTER TOMORROW</span>
        </div>
      </section>

      {/* Story Modal */}
      {showStoryModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082B59]/75 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200 text-left">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#082B59] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0868B2]/10 text-[#0868B2] text-xs font-bold uppercase tracking-wider mb-4">
              <Landmark className="w-3.5 h-3.5" />
              <span>Our Amaravati Vision</span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-[#082B59]">
              Driven by Heritage. Engineered for Tomorrow.
            </h3>

            <div className="mt-4 space-y-3 text-sm text-[#65748A] leading-relaxed">
              <p>
                Bharat Intelli Tech Systems is rooted in Amaravati, Andhra Pradesh — a historical crossroads of culture, philosophy, and future smart capital vision.
              </p>
              <p>
                We believe exceptional digital products combine human-centric UX design with rock-solid software engineering. Whether engineering high-traffic e-commerce ecosystems, responsive mobile apps, or enterprise cloud solutions, our goal is to empower organizations with scalable technology built to last.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#0868B2] font-semibold">
                <Compass className="w-4 h-4 text-[#DDA43A]" />
                <span>Headquartered in Amaravati, Andhra Pradesh, India</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowStoryModal(false);
                  onStartProject();
                }}
                className="px-5 py-2 rounded-full bg-[#082B59] hover:bg-[#0868B2] text-white text-xs font-heading font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>Start Project</span>
                <Sparkles className="w-3.5 h-3.5 text-[#DDA43A]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
