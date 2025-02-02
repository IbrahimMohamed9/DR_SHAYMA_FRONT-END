import BorderAroundSection from "../atoms/BorderAroundSection";
import ArticleBreadcrumb from "../atoms/ArticleBreadcrumb";
import utils from "../../assets/utils/utils";
import FormattedArticle from "../atoms/FormatArticles";
import ArticleCommentSection from "../organisms/ArticleCommentSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../assets/customHooks/RestClient";
import LoadingAndErrorMsg from "../molecules/LoadingAndErrorMsg";
import { useRecoilState } from "recoil";
import articleCommentsState from "../../assets/atoms/articleCommentsState";

const ArticleTemplate = () => {
  const param = useParams();
  const { category, subcategory, articleId } = param;
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [comments, setComments] = useRecoilState(articleCommentsState);
  let content, imgSrc, publishTime, title;

  useEffect(() => {
    if (articleId) {
      fetchData(articleId, { setData, setError, setLoading });
    }
  }, [articleId]);

  useEffect(() => {
    if (data) {
      setComments(data.comments);
    }
  }, [data, setComments]);

  if (data) {
    ({ content, imgSrc, publishTime, title } = data);
  }

  return loading || error ? (
    <LoadingAndErrorMsg loading={loading} error={error} />
  ) : (
    <BorderAroundSection
      className={`rounded-[12px] container border-color-${
        utils.categoryDetails(category).color
      }`}
      flex={false}
    >
      <ArticleBreadcrumb category={category} subcategory={subcategory} />
      {imgSrc && <img src={imgSrc} alt={title} />}
      <h1 className="text-black text-2xl mt-5">{title}</h1>
      <time className="text-xs text-gray-600  block">{publishTime}</time>
      {content && <FormattedArticle content={content} />}
      {comments && <ArticleCommentSection comments={comments} />}
    </BorderAroundSection>
  );
};

export default ArticleTemplate;
