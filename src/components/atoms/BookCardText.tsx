import { FC } from "react";
import Button from "./Button";

type BookCardTextProps = {
  title: string;
  description: string;
};

const BookCardText: FC<BookCardTextProps> = ({ title, description }) => {
  return (
    <div className="p-4">
      <h2 className="py-4 font-bold text-center">{title}</h2>
      {description && (
        <p className="mb-4 text-sm text-gray-600 text-center line-clamp-2 hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      )}
      <Button className="bg-main-green mx-auto block text-white text-xs">
        أقرأ
      </Button>
    </div>
  );
};

export default BookCardText;
