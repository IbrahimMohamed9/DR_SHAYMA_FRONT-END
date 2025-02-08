import { FC } from "react";
import CommentInput from "@atoms/CommentInput";
import ArticleComments from "@molecules/ArticleComments";
import { CommentType } from "@/types";

type ArticleCommentSectionProps = {
  comments: CommentType[];
};

const ArticleCommentSection: FC<ArticleCommentSectionProps> = ({
  comments,
}) => {
  return (
    <div>
      {/* TODO:: fix comments section */}
      <CommentInput />
      <ArticleComments comments={comments} />
    </div>
  );
};

export default ArticleCommentSection;
