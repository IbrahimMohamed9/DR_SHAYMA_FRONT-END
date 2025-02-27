import { FC } from "react";
import Button from "@atoms/Button";
import Link from "next/link";

type HeaderButtonsProps = {
  className: string;
  buttonClassName: string;
};

const HeaderButtons: FC<HeaderButtonsProps> = ({
  className,
  buttonClassName,
}) => {
  const buttons = [
    {
      navTo: "/login",
      className: "bg-main-green text-white " + buttonClassName,
      content: "تسجيل دخول",
    },
    {
      navTo: "/signUp",
      className: "bg-white text-black " + buttonClassName,
      content: "إنشاء حساب",
    },
  ];

  return (
    <div className={className}>
      {buttons.map((button, index) => (
        <Link href={button.navTo} key={index}>
          <Button className={button.className}>{button.content}</Button>
        </Link>
      ))}
    </div>
  );
};

export default HeaderButtons;
