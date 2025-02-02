import PasswordIcon from "../atoms/PasswordIcon";
import FormTemplate from "../templates/FormTemplate";
import { useState } from "react";
import SocialButton from "../atoms/SocialButton";
import { ScreenType } from "../atoms/TitleUnderSumbitBtnForm";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const fieldsList = [
    {
      type: "text",
      required: "الرجاء ادخال ادخال اسم المستخدم",
      fieldName: "الاسم كامل",
      pattern: {
        value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/gm,
        message: "هذا النمط غير صحيح",
      },
    },
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
      minLength: {
        value: 8,
        message: "يجب أن تحتوي على 8 أحرف على الأقل.",
      },
      PrefixIcon: PasswordIcon,
      OnClickIcon: togglePasswordVisibility,
    },
  ];

  const platformsText = {
    google: "إنشاء حساب مع جوجل",
    facebook: "إنشاء حساب مع فيسبوك",
  };

  return (
    <FormTemplate
      inputFields={fieldsList}
      title={"إنشاء حساب"}
      submitBtnClassName="w-full texst-xl"
      submitBtnTitle="إنشاء الحساب"
      screenType={ScreenType.SIGN_UP}
    >
      <SocialButton platformsText={platformsText} />
    </FormTemplate>
  );
};

export default SignUp;
