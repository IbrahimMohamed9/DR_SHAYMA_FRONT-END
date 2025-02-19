import "react-international-phone/style.css";

import { BaseTextFieldProps, MenuItem, Select } from "@mui/material";
import React from "react";
import {
  CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
import countriesTranslation from "@/data/countriesEnToAr.json";

export interface MUIPhoneProps extends BaseTextFieldProps {
  value?: string;
  label: string;
  onChange?: (phone: string) => void;
}

export const MuiPhone: React.FC<MUIPhoneProps> = ({
  onChange,
  value = "",
  label,
}) => {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "eg",
      value: value,
      countries: defaultCountries,
      // onBlur: props.onBlur,
      onChange: (e) => {
        if (onChange) onChange(e.phone);
      },
    });

  const palestinianFlag = (iso2: string): string | undefined => {
    if (iso2 === "il") {
      return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1f5-1f1f8.svg";
    }
    return undefined;
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="phone" className="text-right block">
        رقم الهاتف
      </label>
      <div className="relative w-full border border-slate-400 rounded-lg flex items-center">
        <Select
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          }}
          className="min-w-[80px] border-0 outline-none focus:outline-none"
          sx={{
            "& .MuiSelect-select": {
              padding: "5px !important",
              paddingRight: "30px !important",
            },
          }}
          value={country.iso2}
          onChange={(e) => setCountry(e.target.value as CountryIso2)}
          renderValue={(value) => (
            <FlagImage
              iso2={value}
              src={palestinianFlag(country.iso2)}
              className="w-6 h-6 object-contain"
            />
          )}
        >
          {defaultCountries.map((c) => {
            const country = parseCountry(c);
            let { name } = country;
            name = countriesTranslation[name];
            if (country.dialCode === "972") {
              name = "عرب الداخل";
            }

            return (
              <MenuItem
                key={country.iso2}
                value={country.iso2}
                className={`flex items-center gap-2 hover:bg-royal-blue hover:bg-opacity-10 flex-row-reverse`}
              >
                <FlagImage
                  iso2={country.iso2}
                  src={palestinianFlag(country.iso2)}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-sm">{name}</span>
                <span className="text-sm text-gray-500">
                  +{country.dialCode}
                </span>
              </MenuItem>
            );
          })}
        </Select>
        <input
          id="phone"
          type="tel"
          name={label}
          ref={inputRef}
          value={inputValue}
          onChange={handlePhoneValueChange}
          placeholder="أدخل رقم الهاتف"
          className="py-1 px-4 focus:bg-royal-blue focus:bg-opacity-20 rounded-lg outline-none h-full w-full"
        />
      </div>
    </div>
  );
};
