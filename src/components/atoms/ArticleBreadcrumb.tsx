"use client";

import { FC } from "react";
import utils from "@/utils/utils";
import Link from "next/link";

type ArticleBreadcrumbProps = {
  category?: string;
  subcategory?: string;
};

const ArticleBreadcrumb: FC<ArticleBreadcrumbProps> = ({
  category,
  subcategory,
}) => {
  const { color } = utils.categoryDetails(category);
  const separatorElement = (
    <span className="mx-2 whitespace-nowrap">{">>"}</span>
  );

  // Check if the device is touch-enabled
  const navClassName =
    "ontouchstart" in document.documentElement
      ? "overflow-auto"
      : "flex-wrap overflow-hidden";

  return (
    <div className={`bg-${color} text-white py-2 px-4 mb-5 rounded`}>
      <nav className={`text-sm flex ${navClassName}`}>
        <Link href="/" className="whitespace-nowrap">
          الرئيسية
        </Link>
        {separatorElement}
        <Link href={`/articles/${category}`} className="whitespace-nowrap">
          {category}
        </Link>
        {separatorElement}
        <Link
          href={`/articles/${category}/${subcategory}`}
          className="whitespace-nowrap"
        >
          {subcategory}
        </Link>
      </nav>
    </div>
  );
};

export default ArticleBreadcrumb;
