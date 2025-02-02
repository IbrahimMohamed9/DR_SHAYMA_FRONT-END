import { FC } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import utils from "../../assets/utils/utils";
import { Categories } from "../../assets/utils/Constants";

type MainTopicImageProps = {
  category: Categories;
}

const MainTopicImage: FC<MainTopicImageProps> = ({ category }) => {
  const { color, smallImg, navTo } = utils.categoryDetails(category);

  return (
    <div className="group w-full relative transition-all overflow-hidden">
      <img src={smallImg} alt={category} className="w-full" />
      <Link to={`/articles/${navTo}`}>
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
