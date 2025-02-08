import { FC, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { MuiTelInput } from "mui-tel-input";
import Grid from "@mui/material/Grid2";
import { ThemeProvider, createTheme } from "@mui/material/styles";

type FeedbackTextFieldsProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  phoneNumber: string;
  handlePhoneChange: (value: string) => void;
};

const FeedbackTextFields: FC<FeedbackTextFieldsProps> = ({
  register,
  errors,
  phoneNumber,
  handlePhoneChange,
}) => {
  const [phoneError, setPhoneError] = useState("");

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },
  });

  const validateAtLeastOne = (allValues: any) => {
    if (phoneNumber === "" && !allValues.email) {
      setPhoneError("*الرجاء ادخال البريد الإلكتروني أو رقم الهاتف.");
      return "الرجاء ادخال البريد الإلكتروني أو رقم الهاتف.";
    }
    setPhoneError("");
    return true;
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid size={{ xs: 12, sm: 12, md: 6 }}>
        <TextField
          fullWidth={true}
          required
          label="الاسم كامل"
          error={!!errors["name"]?.message}
          {...register("name", {
            required: "الرجاء ادخال الاسم كامل",
          })}
          helperText={
            errors["name"]?.message ? `*${errors["name"].message}` : ""
          }
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6 }}>
        <MuiTelInput
          fullWidth={true}
          value={phoneNumber}
          onChange={handlePhoneChange}
          error={!!phoneError}
          helperText={phoneError}
          label="رقم الهاتف"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
        <TextField
          fullWidth={true}
          label="البريد الإلكتروني"
          error={!!errors["email"]?.message}
          helperText={
            errors["email"]?.message ? `*${errors["email"].message}` : ""
          }
          {...register("email", {
            validate: validateAtLeastOne,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "هذا النمط غير صحيح",
            },
          })}
        />
      </Grid>
    </ThemeProvider>
  );
};

export default FeedbackTextFields;
