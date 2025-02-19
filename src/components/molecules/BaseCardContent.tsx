"use client";

import { CardContent } from "@mui/material";
// import dynamic from "next/dynamic";
import BaseCardTitle from "@atoms/BaseCardTitle";
import BaseCardEnd from "@atoms/BaseCardEnd";
import SafeHtml from "@atoms/SafeHtml";
// const SafeHtml = dynamic(() => import("@atoms/SafeHtml"), { ssr: false });

const BaseCardContent = ({
  title,
  content,
  date,
  isHovered,
  className,
  horizontal,
  color,
}: {
  title?: string;
  content: string;
  date: string;
  isHovered: boolean;
  className?: string;
  horizontal?: boolean;
  color: string;
}) => {
  return (
    <CardContent
      className={`flex flex-col p-3 relative transition-all duration-300 min-w-0 ${
        isHovered ? "bg-gray-50" : ""
      } ${className}`}
    >
      {title && (
        <BaseCardTitle title={title} isHovered={isHovered} color={color} />
      )}
      <div
        className={`flex-1 transition-all line-clamp-${
          horizontal ? 2 : 3
        } duration-300 overflow-hidden ${
          isHovered ? "text-gray-800" : "text-gray-600"
        } ${
          title
            ? `text-xs mt-1 max-h-${horizontal ? "8" : "12"}`
            : "text-sm h-[6.25rem] leading-relaxed tracking-wide line-clamp-5"
        }`}
      >
        <SafeHtml content={content.replace(/<[^>]*>/g, "")} />
      </div>
      <BaseCardEnd isHovered={isHovered} date={date} />
    </CardContent>
  );
};

export default BaseCardContent;
