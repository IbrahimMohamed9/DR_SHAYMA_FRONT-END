import BorderAroundSection from "@atoms/BorderAroundSection";
import ArticleBreadcrumb from "@atoms/ArticleBreadcrumb";
import utils from "../../assets/utils/utils";
import FormattedArticle from "@atoms/FormatArticles";
import ArticleCommentSection from "@organisms/ArticleCommentSection";
import axiosInstance from "@/config/axios";
import Image from "next/image";

const ArticleTemplate = async ({
  category,
  subcategory,
  articleId,
}: {
  category: string;
  subcategory: string;
  articleId: string;
}) => {
  const response = await axiosInstance.get(`${articleId}`);
  const data = response.data;
  const { content, imgSrc, publishTime, title } = data;

  return (
    <BorderAroundSection
      className={`rounded-[12px] container border-color-${
        utils.categoryDetails(category).color
      }`}
      flex={false}
    >
      <ArticleBreadcrumb category={category} subcategory={subcategory} />
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={title}
          width={1024}
          height={576}
          className="w-full h-auto object-cover rounded-lg"
        />
      )}
      <h1 className="text-black text-2xl mt-5">{title}</h1>
      <time className="text-xs text-gray-600  block">{publishTime}</time>
      {content && <FormattedArticle content={content} />}
      {data.comments && <ArticleCommentSection comments={data.comments} />}
    </BorderAroundSection>
  );
};

export default ArticleTemplate;
