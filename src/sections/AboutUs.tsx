import React, { useState } from "react";
import { assets } from "../data/assets";
import { ArrowRight, X, Shield, Award, Users } from "lucide-react";

interface AboutUsProps {
  onTalkToTeam: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onTalkToTeam }) => {
  const [showCompanyModal, setShowCompanyModal] = useState(false);

  return (
    <>
      <section id="about-us" className="relative w-full overflow-hidden bg-slate-900">
        {/* Desktop & Laptop: Natural image dimensions (w-full h-auto block) - 100% of image displayed with ZERO cropping */}
        <div className="hidden md:block relative w-full overflow-hidden">
          <img
            src={assets.about}
            alt="Bharat Intelli Tech Riverside Campus"
            className="w-full h-auto block"
          />

          {/* Centered Middle Card Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-6 z-10 pointer-events-none">
            <div className="max-w-md lg:max-w-lg w-full text-center space-y-3 bg-white/85 sm:bg-white/80 backdrop-blur-md p-5 lg:p-6 rounded-3xl shadow-2xl border border-white/95 pointer-events-auto">
              <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#082B59] tracking-tight">
                About <span className="text-[#0868B2]">Us</span>
              </h2>

              <p className="font-heading text-xs lg:text-sm font-bold text-[#082B59]">
                Driven by Innovation. Rooted in Amaravati.
              </p>

              <p className="text-xs text-[#26364B] leading-relaxed">
                Bharat Intelli Tech Systems is a technology company based in Amaravati, Andhra Pradesh, focused on building powerful websites, mobile applications, and custom software solutions for businesses globally. We combine technology, creativity, and business understanding to help you grow in the digital world.
              </p>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowCompanyModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-heading font-semibold text-xs text-white bg-[#0868B2] hover:bg-[#065494] active:bg-[#082B59] transition-all duration-200 shadow-sm group"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View (<768px): Responsive card with anchored background */}
        <div className="md:hidden relative min-h-[460px] flex items-center justify-center p-4">
          <img
            src={assets.about}
            alt="Bharat Intelli Tech Riverside Campus"
            className="absolute inset-0 w-full h-full object-cover object-left"
          />
          <div className="relative z-10 max-w-sm w-full text-center space-y-3 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-white">
            <h2 className="font-heading text-2xl font-extrabold text-[#082B59] tracking-tight">
              About <span className="text-[#0868B2]">Us</span>
            </h2>

            <p className="font-heading text-xs font-bold text-[#082B59]">
              Driven by Innovation. Rooted in Amaravati.
            </p>

            <p className="text-xs text-[#26364B] leading-relaxed">
              Bharat Intelli Tech Systems is a technology company based in Amaravati, Andhra Pradesh, focused on building powerful websites, mobile applications, and custom software solutions for businesses globally.
            </p>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowCompanyModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-heading font-semibold text-xs text-white bg-[#0868B2] hover:bg-[#065494] active:bg-[#082B59] transition-all duration-200 shadow-sm group"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Know More Modal */}
      {showCompanyModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082B59]/75 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200 text-left">
            <button
              onClick={() => setShowCompanyModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#082B59] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-2xl font-bold text-[#082B59] mb-4">
              About Bharat Intelli Tech Systems
            </h3>

            <div className="space-y-3 text-sm text-[#65748A] leading-relaxed">
              <p>
                Headquartered in Amaravati, Andhra Pradesh, Bharat Intelli Tech Systems brings together cross-functional expertise across modern web architectures, native mobile platforms, and customized enterprise solutions.
              </p>
              <p>
                Our mission is to help organizations transition from legacy bottlenecks to agile, cloud-native digital ecosystems. We emphasize clear engineering milestones, rapid iteration cycles, and high code quality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <Shield className="w-5 h-5 text-[#0868B2] mx-auto mb-1.5" />
                <div className="font-heading font-bold text-xs text-[#082B59]">Enterprise Grade</div>
                <div className="text-[11px] text-[#65748A]">Secure &amp; Scalable</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <Users className="w-5 h-5 text-[#078BCB] mx-auto mb-1.5" />
                <div className="font-heading font-bold text-xs text-[#082B59]">Collaborative</div>
                <div className="text-[11px] text-[#65748A]">Direct Communication</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <Award className="w-5 h-5 text-[#DDA43A] mx-auto mb-1.5" />
                <div className="font-heading font-bold text-xs text-[#082B59]">Regional Pride</div>
                <div className="text-[11px] text-[#65748A]">Amaravati Innovation</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setShowCompanyModal(false);
                  onTalkToTeam();
                }}
                className="px-6 py-2.5 rounded-full bg-[#082B59] hover:bg-[#0868B2] text-white text-xs sm:text-sm font-heading font-semibold transition-colors"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
