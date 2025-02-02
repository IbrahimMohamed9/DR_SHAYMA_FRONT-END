import { MOST_IMPORTANT_ARTICLES } from "../../assets/utils/Constants";
import SectionHeader from "./../atoms/SectionHeader";
import ArticleCards from "./ArticleCards";

const MostImportantArticles = () => {
  return (
    <div className="mt-14">
      <SectionHeader content={MOST_IMPORTANT_ARTICLES} />
      <ArticleCards />
    </div>
  );
};

export default MostImportantArticles;
