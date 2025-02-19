import { FC } from "react";

type FormattedArticleProps = {
  content: string[];
};

const FormattedArticle: FC<FormattedArticleProps> = ({ content }) => {
  return <div className="max-w-2xl mx-auto text-justify">{content}</div>;
};
export default FormattedArticle;
