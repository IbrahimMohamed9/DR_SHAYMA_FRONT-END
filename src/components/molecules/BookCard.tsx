import { FC } from "react";
import BookCardText from "@atoms/BookCardText";
import Image from "next/image";

export type BookType = {
  imgSrc: string;
  title: string;
  className: string;
};

const BookCard: FC<BookType> = ({ imgSrc, title, className = "" }) => {
  return (
    <div
      className={`border-2 border-royal-blue rounded-[0.5rem] overflow-hidden w-48 ${className}`}
    >
      <Image
        src={imgSrc}
        alt={title}
        width={192}
        height={208}
        className="border-b-royal-blue border-b-[1px] w-full h-52 object-cover"
      />
      <BookCardText title={title} />
    </div>
  );
};

export default BookCard;
