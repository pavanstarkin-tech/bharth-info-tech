import React, { useState, useEffect } from "react";
import { company } from "../data/company";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Our Work", href: "#our-work" },
    { label: "About Us", href: "#about-us" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-slate-100"
          : "bg-white/90 backdrop-blur-sm py-3 sm:py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center group focus-visible:outline-none"
            aria-label={`${company.name} Home`}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-heading text-xs lg:text-sm font-semibold transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-[#0868B2]"
                      : "text-[#26364B] hover:text-[#0868B2]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0868B2] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Contact Us Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact-us"
              onClick={(e) => handleNavClick(e, "#contact-us")}
              className="px-5 sm:px-6 py-2 rounded-full font-heading font-semibold text-xs sm:text-sm text-white bg-[#0868B2] hover:bg-[#065494] active:bg-[#082B59] transition-all duration-200 shadow-sm"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="p-2 rounded-lg text-[#082B59] hover:bg-slate-100 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-5 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg font-heading text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-[#0868B2] bg-[#EDF6FC]"
                      : "text-[#26364B] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact-us"
              onClick={(e) => handleNavClick(e, "#contact-us")}
              className="mt-3 w-full text-center py-2.5 rounded-full font-heading font-semibold text-sm text-white bg-[#0868B2]"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
