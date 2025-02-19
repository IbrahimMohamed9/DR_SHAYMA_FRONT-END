"use client";

import React, { useState, ReactNode, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Carousel = ({
  children,
  getSlidesPerView,
}: {
  children: ReactNode;
  getSlidesPerView: (value: number) => number;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSlidesPerView(getSlidesPerView(window.innerWidth));

      const handleResize = () => {
        setSlidesPerView(getSlidesPerView(window.innerWidth));
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [getSlidesPerView]);

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
    defaultAnimation: {
      duration: 100,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

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

  const bulletsElements = React.Children.map(children, (_, i) => (
    <button
      key={i}
      onClick={() => instanceRef.current?.moveToIdx(i)}
      className={`mx-1 w-3 h-3 rounded-full transition-all ${
        currentSlide === i ? "bg-blue-500 w-6" : "bg-gray-300"
      }`}
    />
  ));

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider p-4">
        {children}
      </div>

      {btnsElements}
      <div className="dots absolute -bottom-4 left-0 right-0 flex justify-center">
        {bulletsElements}
      </div>
    </div>
  );
};

export default Carousel;
