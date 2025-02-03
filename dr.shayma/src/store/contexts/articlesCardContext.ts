import { ArticleType, ContextType } from "@/types";
import { createContext, useContext } from "react";

const articlesCardContext = createContext<ContextType<
  ArticleType,
  "articlesCard"
> | null>(null);

const useArticlesCard = () => {
  const context = useContext(articlesCardContext);

  if (!context)
    throw new Error(
      "useArticlesCard must be used within an ArticlesCardProvider"
    );

  return context;
};

export default useArticlesCard;
