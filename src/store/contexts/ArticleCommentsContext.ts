"use client";

import { createContext, useContext } from "react";
import { CommentType, ContextType } from "@/types";

export const ArticleCommentsContext = createContext<ContextType<
  CommentType[],
  "articleComments"
> | null>(null);

export const useArticleComments = () => {
  const context = useContext(ArticleCommentsContext);
  if (!context)
    throw new Error(
      "useArticleComments must be used within an ArticleCommentsProvider"
    );

  return context;
};

export default ArticleCommentsContext;
