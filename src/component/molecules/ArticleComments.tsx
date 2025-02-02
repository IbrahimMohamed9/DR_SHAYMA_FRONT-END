import { FC } from "react";
import ArticleComment from "../atoms/ArticleComment";
import { CommentType } from "../../types";

type ArticleCommentsProps = {
  comments: CommentType[];
}

const ArticleComments: FC<ArticleCommentsProps> = ({ comments }) => {
  return (
    <div className="mt-8">
      {comments.map((comment) => (
        <ArticleComment
          key={comment.id}
          name={comment.name}
          imgSrc={comment.imgSrc}
          comment={comment.comment}
        />
      ))}
    </div>
  );
};

export default ArticleComments;
