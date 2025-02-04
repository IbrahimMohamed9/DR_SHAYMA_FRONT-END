import { SubjectTemplate } from '@/components/SubjectTemplate'

export default function ArticleCategory({ params }: { 
  params: { category: string; subcategory: string } 
}) {
  return <SubjectTemplate />
}
