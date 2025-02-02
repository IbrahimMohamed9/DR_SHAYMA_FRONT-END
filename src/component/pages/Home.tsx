import FirstHomeSection from "./../organisms/FirstHomeSection";
import MainTopics from "../organisms/MainTopics";
import MostImportantArticles from "./../organisms/MostImportantArticles";
import { useRecoilState } from "recoil";
import mostFamousArticlesState from "../../assets/atoms/mostFamousArticle";
import { useEffect } from "react";
import { fetchData } from "../../assets/customHooks/RestClient";

const Home = () => {
  const [, setData] = useRecoilState(mostFamousArticlesState);
  useEffect(() => {
    fetchData("mostFamousArticles", { setData });
  }, [setData]);

  return (
    <div>
      <FirstHomeSection />
      <div className="container">
        <MostImportantArticles />
        <MainTopics />
      </div>
    </div>
  );
};

export default Home;
