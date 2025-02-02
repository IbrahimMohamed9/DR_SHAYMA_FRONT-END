import mostFamousArticlesState from "../../assets/atoms/mostFamousArticle";
import { Navigation, Pagination } from "swiper/modules";
import ArticleCard from "./../molecules/ArticleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRecoilState } from "recoil";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const ArticleCards = () => {
  const [cardsList] = useRecoilState(mostFamousArticlesState);

  const getSlidesPerView = () => {
    const width = window.innerWidth;
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

  const articles = cardsList.map((card, index) => (
    <SwiperSlide key={index}>
      <ArticleCard
        category={card.category}
        title={card.title}
        description={card.description}
        date={card.date}
        imgSrc={card.imgSrc}
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      dir="rtl"
      navigation={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-80 lg:h-[25rem]"
      slidesPerView={getSlidesPerView()}
      centeredSlides={true}
      grabCursor={true}
    >
      {articles}
    </Swiper>
  );
};

export default ArticleCards;
