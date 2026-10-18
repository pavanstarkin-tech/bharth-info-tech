import React from "react";
import { PlaceholderImage } from "./PlaceholderImage";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "16/9" | "16/10" | "4/3" | "1/1" | "auto" | "3/2";
  priority?: boolean;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = (props) => {
  return <PlaceholderImage {...props} />;
};
