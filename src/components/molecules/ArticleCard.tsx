import { FC } from "react";
import ArticleCardText from "@atoms/ArticleCardText";
import Image from "next/image";
import { ArticleType } from "@/types";
import Link from "next/link";
import getArticleLink from "@/utils/getArticleLink";

type ArticleCardProps = {
  article: ArticleType;
  className?: string;
};

const ArticleCard: FC<ArticleCardProps> = ({ article, className }) => {
  const { title, description, img, createdAt, subcategory } = article;
  return (
    <Link
      href={getArticleLink(article)}
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
        category={subcategory.category.categoryAr}
        title={title}
        description={description}
        date={createdAt}
      />
    </Link>
  );
};

export default ArticleCard;
