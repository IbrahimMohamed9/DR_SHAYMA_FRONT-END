/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PasswordIcon from "@atoms/PasswordIcon";
import FormTemplate from "@templates/FormTemplate";
import ForgetPasswordLoginScreen from "@atoms/ForgetPasswordLoginScreen";
import { useState } from "react";
import SocialButton from "@atoms/SocialButton";
import { ScreenType } from "@atoms/TitleUnderSumbitBtnForm";
import { SubmitHandler } from "react-hook-form";
import axiosInstance from "@/config/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const fieldsList = [
    {
      type: "email",
      label: "email",
      required: "الرجاء ادخال البريد الالكتروني",
      fieldName: "البريد الإلكتروني",
      pattern: {
        value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/gm,
        message: "هذا النمط غير صحيح",
      },
    },
    {
      type: passwordVisible ? "text" : "password",
      label: "password",
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

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const response = await axiosInstance.post("/auth/login", { ...data });

      Cookies.set("access_token", response.data.accessToken, { expires: 7 });
      localStorage.setItem("user", JSON.stringify(response.data.user));

      router.push("/");
    } catch (error: any) {
      console.log("login error:", error.response?.data || error.message);
    }
  };

  return (
    <FormTemplate
      inputFields={fieldsList}
      title={"تسجيل دخول"}
      submitBtnClassName="w-full text-xl"
      submitBtnTitle="تسجيل دخول"
      screenType={ScreenType.LOGIN}
      onSubmit={onSubmit}
    >
      <SocialButton platformsText={platformsText} />
    </FormTemplate>
  );
};

export default Login;
