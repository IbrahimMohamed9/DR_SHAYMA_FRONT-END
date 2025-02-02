import logo from "./../../assets/images/logo.webp";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LOGO_DESCRIPTION } from "../../assets/utils/Constants";
import FooterWordList from "./../atoms/FooterWordList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../assets/customHooks/RestClient";

type FooterWordListContent = [
  {
    content: string;
    navTo: string;
  }
];

const Footer = () => {
  const [data, setData] = useState<FooterWordListContent>();
  useEffect(() => {
    fetchData("mostArticlesFooter", { setData });
  }, []);

  const mostFamousArticles = data && [
    { content: "أشهر المقالات", navTo: "" },
    ...data,
  ];

  const whoWeAre = [
    { navTo: "", content: "من نحن؟" },
    { navTo: "/aboutUs", content: "اعرف عنا" },
    { navTo: "/honorList", content: "لائحة الشرف" },
  ];
  const topics = [
    { navTo: "", content: "المواضيع" },
    { navTo: "/articles/DoctrinalEducation", content: "التربية العقائدية" },
    { navTo: "/articles/FamilyAndLife", content: "الاسرة و الحياة" },
    { navTo: "/articles/Raising", content: "التربية" },
    { navTo: "/articles/Health", content: "الصحة" },
  ];
  const commonSvgClasses =
    "size-8 border-2 p-1 rounded-full transition-all duration-300";
  const socialMediaIcons = [
    {
      icon: FaXTwitter,
      styles: "border-white text-white hover:bg-white hover:text-black",
      link: "https://x.com/dr_shaymaaa",
    },
    {
      icon: BsWhatsapp,
      styles:
        "border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white",
      link: "https://www.facebook.com/profile.php?id=100002421841995",
    },
    {
      icon: FaTelegramPlane,
      styles:
        "border-telegram text-telegram hover:bg-telegram hover:text-white",
      link: "https://www.facebook.com/profile.php?id=100002421841995",
    },
    {
      icon: FaFacebookF,
      styles:
        "border-main-blue text-main-blue hover:bg-main-blue hover:text-white",
      link: "https://www.facebook.com/profile.php?id=100002421841995",
    },
  ];

  const socialMediaIconsElements = socialMediaIcons.map((item, index) => (
    <li key={index}>
      <a href={item.link}>
        <item.icon className={item.styles + " " + commonSvgClasses}></item.icon>
      </a>
    </li>
  ));

  return (
    <footer className="bg-black py-8 xs:py-12">
      <div className="container flex flex-col-reverse items-center max-xs:gap-y-4 xs:justify-between xs:flex-row-reverse">
        <div className="flex items-center flex-col">
          <Link to="/">
            <img
              src={logo}
              alt={LOGO_DESCRIPTION}
              className="w-32 mb-4 xs:mb-8"
            />
          </Link>
          <ul className="flex gap-10">{socialMediaIconsElements}</ul>
        </div>
        {mostFamousArticles && (
          <FooterWordList
            className="max-xs:text-center"
            content={mostFamousArticles}
          />
        )}
        <FooterWordList className="max-sm:hidden" content={topics} />
        <FooterWordList className="max-xs:text-center" content={whoWeAre} />
      </div>
    </footer>
  );
};

export default Footer;
