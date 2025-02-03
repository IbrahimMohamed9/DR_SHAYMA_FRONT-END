"use client";

import { ReactNode } from "react";
import { useState } from "react";
import { CommentType } from "@/types";

export const ArticleCommentsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [articleComments, setArticleComments] = useState<CommentType[]>([]);

  return <div>{children}</div>;
};

export default ArticleCommentsProvider;
