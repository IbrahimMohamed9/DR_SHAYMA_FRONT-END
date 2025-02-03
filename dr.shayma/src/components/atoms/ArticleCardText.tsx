import { FC } from "react";
import { Categories } from "../../assets/utils/Constants";

function getCardCategoryColor(category: string) {
  switch (category) {
    case Categories.RAISING:
      return "main-blue";
    case Categories.DOCTRINAL_EDUCATION:
      return "main-orange";
    case Categories.HEALTH:
      return "main-green";
    case Categories.FAMILY_AND_LIFE:
      return "main-red";
    default:
      return "black";
  }
}

type ArticleCardTextProps = {
  category: string;
  title: string;
  description: string;
  date: string;
};

const ArticleCardText: FC<ArticleCardTextProps> = ({
  category,
  title,
  description,
  date,
}) => {
  const categoryColor = getCardCategoryColor(category);
  return (
    <div className="flex flex-col gap-y-10 p-3 w-fit">
      <h3 className={"text-" + categoryColor + " text-sm line-clamp-3"}>
        {category}
      </h3>
      <h2 className="font-bold line-clamp-1">{title}</h2>
      <p className="line-clamp-3">
        {description} {description}
        {description}
      </p>
      <time className="text-gray-700 line-clamp-1">{date}</time>
    </div>
  );
};

export default ArticleCardText;
