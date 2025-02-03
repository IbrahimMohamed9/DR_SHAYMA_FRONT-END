import { ArticleType } from "@/types";
import { MOST_IMPORTANT_ARTICLES } from "../../assets/utils/Constants";
import SectionHeader from "@atoms/SectionHeader";
import ArticleCards from "./ArticleCards";

const MostImportantArticles = ({ cards }: { cards: ArticleType[] }) => {
  return (
    <div className="mt-14">
      <SectionHeader content={MOST_IMPORTANT_ARTICLES} />
      <ArticleCards cards={cards} />
    </div>
  );
};

export default MostImportantArticles;
