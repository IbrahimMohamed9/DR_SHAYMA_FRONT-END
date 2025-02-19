import BorderAroundSection from "@atoms/BorderAroundSection";
import ArticleBreadcrumb from "@atoms/ArticleBreadcrumb";
import utils from "@/utils/utils";
import FormattedArticle from "@atoms/FormatArticles";
import axiosInstance from "@/config/axios";
import Image from "next/image";

const ArticleTemplate = async ({ articleId }: { articleId: string }) => {
  const response = await axiosInstance.get(`articles/${articleId}`);
  console.log(response);
  const data = response.data;
  const { content, img, publishTime, title, subcategory } = data;
  const { subcategoryAr, category } = subcategory;
  const { categoryAr } = category;

  return (
    <BorderAroundSection
      className={`rounded-[12px] container border-color-${
        utils.categoryDetails(categoryAr).color
      }`}
      flex={false}
    >
      <ArticleBreadcrumb category={categoryAr} subcategory={subcategoryAr} />
      {img && (
        <Image
          src={img}
          alt={title}
          width={1024}
          height={576}
          className="w-full h-auto object-cover rounded-lg"
        />
      )}
      <h1 className="text-black text-2xl mt-5">{title}</h1>
      <time className="text-xs text-gray-600  block">{publishTime}</time>
      {content && <FormattedArticle content={content} />}
    </BorderAroundSection>
  );
};

export default ArticleTemplate;
