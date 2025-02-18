import FirstHomeSection from "@organisms/FirstHomeSection";
import MainTopics from "@organisms/MainTopics";
import MostImportantArticles from "@organisms/MostImportantArticles";
import axiosInstance from "@/config/axios";

export default async function Home() {
  const mostFamousArticles = await axiosInstance.get("/articles");

  return (
    <div>
      <FirstHomeSection />
      <div className="container">
        <MostImportantArticles cards={mostFamousArticles.data} />
        <MainTopics />
      </div>
    </div>
  );
}
