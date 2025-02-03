import { FC } from "react";
import Button from "./Button";

type BookCardTextProps = {
  title: string;
};

const BookCardText: FC<BookCardTextProps> = ({ title }) => {
  return (
    <div className="p-4">
      <h2 className="py-4 font-bold text-center">{title}</h2>
      <Button className="bg-main-green mx-auto block text-white text-xs">
        أقرأ
      </Button>
    </div>
  );
};

export default BookCardText;
