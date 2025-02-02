import { FC, ReactNode } from "react";

type BorderAroundSectionProps = {
  flex: boolean;
  children: ReactNode;
  className?: string;
  bgColor?: string;
};

const BorderAroundSection: FC<BorderAroundSectionProps> = ({
  flex,
  children,
  className,
  bgColor,
}) => {
  return (
    <div className={`min-h-fit p-1 sm:p-5 w-full ${bgColor ?? ""}`}>
      <div
        className={`border-5 h-full py-2 md:py-5 border-royal-blue ${className}
        ${flex ? "flex flex-col-reverse md:flex-row" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default BorderAroundSection;
