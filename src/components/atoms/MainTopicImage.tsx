import { FC } from "react";
import Button from "./Button";
import Link from "next/link";
import utils from "@/utils/utils";
import { CategoriesEn } from "@/utils/Constants";
import Image from "next/image";

type MainTopicImageProps = {
  category: CategoriesEn;
};

const MainTopicImage: FC<MainTopicImageProps> = ({ category }) => {
  const { color, smallImg, navTo } = utils.categoryDetails(category);

  return (
    <div className="group w-full relative transition-all overflow-hidden">
      <Image
        src={smallImg}
        alt={category}
        width={300}
        height={200}
        className="w-full h-auto object-cover"
      />
      <Link href={`/articles/${navTo}`}>
        <Button
          className={`absolute right-1/2 translate-x-1/2 max-xs:px-2 max-xs:py-1 xs:text-lg xs:translate-x-36 text-white bg-${color} absolute -bottom-16 opacity-0 group-hover:opacity-100 group-hover:-translate-y-20`}
        >
          اقرء المزيد
        </Button>
      </Link>
    </div>
  );
};

export default MainTopicImage;
