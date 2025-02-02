import { FC } from "react";
import { Link } from "react-router-dom";

type FooterWordListProps = {
  content: contentType[];
  className?: string;
};
type contentType = {
  content: string;
  navTo: string;
};

const FooterWordList: FC<FooterWordListProps> = ({ content, className }) => {
  const wordsElementList = content.map((word, index) =>
    index ? (
      <li key={index}>
        <Link
          to={word.navTo}
          className="text-white mb-3 text-sm hover:text-main-green transition-colors duration-300"
        >
          {word.content}
        </Link>
      </li>
    ) : (
      <li key={index} className="text-white text-2xl mb-1">
        {content[0].content}
      </li>
    )
  );

  return <ul className={className}>{wordsElementList}</ul>;
};

export default FooterWordList;
