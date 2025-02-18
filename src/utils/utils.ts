import { CategoriesAr, CategoriesEn } from "./Constants";
import familyAndLifeSmallImage from "@/images/الاسرة والحياة رئيسي.png";
import doctrineSmallImage from "@/images/التربية العقائدية رئيسي.png";
import raisingSmallImage from "@/images/التربية رئيسي.png";
import healthSmallImage from "@/images/الصحة رئيسي.png";
import familyAndLifeBigImage from "@/images/الاسرة والحياة مقال.png";
import doctrineBigImage from "@/images/التربية العقائدية مقال.png";
import raisingBigImage from "@/images/التربية مقال.png";
import healthBigImage from "@/images/الصحة مقال.png";
import { StaticImageData } from "next/image";

type CategoryDetails = {
  category: CategoriesEn | string | undefined;
  color: string;
  hexColor: string;
  smallImg: StaticImageData;
  bigImg: StaticImageData;
  navTo: string;
};

export function detectLanguage(text: string) {
  if (/^[\u0600-\u06FF\s]+$/.test(text)) {
    return "ar";
  } else if (/^[A-Za-z\s]+$/.test(text)) {
    return "en";
  } else if (/^\d+$/.test(text)) {
    return "id";
  } else {
    return "Mixed or Other";
  }
}

export function getCardCategoryColor(category: string) {
  switch (category) {
    case CategoriesEn.RAISING:
    case CategoriesAr.RAISING:
      return "main-blue";
    case CategoriesAr.DOCTRINAL_EDUCATION:
    case CategoriesEn.DOCTRINAL_EDUCATION:
      return "main-orange";
    case CategoriesEn.HEALTH:
    case CategoriesAr.HEALTH:
      return "main-green";
    case CategoriesEn.FAMILY_AND_LIFE:
    case CategoriesAr.FAMILY_AND_LIFE:
      return "main-red";
    default:
      return "black";
  }
}

const utils = {
  categoryDetails: (category: string | undefined): CategoryDetails => {
    switch (category) {
      case CategoriesEn.RAISING:
      case CategoriesAr.RAISING:
        return {
          category: category,
          color: "main-orange",
          hexColor: "#ed7609",
          smallImg: raisingSmallImage,
          bigImg: raisingBigImage,
          navTo: "Raising",
        };
      case CategoriesEn.DOCTRINAL_EDUCATION:
      case CategoriesAr.DOCTRINAL_EDUCATION:
        return {
          category: category,
          color: "main-blue",
          hexColor: "#1877f2",
          smallImg: doctrineSmallImage,
          bigImg: doctrineBigImage,
          navTo: "DoctrinalEducation",
        };
      case CategoriesEn.HEALTH:
      case CategoriesAr.HEALTH:
        return {
          category: category,
          color: "main-green",
          hexColor: "#3e7422",
          smallImg: healthSmallImage,
          bigImg: healthBigImage,
          navTo: "Health",
        };
      case CategoriesEn.FAMILY_AND_LIFE:
      case CategoriesAr.FAMILY_AND_LIFE:
        return {
          category: category,
          color: "main-red",
          hexColor: "#8b002a",
          smallImg: familyAndLifeSmallImage,
          bigImg: familyAndLifeBigImage,
          navTo: "FamilyAndLife",
        };
      default:
        return {
          category: "There is a problem please check the category",
          color: "main-orange",
          hexColor: "#000000",
          smallImg: raisingSmallImage,
          bigImg: raisingBigImage,
          navTo: "No",
        };
    }
  },
};

export default utils;
