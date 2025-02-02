import { FC } from "react";
import { FieldErrors, Path } from "react-hook-form";

type ErrorMessageProps = {
  fieldName: Path<any>;
  errors: FieldErrors<any>;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ fieldName, errors }) => {
  return (
    <span className="text-red-700">
      {errors[fieldName]?.message
        ? String("*" + errors[fieldName]?.message)
        : ""}
    </span>
  );
};

export default ErrorMessage;
