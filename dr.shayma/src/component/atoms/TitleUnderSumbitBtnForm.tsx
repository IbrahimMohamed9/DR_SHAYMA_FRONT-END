import { FC } from "react";
import { Link } from "react-router-dom";

export enum ScreenType {
  LOGIN = "login",
  SIGN_UP = "signUp",
}

type TitleUnderSumbitBtnFormProps = {
  screenType: ScreenType;
};

// This function is for login and sign up screens only
const TitleUnderSumbitBtnForm: FC<TitleUnderSumbitBtnFormProps> = ({
  screenType,
}) => {
  const content = {
    login: {
      navToTitle: "سجل الان. ",
      navTo: "/SignUp",
      title: "لا تمتلك حساب؟ ",
    },
    signUp: {
      navToTitle: "تسجيل دخول.",
      navTo: "/login",
      title: "تمتلك حساب بالفعل!!!",
    },
  };

  return (
    <span className="text-royal-blue text-opacity-60 text-center block mt-3">
      {content[screenType].title} &nbsp;
      <Link to={content[screenType].navTo} className="text-main-green">
        {content[screenType].navToTitle}
      </Link>
    </span>
  );
};

export default TitleUnderSumbitBtnForm;
