import React, { FC } from "react";
import { CirclesWithBar } from "react-loader-spinner";

interface LoaderSpinnerProps {
  color: string;
  isVisible?: boolean;
}

const LoaderSpinner: FC<LoaderSpinnerProps> = ({ color, isVisible = true }) => {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color={color}
      outerCircleColor={color}
      innerCircleColor={color}
      barColor={color}
      ariaLabel="circles-with-bar-loading"
      wrapperClass="relative h-screen flex items-center justify-center -mt-20"
      visible={isVisible}
    />
  );
};

export default LoaderSpinner;
