import { FC } from "react";
import { Link } from "react-router-dom";
import utils from "../../assets/utils/utils";

type ArticleBreadcrumbProps = {
  category?: string;
  subcategory?: string;
};

const ArticleBreadcrumb: FC<ArticleBreadcrumbProps> = ({
  category,
  subcategory,
}) => {
  const { color } = utils.categoryDetails(category);
  const separatorElement = (
    <span className="mx-2 whitespace-nowrap">{">>"}</span>
  );

  // Check if the device is touch-enabled
  const navClassName =
    "ontouchstart" in document.documentElement
      ? "overflow-auto"
      : "flex-wrap overflow-hidden";

  return (
    <div className={`bg-${color} text-white py-2 px-4 mb-5 rounded`}>
      <nav className={`text-sm flex ${navClassName}`}>
        <Link to="/" className="whitespace-nowrap">
          الرئيسية
        </Link>
        {separatorElement}
        <Link to={`/articles/${category}`} className="whitespace-nowrap">
          {category}
        </Link>
        {separatorElement}
        <Link
          to={`/articles/${category}/${subcategory}`}
          className="whitespace-nowrap"
        >
          {subcategory}
        </Link>
      </nav>
    </div>
  );
};

export default ArticleBreadcrumb;
