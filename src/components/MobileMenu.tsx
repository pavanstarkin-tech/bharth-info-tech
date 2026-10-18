import React from "react";
import { ArrowRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeSection,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Our Work", href: "#our-work" },
    { label: "About Us", href: "#about-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact-us" },
  ];

  return (
    <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl px-4 pt-4 pb-6 animate-fadeIn z-50">
      <nav className="flex flex-col space-y-1">
        {navLinks.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <button
              key={link.href}
              onClick={() => onNavigate(link.href)}
              className={`w-full text-left px-4 py-3 rounded-xl font-heading text-sm font-semibold transition-colors ${
                isActive
                  ? "text-[#0868B2] bg-[#EDF6FC]"
                  : "text-[#26364B] hover:bg-slate-50"
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-4 pt-4 border-t border-slate-100">
        <button
          onClick={() => onNavigate("#contact-us")}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-heading font-bold text-sm text-white bg-[#082B59] hover:bg-[#0868B2] transition-colors shadow-soft"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
