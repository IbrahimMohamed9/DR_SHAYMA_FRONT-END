"use client";

import { FC, useState, useEffect } from "react";
import SubjectCategory from "@atoms/SubjectCategory";

type SubjectCategoriesListProps = {
  color: string;
  categories: Record<string, string>;
  currentCategory: string;
  currentSubcategory: string;
};

const SubjectCategoriesList: FC<SubjectCategoriesListProps> = ({
  color,
  categories,
  currentCategory,
  currentSubcategory,
}) => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in document.documentElement);
  }, []);

  const ulClassName = isTouch
    ? "whitespace-nowrap overflow-x-auto hidden-scrollbar"
    : "";

  const categoryElementsList = Object.entries(categories).map(
    ([key, value]) => (
      <li key={key} className="text-nowrap m-1 inline-block">
        <SubjectCategory
          valueKey={key}
          value={value}
          color={color}
          currentCategory={currentCategory}
          currentSubcategory={currentSubcategory}
        />
      </li>
    )
  );

  return (
    <ul className={`flex flex-wrap gap-2 mb-4 ${ulClassName}`}>
      {categoryElementsList}
    </ul>
  );
};

export default SubjectCategoriesList;
