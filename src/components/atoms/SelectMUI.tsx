/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";

type SelectMUIProps = {
  categories: { category: string }[];
  label: string;
  handleChange: (event: SelectChangeEvent) => void;
  value: string;
  required?: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

const SelectMUI: FC<SelectMUIProps> = ({
  value,
  categories,
  label,
  handleChange,
  required = true,
  register,
  errors,
}) => {
  const dataLabel = "categoryId";

  const MenuItemElements = categories.map((value, index) => (
    <MenuItem key={index} value={value.category}>
      {value.category}
    </MenuItem>
  ));

  const isError = errors[dataLabel] !== undefined;

  return (
    <FormControl fullWidth error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select
        required={required}
        value={value}
        label={label}
        {...register(dataLabel, {
          required: "الرجاء اختيار نوع الاستفسار",
        })}
        onChange={handleChange}
      >
        {MenuItemElements}
      </Select>
      {isError && (
        <FormHelperText>{`*${errors[dataLabel]?.message}`}</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectMUI;
