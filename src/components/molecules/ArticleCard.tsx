import { FC } from "react";
import ArticleCardText from "@atoms/ArticleCardText";
import Image from "next/image";

type ArticleCardProps = {
  category: string;
  title: string;
  description: string;
  date: string;
  imgSrc: string;
  className?: string;
};

const ArticleCard: FC<ArticleCardProps> = ({
  category,
  title,
  description,
  date,
  imgSrc,
  className,
}) => {
  return (
    <div
      className={`flex flex-col rounded-md shadow-md w-190 md:w-190 lg:w-360 ${
        className || ""
      }`}
    >
      <Image
        src={imgSrc}
        alt={title}
        width={360}
        height={190}
        className="rounded-lg object-cover w-full h-[190px]"
      />
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
