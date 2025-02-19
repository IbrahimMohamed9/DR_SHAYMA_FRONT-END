import { ArticleType } from "@/types";

const getArticleLink = (article: ArticleType) => {
  const { subcategory, id } = article;
  const { category, subcategoryAr } = subcategory;

  return `/articles/${encodeURI(category.categoryAr)}/${encodeURI(
    subcategoryAr
  )}/${id}/${encodeURI(article.title)}`;
};

export default getArticleLink;
