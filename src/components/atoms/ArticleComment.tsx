import { FC } from "react";
import { PersonInfo } from "@/types";
import Image from "next/image";

type ArticleCommentProps = PersonInfo & {
  comment: string;
};

const ArticleComment: FC<ArticleCommentProps> = ({ imgSrc, name, comment }) => {
  return (
    <div className="border-b border-gray-300 pb-4 mt-4">
      <div className="flex items-center space-x-3 mb-2">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={name}
            width={36}
            height={36}
            className="rounded-full size-9 ml-2"
          />
        )}
        <span className="font-bold">{name}</span>
      </div>
      <div className="text-gray-700">{comment}</div>
    </div>
  );
};

export default ArticleComment;
