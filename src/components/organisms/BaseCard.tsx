"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import getArticleLink from "@/utils/getArticleLink";
import { ArticleType } from "@/types";
import BaseCardImage from "@atoms/BaseCardImage";
import BaseCardContent from "@molecules/BaseCardContent";
import utils from "@/utils/utils";

const BaseCard = ({
  article,
  className = "",
}: {
  article: ArticleType;
  className: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  // const setLoadingState = useSetRecoilState(loadingAtom);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const elementRef = useRef<HTMLAnchorElement>(null);

  if (!article) return null;

  const { title, img, content, createdAt } = article;
  const { color } = utils.categoryDetails(
    article.subcategory.category.categoryEn
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    setIsDragging(false);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
    const rect = elementRef.current?.getBoundingClientRect();
    setStartPosition(rect?.left || 0);
  };

  const handleMouseMove = () => {
    if (isPressed) {
      const rect = elementRef.current?.getBoundingClientRect();
      const moveDistance = rect ? Math.abs(rect.left - startPosition) : 0;
      if (moveDistance > 5) {
        // Small threshold to detect intentional drag
        setIsDragging(true);
      }
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsPressed(false);
    }, 150);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = elementRef.current?.getBoundingClientRect();
    const moveDistance = rect ? Math.abs(rect.left - startPosition) : 0;
    if (moveDistance > 50 && isDragging) {
      e.preventDefault();
    } else {
      // if (!e.ctrlKey) setLoadingState(true);
    }
    setIsDragging(false);
    setStartPosition(0);
  };

  const href = getArticleLink(article);

  return (
    <Link
      ref={elementRef}
      href={href}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      draggable={false}
      className={`relative m-2 h-80 w-32 min-[425px]:w-48 flex flex-col transition-all duration-300 ${
        isPressed
          ? "scale-[0.98] shadow-sm"
          : isHovered
          ? "scale-[1.02] shadow-xl -translate-y-1 bg-gray-50"
          : "shadow-md hover:shadow-xl"
      } rounded-lg overflow-hidden cursor-pointer select-none ${className}`}
    >
      <BaseCardImage
        img={img}
        title={title}
        isHovered={isHovered}
        isPressed={isPressed}
      />
      <BaseCardContent
        color={color}
        title={title}
        content={content}
        date={createdAt}
        isHovered={isHovered}
        horizontal={false}
      />
      <div
        className={`absolute inset-0 bg-${color}/5 transition-opacity duration-150 ${
          isPressed ? "opacity-100" : "opacity-0"
        }`}
      />
    </Link>
  );
};

export default BaseCard;
