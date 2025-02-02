import { atom } from "recoil";
import imgSrc from "../../assets/images/الاسرة والحياة رئيسي.png";

const booksState = atom({
  key: "booksState",
  default: [
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
    { title: "عقيدة طفلي من 3-5", imgSrc: imgSrc },
  ],
});

export default booksState;
