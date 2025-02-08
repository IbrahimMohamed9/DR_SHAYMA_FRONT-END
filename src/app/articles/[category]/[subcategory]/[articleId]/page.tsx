import ArticleTemplate from "@templates/ArticleTemplate";

export default async function Article({
  params,
}: {
  params: { category: string; subcategory: string; articleId: string };
}) {
  const { category, subcategory, articleId } = await params;
  return (
    <ArticleTemplate
      category={category}
      subcategory={subcategory}
      articleId={articleId}
    />
  );
}
