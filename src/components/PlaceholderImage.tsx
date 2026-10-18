import React, { useState } from "react";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "16/9" | "16/10" | "4/3" | "1/1" | "auto" | "3/2";
  priority?: boolean;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  src,
  alt,
  className = "",
  aspectRatio = "auto",
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectClass =
    aspectRatio === "16/9"
      ? "aspect-[16/9]"
      : aspectRatio === "16/10"
      ? "aspect-[16/10]"
      : aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : aspectRatio === "1/1"
      ? "aspect-square"
      : aspectRatio === "3/2"
      ? "aspect-[3/2]"
      : "";

  return (
    <div
      className={`relative overflow-hidden bg-slate-100 ${aspectClass} ${className}`}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
      )}

      {/* Rendered Image (SVG Placeholder or Replaced Image) */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      />

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-slate-100 text-slate-500 text-center text-xs">
          <span className="font-semibold text-slate-700">Image Asset Notice</span>
          <span className="mt-1 text-[11px] text-slate-500 truncate max-w-xs">{src}</span>
        </div>
      )}
    </div>
  );
};
