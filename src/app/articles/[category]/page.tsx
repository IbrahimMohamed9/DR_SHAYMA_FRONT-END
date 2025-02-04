import SubjectTemplate from "@templates/SubjectTemplate";

export default async function ArticleCategory({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;
  return <SubjectTemplate category={category} subcategory="" />;
}
