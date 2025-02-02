import { FC } from "react";

type SubjectTemplateArticleCardImageProps = {
  imgSrc: string;
  title: string;
  index: number;
}

const SubjectTemplateArticleCardImage: FC<
  SubjectTemplateArticleCardImageProps
> = ({ imgSrc, title, index }) => {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center border-gray-300 md:w-2/5 ${
        index % 2 === 0 ? "border-r-2" : "border-l-2"
      }`}
    >
      <img
        src={imgSrc}
        alt={title}
        className="w-full"
      />
    </div>
  );
};

export default SubjectTemplateArticleCardImage;
