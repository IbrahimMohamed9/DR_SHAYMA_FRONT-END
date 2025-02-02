import { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

type subjectCategoryProps = {
  color: string;
  valueKey: string;
  value: string;
};

const SubjectCategory: FC<subjectCategoryProps> = ({
  color,
  valueKey,
  value,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const param = useParams().subcategory;
  const pathParts = location.pathname.split("/");

  // This onClick deletes the param from the URL if the param is not the same and replaces it with the new one
  const onClick = (category: string) => {
    if (pathParts[pathParts.length - 1] === category) {
      return;
    }

    if (pathParts.length === 4) {
      pathParts.pop();
    }

    pathParts.push(category);
    navigate(pathParts.join("/"));
  };

  return (
    <button
      className={`rounded-16 border border-${color} hover:border-black 
      hover:border-opacity-50 text-base py-1 px-2 cursor-pointer hover:text-white 
      transition-all duration-300 hover:bg-${color}
      ${
        param === valueKey
          ? `bg-${color} border-black text-white  border-opacity-50`
          : ""
      }
      `}
      value={valueKey}
      onClick={() => onClick(valueKey)}
    >
      {value}
    </button>
  );
};

export default SubjectCategory;
