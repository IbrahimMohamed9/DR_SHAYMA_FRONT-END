import Image from "next/image";
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
      <Image
        src={imgSrc}
        alt={title || ""}
        width={1280}
        height={720}
        className=""
      />
    </div>
  );
};

export default SubjectTemplateImage;
