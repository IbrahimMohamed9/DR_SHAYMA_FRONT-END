import { FC } from "react";
import ArticleCardText from "../atoms/ArticleCardText";

type ArticleCardProps = {
  category: string;
  title: string;
  description: string;
  date: string;
  imgSrc: string;
};

const ArticleCard: FC<ArticleCardProps> = ({
  category,
  title,
  description,
  date,
  imgSrc,
}) => {
  return (
    <div className="flex flex-col rounded-md shadow-md w-190 md:w-190 lg:w-360">
      <img src={imgSrc} alt={title} className="rounded-lg w-fit " />
      <ArticleCardText
        category={category}
        title={title}
        description={description}
        date={date}
      />
    </div>
  );
};

export default ArticleCard;
