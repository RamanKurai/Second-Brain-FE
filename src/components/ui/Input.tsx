import React from "react";
import  { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  className?: string;
  type?: string;
  value?: string;
  readOnly?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, className = "", type = "text", value, readOnly = false }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        className={`w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none cursor-pointer focus:ring-2 focus:ring-[#7950f2] transition-all duration-200 max-[640px]:px-4 max-[640px]:py-1.5 max-[640px]:text-sm ${className}`}
      />
    );
  }
);

Input.displayName = "Input"; 
