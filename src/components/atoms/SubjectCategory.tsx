import Link from "next/link";
import { FC } from "react";

type subjectCategoryProps = {
  color: string;
  valueKey: string;
  value: string;
  currentSubcategory?: string;
  currentCategory: string;
};

const SubjectCategory: FC<subjectCategoryProps> = ({
  color,
  valueKey,
  value,
  currentSubcategory = "",
  currentCategory,
}) => {
  return (
    <Link
      href={`/articles/${currentCategory}/${valueKey}/`}
      className={`rounded-16 border border-${color} hover:border-black 
      hover:border-opacity-50 text-base py-1 px-2 cursor-pointer hover:text-white 
      transition-all duration-300 hover:bg-${color}
      ${
        currentSubcategory === valueKey
          ? `bg-${color} border-black text-white  border-opacity-50`
          : ""
      }
      `}
    >
      {value}
    </Link>
  );
};

export default SubjectCategory;
