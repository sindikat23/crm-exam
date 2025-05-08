import { Input } from "antd";
import React from "react";

interface iInput {
  label?: string;
  placeholder?: string;
  value?: string;
  mask?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomInput = ({ placeholder, onChange, type }: iInput) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      className="h-[40px]"
    />
  );
};

export default CustomInput;
