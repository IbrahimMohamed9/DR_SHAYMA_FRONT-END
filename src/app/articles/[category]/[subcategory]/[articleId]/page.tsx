import { ArticleTemplate } from '@/components/ArticleTemplate'

export default function Article({ params }: { 
  params: { category: string; subcategory: string; articleId: string } 
}) {
  return <ArticleTemplate />
}
