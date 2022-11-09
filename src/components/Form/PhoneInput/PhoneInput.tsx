import { ChangeEvent, FC } from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "./Styles.css";

interface PhoneProps {
  handlePhoneChange: (
    value: string,
    data: CountryData,
    event: ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void;
  required?: boolean;
  country?: string;
  masks?: Object;
  onlyCountries?: Array<string>;
  regions?: string;
  placeholder?: string;
}

const defaultProps: Partial<PhoneProps> = {
  required: true,
  country: "ke",
  masks: { ke: "... ... ..." },
  onlyCountries: ["ke", "tz", "ug", "sd", "et", "so"],
  regions: "africa",
  placeholder: "700 000 000",
};

const Phone: FC<PhoneProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const {
    handlePhoneChange,
    required,
    masks,
    onlyCountries,
    country,
    regions,
    placeholder,
  } = props;
  return (
    <PhoneInput
      inputProps={{
        required,
      }}
      masks={masks}
      onlyCountries={onlyCountries}
      country={country}
      regions={regions}
      onChange={handlePhoneChange}
      placeholder={placeholder}
    />
  );
};

export default Phone;
