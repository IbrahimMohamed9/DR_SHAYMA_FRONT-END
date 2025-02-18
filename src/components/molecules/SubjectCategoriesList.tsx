"use client";

import { FC, useState, useEffect } from "react";
import SubjectCategory from "@atoms/SubjectCategory";
import { SubcategoryType } from "@/types";

type SubjectCategoriesListProps = {
  color: string;
  subcategories: SubcategoryType[];
  currentCategory: string;
  currentSubcategory: string;
};

const SubjectCategoriesList: FC<SubjectCategoriesListProps> = ({
  color,
  subcategories,
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

  const categoryElementsList = subcategories.map((subcategory) => (
    <li
      key={subcategory.subcategoryId}
      className="text-nowrap m-1 inline-block"
    >
      <SubjectCategory
        valueKey={subcategory.subcategoryEn}
        value={subcategory.subcategoryAr}
        color={color}
        currentCategory={currentCategory}
        currentSubcategory={currentSubcategory}
      />
    </li>
  ));

  return (
    <ul className={`flex flex-wrap gap-2 mb-4 ${ulClassName}`}>
      {categoryElementsList}
    </ul>
  );
};

export default SubjectCategoriesList;
