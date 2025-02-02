import { atom } from "recoil";

const mostFamousArticlesState = atom({
  key: "mostFamousArticles",
  default: [
    {
      category: "DoctrinalEducation",
      title: "ارتفاع أسعار الأسهم",
      description: "أسعار الأسهم تشهد ارتفاعًا كبيرًا في الأسواق العالمية.",
      date: "2024-07-05",
      imgSrc: "https://placehold.co/360x190",
    },
  ],
});

export default mostFamousArticlesState;
