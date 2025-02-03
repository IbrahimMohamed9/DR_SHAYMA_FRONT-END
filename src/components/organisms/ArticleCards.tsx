"use client";

import ArticleCard from "@molecules/ArticleCard";
import { ArticleType } from "@/types";
import { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ArticleCards = ({ cards }: { cards: ArticleType[] }) => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    rtl: true,
    slides: {
      perView: slidesPerView,
      spacing: 30,
      origin: "center",
    },
    initial: 0,
    loop: false,
    mode: "snap",
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

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

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const articles = cards?.map((card, index) => (
    <ArticleCard
      key={index}
      className="keen-slider__slide"
      category={card.category}
      title={card.title}
      description={card.description}
      date={card.createAt}
      imgSrc={card.imgSrc}
    />
  ));

  const btns = [
    {
      Icon: ChevronLeftIcon,
      onClick: () => instanceRef.current?.next(),
      className: "left-2",
    },
    {
      Icon: ChevronRightIcon,
      onClick: () => instanceRef.current?.prev(),
      className: "right-2",
    },
  ];

  const btnsElements = btns.map((btn, index) => (
    <button
      key={index}
      onClick={(e) => {
        e.stopPropagation();
        btn.onClick();
      }}
      className={`absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 ${btn.className}`}
    >
      <btn.Icon />
    </button>
  ));

  const bullets = [];

  for (let i = 0; i < cards.length; i++)
    bullets.push(
      <button
        key={i}
        onClick={() => {
          instanceRef.current?.moveToIdx(i);
        }}
        className={`mx-1 w-3 h-3 rounded-full transition-all ${
          currentSlide === i ? "bg-blue-500 w-6" : "bg-gray-300"
        }`}
      />
    );

  return (
    <div className=" relative">
      <div ref={sliderRef} className="keen-slider p-4">
        {articles}
      </div>
      {instanceRef.current && (
        <>
          {btnsElements}
          <div className="dots absolute -bottom-4 left-0 right-0 flex justify-center">
            {bullets}
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleCards;
