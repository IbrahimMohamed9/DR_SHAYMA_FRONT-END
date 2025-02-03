"use client";

import React, { ReactNode, useState } from "react";
import { ArticleCommentsContext } from "@/store/contexts/ArticleCommentsContext";
import type { CommentType } from "@/types";

export const ArticleCommentsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [articleComments, setArticleComments] = useState<CommentType[]>([]);

  return (
    <ArticleCommentsContext.Provider
      value={{ articleComments, setArticleComments }}
    >
      {children}
    </ArticleCommentsContext.Provider>
  );
};

export default ArticleCommentsProvider;
