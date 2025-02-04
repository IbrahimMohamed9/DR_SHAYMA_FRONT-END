import SubjectTemplate from "@templates/SubjectTemplate";

interface PageProps {
  params: {
    category: string;
  };
}

export default async function ArticleCategory({ params }: PageProps) {
  const { category } = await params;
  return <SubjectTemplate category={category} subcategory={""} />;
}
