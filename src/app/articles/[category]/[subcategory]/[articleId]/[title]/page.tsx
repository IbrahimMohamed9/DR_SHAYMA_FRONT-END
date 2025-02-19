import ArticleTemplate from "@templates/ArticleTemplate";

export default async function Article({
  params,
}: {
  params: { articleId: string };
}) {
  const { articleId } = params;
  return <ArticleTemplate articleId={articleId} />;
}
