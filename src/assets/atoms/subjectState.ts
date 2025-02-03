import { atom } from "recoil";

const subjectCategoryState = atom({
  key: "subjectCategoryState",
  default: {
    "Educational highlights": "إضاءات تربوية",
    "From Revelation": "من الوحيين",
    "Education through Storytelling": "التربية بالقصة",
    "Oh My Son, Ride with Us": "يا بني اركب معنا",
    "Permissible Speech on Sexual Education in Islam":
      "المباح من الكلام في التربية الجنسية في الإسلام",
    "Our Lives and Screens": "حياتنا والشاشات",
  },
});

export default subjectCategoryState;
