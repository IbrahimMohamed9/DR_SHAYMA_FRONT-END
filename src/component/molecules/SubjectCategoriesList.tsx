import { FC } from "react";
import SubjectCategory from "../atoms/SubjectCategory";
import { useRecoilState } from "recoil";
import subjectCategoryState from "../../assets/atoms/subjectState";

type SubjectCategoriesListProps = {
  color: string;
};

const SubjectCategoriesList: FC<SubjectCategoriesListProps> = ({ color }) => {
  const [categories] = useRecoilState(subjectCategoryState);

  // Check if the device is touch-enabled
  const isTouch = "ontouchstart" in document.documentElement;
  const ulClassName = isTouch
    ? "whitespace-nowrap overflow-x-auto hidden-scrollbar"
    : "";

  const categoryElementsList = Object.entries(categories).map(
    ([key, value]) => (
      <li key={key} className="text-nowrap m-1 inline-block">
        <SubjectCategory valueKey={key} value={value} color={color} />
      </li>
    )
  );

  return <ul className={ulClassName}>{categoryElementsList}</ul>;
};

export default SubjectCategoriesList;
