import SubjectTemplate from "@/components/templates/SubjectTemplate";

export default function ArticleCategory({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  return (
    <SubjectTemplate
      category={params.category}
      subcategory={params.subcategory}
    />
  );
}
