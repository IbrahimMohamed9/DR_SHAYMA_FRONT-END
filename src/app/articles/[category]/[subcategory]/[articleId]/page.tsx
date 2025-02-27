import ArticleTemplate from "@templates/ArticleTemplate";

export default async function Article({
  params,
}: {
  params: { category: string; subcategory: string; articleId: string };
}) {
  const { articleId } = params;
  return <ArticleTemplate articleId={articleId} />;
}
