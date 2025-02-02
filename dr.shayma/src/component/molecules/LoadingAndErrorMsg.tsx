import { FC } from "react";
import LoaderSpinner from "../atoms/LoaderSpinner";

type LoadingAndErrorMsgProps = {
  loading: boolean;
  error: any;
  hexColor?: string;
};

const LoadingAndErrorMsg: FC<LoadingAndErrorMsgProps> = ({
  loading,
  error,
  hexColor = "#3e7422",
}) => {
  if (loading) {
    return <LoaderSpinner isVisible={loading} color={hexColor} />;
  }

  if (error) {
    console.error(error);
    return <div></div>;
  }
  return <></>;
};

export default LoadingAndErrorMsg;
