import { FC } from "react";
import SubjectTemplateArticleCard from "@molecules/SubjectTemplateArticleCard";
import { ArticleType } from "@/types";

type ArticleCardsSubjectTemplateProps = {
  color: string;
  articles: ArticleType[];
};

const ArticleCardsSubjectTemplate: FC<ArticleCardsSubjectTemplateProps> = ({
  color,
  articles,
}) => {
  return (
    <div className="flex flex-col p-4 border border-gray-300 rounded-lg gap-y-4 my-7">
      {articles.map((article: ArticleType, index: number) => (
        <SubjectTemplateArticleCard
          key={index}
          article={article}
          index={index}
          color={color}
        />
      ))}
    </div>
  );
};

export default ArticleCardsSubjectTemplate;
