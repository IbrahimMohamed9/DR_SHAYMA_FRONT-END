"use client";

import { useEffect, useRef } from "react";

const SafeHtml = ({
  content = "",
  className,
  as: Component = "span",
}: {
  content: string;
  className?: string;
  as?: React.ElementType;
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && typeof content === "string") {
      const cleanContent = content.replace(
        /style="color:\s*rgb\(\d+,\s*\d+,\s*\d+\);?"/g,
        ""
      );
      containerRef.current.innerHTML = cleanContent;
    }
  }, [content]);

  return <Component ref={containerRef} className={className} />;
};

export default SafeHtml;
