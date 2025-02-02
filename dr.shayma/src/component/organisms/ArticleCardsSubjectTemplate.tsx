import { FC } from "react";
import SubjectTemplateArticleCard from "../molecules/SubjectTemplateArticleCard";
import { useRecoilState } from "recoil";
import articlesState from "../../assets/atoms/articlesCardState";

type ArticleCardsSubjectTemplateProps = {
  color: string;
};

const ArticleCardsSubjectTemplate: FC<ArticleCardsSubjectTemplateProps> = ({
  color,
}) => {
  const [articles] = useRecoilState(articlesState);

  return (
    <div className="flex flex-col p-4 border border-gray-300 rounded-lg gap-y-4 my-7">
      {articles.map((article, index) => (
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
