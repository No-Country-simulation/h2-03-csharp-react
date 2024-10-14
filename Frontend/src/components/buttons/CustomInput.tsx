import React, { useState } from "react";
import style from "./custom-input.module.css";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface CustomInputProps {
  type: string;
  value?: string;
  placeholder?: string;
  inputName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showPasswordIcon?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  value = undefined,
  placeholder,
  inputName,
  onChange,
  showPasswordIcon = false,
}) => {
  const [showPassword, setShowPassword] = useState(type);

  const togglePassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  return (
    <div className={style.container}>
      <input
        type={showPassword}
        name={inputName}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {showPasswordIcon ? (
        showPassword === "password" ? (
          <IoEyeOutline className={style.icon} onClick={togglePassword} />
        ) : (
          <IoEyeOffOutline className={style.icon} onClick={togglePassword} />
        )
      ) : null}
    </div>
  );
};

export default CustomInput;
