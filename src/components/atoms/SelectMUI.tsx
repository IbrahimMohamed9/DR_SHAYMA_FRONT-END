import { FC } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";

type SelectMUIProps = {
  values: { ar: string; en: string }[];
  label: { ar: string; en: string };
  handleChange: (event: SelectChangeEvent) => void;
  value: string;
  required?: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

const SelectMUI: FC<SelectMUIProps> = ({
  value,
  values,
  label,
  handleChange,
  required = true,
  register,
  errors,
}) => {
  const MenuItemElements = values.map((value, index) => (
    <MenuItem key={index} value={value.en}>
      {value.ar}
    </MenuItem>
  ));

  const isError = errors[label.en] !== undefined;

  return (
    <FormControl fullWidth error={isError}>
      <InputLabel>{label.ar}</InputLabel>
      <Select
        required={required}
        value={value}
        label={label.ar}
        {...register(label.en, {
          required: "الرجاء ادخال الاسم كامل",
        })}
        onChange={handleChange}
      >
        {MenuItemElements}
      </Select>
      {isError && (
        <FormHelperText>{`*${errors[label.en]?.message}`}</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectMUI;
