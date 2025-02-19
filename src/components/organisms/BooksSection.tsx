"use client";

import SectionHeader from "@atoms/SectionHeader";
import BookCard, { BookType } from "@molecules/BookCard";
import Carousel from "@molecules/Carousel";

const BooksSection = ({ books }: { books: BookType[] }) => {
  const getSlidesPerView = () => {
    const width = window.innerWidth;
    switch (true) {
      case width >= 1200:
        return 5.5;
      case width >= 992:
        return 4.5;
      case width >= 768:
        return 3.4;
      case width >= 640:
        return 2.5;
      case width >= 575:
        return 2.4;
      case width >= 525:
        return 2.3;
      case width >= 510:
        return 2.2;
      case width >= 490:
        return 2.1;
      case width >= 470:
        return 2;
      case width >= 450:
        return 1.9;
      case width >= 430:
        return 1.8;
      case width >= 410:
        return 1.7;
      case width >= 390:
        return 1.6;
      case width >= 370:
        return 1.5;
      case width >= 350:
        return 1.4;
      case width >= 330:
        return 1.3;
    }
    return 1.2;
  };

  const bookElementsList = books.map((book, index) => (
    <BookCard
      key={index}
      title={book.title}
      img={book.img}
      description={book.description}
      className="keen-slider__slide"
    />
  ));

  return (
    <div className="m-5">
      <SectionHeader content="الكتب المتاحة" className="text-center" />
      <Carousel getSlidesPerView={getSlidesPerView}>
        {bookElementsList}
      </Carousel>
    </div>
  );
};

export default BooksSection;
