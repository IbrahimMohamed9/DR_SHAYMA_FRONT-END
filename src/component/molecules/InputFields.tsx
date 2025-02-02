import { FC } from "react";
import { InputFieldType } from "../../types";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import InputField from "../atoms/InputField";

type InputFieldsProps = {
  inputFields: InputFieldType[];
  errors: FieldErrors<any>;
  register: UseFormRegister<any>;
};

const InputFields: FC<InputFieldsProps> = ({
  inputFields,
  errors,
  register,
}) => {

  const inputFieldsElements = inputFields.map((input, index) => (
    <div
      key={index}
      className="flex flex-col items-start font-inter font-semibold text-bold mb-2 w-full"
    >
      <InputField errors={errors} register={register} inputField={input} />
    </div>
  ));

  return <>{inputFieldsElements}</>;
};

export default InputFields;
