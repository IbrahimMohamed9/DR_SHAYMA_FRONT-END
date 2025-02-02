import { FC } from "react";
import { PersonInfo } from "../../types";

type ArticleCommentProps = PersonInfo & {
  comment: string;
};

const ArticleComment: FC<ArticleCommentProps> = ({ imgSrc, name, comment }) => {
  return (
    <div className="border-b border-gray-300 pb-4 mt-4">
      <div className="flex items-center space-x-3 mb-2">
        <img src={imgSrc} alt={name} className="rounded-full w-9 h-9 ml-2" />
        <span className="font-bold">{name}</span>
      </div>
      <div className="text-gray-700">{comment}</div>
    </div>
  );
};

export default ArticleComment;
