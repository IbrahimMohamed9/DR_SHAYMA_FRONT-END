import { FC } from "react";
import ArticleCardText from "@atoms/ArticleCardText";
import Image from "next/image";
import { ArticleType } from "@/types";

type ArticleCardProps = {
  article: ArticleType;
  className?: string;
};

const ArticleCard: FC<ArticleCardProps> = ({ article, className }) => {
  const { title, description, img, createAt, subcategory } = article;
  return (
    <div
      className={`flex flex-col rounded-md shadow-md w-190 md:w-190 lg:w-360 ${
        className || ""
      }`}
    >
      <Image
        src={img}
        alt={title}
        width={360}
        height={190}
        className="rounded-lg object-cover w-full h-[190px]"
      />
      <ArticleCardText
        category={subcategory.categoryId}
        title={title}
        description={description}
        date={createAt}
      />
    </div>
  );
};

export default ArticleCard;
