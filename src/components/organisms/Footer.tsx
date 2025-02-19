import logo from "@/images/logo.webp";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LOGO_DESCRIPTION } from "@/utils/Constants";
import FooterWordList from "@atoms/FooterWordList";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/config/axios";
import getArticleLink from "@/utils/getArticleLink";
import { ArticleType } from "@/types";

const Footer = async () => {
  const newestArticleReq = await axiosInstance("/articles");
  const newestArticleData = newestArticleReq.data;

  const topicsReq = await axiosInstance("/article-categories");
  const topicsData = topicsReq.data;

  let newestArticle;
  if (newestArticleData) {
    const articles = newestArticleData
      .slice(0, 3)
      .map((article: ArticleType) => {
        const link = getArticleLink(article);
        return { content: article.title, navTo: link };
      });
    newestArticle = [{ content: "أحدث المقالات", navTo: "" }, ...articles];
  }

  let topics;
  if (topicsData) {
    const topicsObjects = topicsData.map((topic: { categoryAr: string }) => {
      return {
        content: topic.categoryAr,
        navTo: `/articles/${topic.categoryAr}`,
      };
    });

    topics = [{ navTo: "", content: "المواضيع" }, ...topicsObjects];
  }

  const whoWeAre = [
    { navTo: "", content: "من نحن؟" },
    { navTo: "/about", content: "اعرف عنا" },
    { navTo: "/honorList", content: "لائحة الشرف" },
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
          <Link href="/">
            <Image
              src={logo}
              alt={LOGO_DESCRIPTION}
              className="w-32 mb-4 xs:mb-8"
            />
          </Link>
          <ul className="flex gap-10">{socialMediaIconsElements}</ul>
        </div>
        {newestArticle && (
          <FooterWordList
            className="max-xs:text-center"
            content={newestArticle}
          />
        )}
        {topics && (
          <FooterWordList className="max-sm:hidden" content={topics} />
        )}
        <FooterWordList className="max-xs:text-center" content={whoWeAre} />
      </div>
    </footer>
  );
};

export default Footer;
