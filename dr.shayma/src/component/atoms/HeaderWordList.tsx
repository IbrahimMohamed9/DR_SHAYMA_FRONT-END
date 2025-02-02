import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const HeaderWordList = () => {
  const content = [
    { navigateTo: "/", content: "الرئيسية" },
    { navigateTo: "/aboutUs", content: "اعرف عنا" },
    { navigateTo: "/contactUs", content: "تواصل معانا" },
  ];

  const wordClasses =
    "hover:text-main-green text-white w-20 transition-colors duration-300 cursor-pointer ";

  return (
    // TODO: delete hidden
    <ul className="hidden md:flex gap-30 ">
      {content.map((word, index) => (
        <li key={index} className={wordClasses}>
          <Link
            to={word.navigateTo}
            className="text-inherit leading-20 h-20 w-20 block text-center"
          >
            {word.content}
          </Link>
        </li>
      ))}
      <li className={wordClasses}>
        <div className="leading-20">
          المواضيع <BiChevronDown className="inline" />
        </div>
      </li>
    </ul>
  );
};

export default HeaderWordList;
