import { FC } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type PasswordIconProps = {
  inputType: string;
  onClick: () => void;
};

const PasswordIcon: FC<PasswordIconProps> = ({ inputType, onClick }) => {
  const className =
    "absolute left-2 bottom-[50%] size-6 translate-y-[50%] cursor-pointer";

  return (
    <>
      {inputType === "text" ? (
        <AiFillEyeInvisible className={className} onClick={onClick} />
      ) : (
        <AiFillEye className={className} onClick={onClick} />
      )}
    </>
  );
};

export default PasswordIcon;
