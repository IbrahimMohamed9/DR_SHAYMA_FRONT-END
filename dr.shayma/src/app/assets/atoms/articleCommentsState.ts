import { atom } from "recoil";

const articleCommentsState = atom({
  key: "articleComments",
  default: [
    {
      id: 23,
      imgSrc: "",
      name: "سيف الله وائل",
      comment:
        "بالفعل اتفق أضعف الإيمان أن تعطي الأم كتيبات، أو مقالات لابنها كي يقرأها.   ",
    },
    {
      id: 22,
      imgSrc: "",
      name: "سيف الله وائل",
      comment:
        "بالفعل اتفق أضعف الإيمان أن تعطي الأم كتيبات، أو مقالات لابنها كي يقرأها.   ",
    },
  ],
});

export default articleCommentsState;
