import { FC } from "react";

type FormattedArticleProps = {
  content: string[];
};

const FormattedArticle: FC<FormattedArticleProps> = ({ content }) => {
  const paragraphElementsList = content.map((paragraph, index) => (
    <p key={index} className="mb-5 text-lg leading-relaxed indent-8">
      {paragraph}
    </p>
  ));

  return (
    <div className="max-w-2xl mx-auto text-justify">
      {paragraphElementsList}
    </div>
  );
};
export default FormattedArticle;
