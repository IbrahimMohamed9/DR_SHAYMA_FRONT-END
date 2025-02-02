import ProfileTemplate from "../templates/ProfileTemplate";

const Profile = () => {
  const activities = [
    {
      imgSrc: "https://via.placeholder.com/100",
      name: "سيف الله وائل",
      description:
        "بالفعل اتفق أعضف الإيمان أن تمصل الأم كتببات، أو مقالات لديها كي تقرأها.",
    },
    {
      imgSrc: "https://via.placeholder.com/100",
      name: "سيف الله وائل",
      description:
        "بالفعل اتفق أعضف الإيمان أن تمصل الأم كتببات، أو مقالات لديها كي تقرأها.",
    },
    {
      imgSrc: "https://via.placeholder.com/100",
      name: "سيف الله وائل",
      description:
        "بالفعل اتفق أعضف الإيمان أن تمصل الأم كتببات، أو مقالات لديها كي تقرأها.",
    },
  ];

  const personalInfo = {
    name: "ابراهيم محمد",
    email: "ibrahimMohamed@gmail.com",
    imgSrc: "https://via.placeholder.com/100",
  };

  return (
    <ProfileTemplate activities={activities} personalInfo={personalInfo} />
  );
};

export default Profile;
