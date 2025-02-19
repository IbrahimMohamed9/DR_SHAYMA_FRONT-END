/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { InputFieldType } from "@/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { PhoneNumberUtil } from "google-libphonenumber";
import { MuiPhone } from "./PhoneInput";

type InputFieldProps = {
  inputField: InputFieldType;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

const InputField: FC<InputFieldProps> = ({ register, errors, inputField }) => {
  const {
    type,
    className,
    required,
    fieldName,
    pattern,
    PrefixIcon,
    OnClickIcon,
    ElementBelowField,
    minLength,
    maxLength,
    value,
    label,
    onChange,
  } = inputField;
  const phoneUtil = PhoneNumberUtil.getInstance();

  if (type === "phone") {
    return <MuiPhone value={value} label={label} onChange={onChange} />;
  }

  return (
    <>
      <label htmlFor={label}>{fieldName}</label>
      <div
        className={`w-full relative border border-slate-400 rounded p-1 ${
          PrefixIcon && "relative"
        }`}
      >
        <input
          id={label}
          type={type}
          className={`py-1 px-4 focus:bg-royal-blue focus:bg-opacity-20 rounded-lg outline-none h-full
            ${PrefixIcon ? "w-[calc(100%-2rem)]" : "w-full"}
            ${className ?? ""}`}
          {...register(label, {
            maxLength: maxLength,
            minLength: minLength,
            required: required,
            pattern: pattern,
          })}
        />
        {PrefixIcon && <PrefixIcon onClick={OnClickIcon} inputType={type} />}
      </div>
      <ErrorMessage errors={errors} fieldName={label} />
      {ElementBelowField && <ElementBelowField />}
    </>
  );
};

export default InputField;
