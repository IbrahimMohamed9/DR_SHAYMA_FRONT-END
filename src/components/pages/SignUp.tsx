"use client";

import PasswordIcon from "@atoms/PasswordIcon";
import FormTemplate from "@templates/FormTemplate";
import { useState } from "react";
import SocialButton from "@atoms/SocialButton";
import { ScreenType } from "@atoms/TitleUnderSumbitBtnForm";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("dsfsd");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const fieldsList = [
    {
      type: "text",
      label: "name",
      required: "الرجاء ادخال ادخال اسم المستخدم",
      fieldName: "الاسم كامل",
    },
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
      type: "phone",
      label: "phone",
      required: "الرجاء رقم الهاتف",
      fieldName: "رقم الهاتف",
      onchange: (phone: string) => setPhone(phone),
      value: phone,
      errorMsg: phoneError,
    },
    {
      type: "date",
      label: "date",
      required: "الرجاء ادخال تاريخ الميلاد",
      fieldName: "تاريخ الميلاد",
    },
    {
      type: passwordVisible ? "text" : "password",
      label: "password",
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
      <RadioGroup
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 4,
          mb: 2,
        }}
      >
        <FormControlLabel
          value="male"
          control={
            <Radio
              sx={{
                color: "#6B7280",
                "&.Mui-checked": {
                  color: "#2563EB",
                },
              }}
            />
          }
          label={<span className="text-gray-600">ذكر</span>}
        />
        <FormControlLabel
          value="female"
          control={
            <Radio
              sx={{
                color: "#6B7280",
                "&.Mui-checked": {
                  color: "#2563EB",
                },
              }}
            />
          }
          label={<span className="text-gray-600">انثى</span>}
        />
      </RadioGroup>
      <div className="text-center mb-4">
        <span className="text-gray-500">أو</span>
      </div>
      <SocialButton platformsText={platformsText} />
    </FormTemplate>
  );
};

export default SignUp;
