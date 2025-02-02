import {
  Categories,
  DOCTRINAL_EDUCATION,
  FAMILY_AND_LIFE,
  HEALTH,
  RAISING,
} from "./Constants";
import familyAndLifeSmallImage from "../../assets/images/الاسرة والحياة رئيسي.png";
import doctrineSmallImage from "../../assets/images/التربية العقائدية رئيسي.png";
import raisingSmallImage from "../../assets/images/التربية رئيسي.png";
import healthSmallImage from "../../assets/images/الصحة رئيسي.png";
import familyAndLifeBigImage from "../../assets/images/الاسرة والحياة مقال.png";
import doctrineBigImage from "../../assets/images/التربية العقائدية مقال.png";
import raisingBigImage from "../../assets/images/التربية مقال.png";
import healthBigImage from "../../assets/images/الصحة مقال.png";

type CategoryDetails = {
  category: Categories | string | undefined;
  color: string;
  hexColor: string;
  smallImg: any;
  bigImg: any;
  navTo: string;
};

const utils = {
  categoryDetails: (category: string | undefined): CategoryDetails => {
    switch (category) {
      case RAISING:
        return {
          category: category,
          color: "main-orange",
          hexColor: "#ed7609",
          smallImg: raisingSmallImage,
          bigImg: raisingBigImage,
          navTo: "Raising",
        };
      case DOCTRINAL_EDUCATION:
        return {
          category: category,
          color: "main-blue",
          hexColor: "#1877f2",
          smallImg: doctrineSmallImage,
          bigImg: doctrineBigImage,
          navTo: "DoctrinalEducation",
        };
      case HEALTH:
        return {
          category: category,
          color: "main-green",
          hexColor: "#3e7422",

          smallImg: healthSmallImage,
          bigImg: healthBigImage,
          navTo: "Health",
        };
      case FAMILY_AND_LIFE:
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
