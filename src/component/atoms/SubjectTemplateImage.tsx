import { FC } from "react";

type SubjectTemplateImageProps = {
  title?: string;
  imgSrc: string;
};

const SubjectTemplateImage: FC<SubjectTemplateImageProps> = ({
  title,
  imgSrc,
}) => {
  return (
    <div className="mb-6 mx-auto max-w-6xl">
      <img src={imgSrc} alt={title} className="" />
    </div>
  );
};

export default SubjectTemplateImage;
