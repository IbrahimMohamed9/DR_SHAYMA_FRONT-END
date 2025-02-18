"use client";

import ArticleCard from "@molecules/ArticleCard";
import { ArticleType } from "@/types";
import Carousel from "@molecules/Carousel";

const ArticleCards = ({ cards }: { cards: ArticleType[] }) => {
  const getSlidesPerView = (width: number) => {
    switch (true) {
      case width >= 1280:
        return 3;
      case width >= 1200:
        return 2.7;
      case width >= 1024:
        return 2.5;
      case width >= 768:
        return 3.6;
      case width >= 640:
        return 2.5;
      case width >= 480:
        return 2.2;
      case width >= 390:
        return 1.8;
      case width >= 370:
        return 1.7;
      case width >= 325:
        return 1.5;
    }
    return 1.47;
  };

  const articles = cards?.map((card, index) => (
    <ArticleCard
      key={index}
      className="keen-slider__slide"
      article={card}
    />
  ));

  return <Carousel getSlidesPerView={getSlidesPerView}>{articles}</Carousel>;
};

export default ArticleCards;
