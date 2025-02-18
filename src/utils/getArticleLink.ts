import { ArticleType } from "@/types";

const getArticleLink = (article: ArticleType) => {
  const { subcategory, id } = article;
  const { categoryId, subcategoryId } = subcategory;

  return `/articles/${categoryId}/${subcategoryId}/${id}`;
};

export default getArticleLink;
