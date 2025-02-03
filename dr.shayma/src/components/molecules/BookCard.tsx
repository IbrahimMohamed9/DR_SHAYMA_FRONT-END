import { FC } from "react";
import BookCardText from "@atoms/BookCardText";
import Image from "next/image";

export type BookType = {
  imgSrc: string;
  title: string;
};

const BookCard: FC<BookType> = ({ imgSrc, title }) => {
  return (
    <div className="border-2 border-royal-blue rounded-[0.5rem] overflow-hidden w-48">
      <Image
        src={imgSrc}
        alt={title}
        className="border-b-royal-blue border-b-[1px] w-full h-52"
      />
      <BookCardText title={title} />
    </div>
  );
};

export default BookCard;
