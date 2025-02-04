import SubjectTemplate from "@/components/templates/SubjectTemplate";

interface PageProps {
  params: {
    category: string;
    subcategory: string;
  };
}

export default async function ArticleCategory({ params }: PageProps) {
  const { category, subcategory } = await params;
  return <SubjectTemplate category={category} subcategory={subcategory} />;
}
