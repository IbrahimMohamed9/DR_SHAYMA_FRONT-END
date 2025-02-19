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
      className={`rounded-16 border hover:border-black border-${color}
      hover:border-opacity-50 text-base font-bold py-1 px-2 cursor-pointer hover:text-white 
      transition-all duration-300 hover:bg-${color} py-2 px-4 ${
        currentSubcategory === valueKey
          ? `bg-${color} border-black text-white  border-opacity-50`
          : ""
      }`}
    >
      {value}
    </Link>
  );
};

export default SubjectCategory;
