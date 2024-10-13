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
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    if (type === "password") {
      type = "text";
    } else {
      type = "password";
    }
  };

  return (
    <div className={style.container}>
      <input
        type={type}
        name={inputName}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {showPasswordIcon ? (
        type === "password" ? (
          <IoEyeOutline onClick={togglePassword} />
        ) : (
          <IoEyeOffOutline onClick={togglePassword} />
        )
      ) : null}
    </div>
  );
};

export default CustomInput;
