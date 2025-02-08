import Image from "next/image";
import { FC } from "react";

type SubjectTemplateArticleCardImageProps = {
  imgSrc: string;
  title: string;
  index: number;
};

const SubjectTemplateArticleCardImage: FC<
  SubjectTemplateArticleCardImageProps
> = ({ imgSrc, title, index }) => {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center border-gray-300 md:w-2/5 ${
        index % 2 === 0 ? "border-r-2" : "border-l-2"
      }`}
    >
      <Image 
        src={imgSrc} 
        alt={title} 
        width={400}
        height={300}
        className="w-full h-auto object-cover" 
      />
    </div>
  );
};

export default SubjectTemplateArticleCardImage;
