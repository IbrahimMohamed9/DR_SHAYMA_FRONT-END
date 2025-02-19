import { FC } from "react";
import SubjectTemplateArticleCardImage from "@atoms/SubjectTemplateArticleCardImage";
import SubjectTemplateArticleCardText from "@atoms/SubjectTemplateArticleCardText";
import { ArticleType } from "@/types";

type SubjectTemplateArticleCardProps = {
  index: number;
  article: ArticleType;
  color: string;
};

const SubjectTemplateArticleCard: FC<SubjectTemplateArticleCardProps> = ({
  index,
  article,
  color,
}) => {
  const { img, title } = article;

  return (
    <div
      className={`flex border border-gray-300 flex-col ${
        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <SubjectTemplateArticleCardImage
        index={index}
        imgSrc={img}
        title={title}
      />
      <SubjectTemplateArticleCardText article={article} color={color} />
    </div>
  );
};

export default SubjectTemplateArticleCard;
