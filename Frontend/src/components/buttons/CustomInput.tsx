import React from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface CustomInputProps {
  type: string;
  value?: string;
  placeholder?: string;
  label?: string;
  inputName: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  value = undefined,
  placeholder,
  label = undefined,
  inputName,
  onChange,
}) => {
  const showPassword = () => {
    if (type === "password") {
      type = "text";
    } else {
      type = "password";
    }
  };

  return (
    <>
      {label && <label htmlFor={inputName}>{label}</label>}
      <div>
        <input
          type={type}
          name={inputName}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {type === "password" ? (
          <IoEyeOutline onClick={showPassword} />
        ) : (
          <IoEyeOffOutline onClick={showPassword} />
        )}
      </div>
    </>
  );
};

export default CustomInput;
