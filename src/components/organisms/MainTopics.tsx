import { MAIN_TOPICS, CategoriesEn } from "@/utils/Constants";
import SectionHeader from "@atoms/SectionHeader";
import MainTopicImage from "@atoms/MainTopicImage";

const MainTopics = () => {
  const topics = Object.values(CategoriesEn);

  const mainTopicElementslist = topics.map((topic, index) => (
    <MainTopicImage category={topic} key={index} />
  ));

  return (
    <div className="mt-14" id="topics">
      <SectionHeader content={MAIN_TOPICS} />
      <div className="md:grid md:grid-cols-2 max-w-6xl mx-auto">
        {mainTopicElementslist}
      </div>
    </div>
  );
};

export default MainTopics;
