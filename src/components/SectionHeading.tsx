import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  heading,
  description,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span
            className={`text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full ${
              isDark
                ? "bg-[#DDA43A]/20 text-[#DDA43A] border border-[#DDA43A]/30"
                : "bg-[#0868B2]/10 text-[#0868B2] border border-[#0868B2]/20"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.2] ${
          isDark ? "text-white" : "text-[#082B59]"
        }`}
      >
        {heading}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-[#65748A]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
