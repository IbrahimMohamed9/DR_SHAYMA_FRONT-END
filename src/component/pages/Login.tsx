import PasswordIcon from "../atoms/PasswordIcon";
import FormTemplate from "../templates/FormTemplate";
import ForgetPasswordLoginScreen from "../atoms/ForgetPasswordLoginScreen";
import { useState } from "react";
import SocialButton from "../atoms/SocialButton";
import { ScreenType } from "../atoms/TitleUnderSumbitBtnForm";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const fieldsList = [
    {
      type: "email",
      required: "الرجاء ادخال البريد الالكتروني",
      fieldName: "البريد الإلكتروني",
      pattern: {
        value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/gm,
        message: "هذا النمط غير صحيح",
      },
    },
    {
      type: passwordVisible ? "text" : "password",
      required: "الرجاء ادخال كلمة السر",
      fieldName: "كلمة السر",
      PrefixIcon: PasswordIcon,
      OnClickIcon: togglePasswordVisibility,
      ElementBelowField: ForgetPasswordLoginScreen,
    },
  ];

  const platformsText = {
    google: "تسجيل دخول مع جوجل",
    facebook: "تسجيل دخول فيسبوك",
  };

  return (
    <FormTemplate
      inputFields={fieldsList}
      title={"تسجيل دخول"}
      submitBtnClassName="w-full text-xl"
      submitBtnTitle="تسجيل دخول"
      screenType={ScreenType.LOGIN}
    >
      <SocialButton platformsText={platformsText} />
    </FormTemplate>
  );
};

export default Login;
