import React, { HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

interface props {
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  decoration?: React.ReactNode;
}

export default function Input({ className, type, placeholder, decoration }: props) {
  return (
   <div className={twMerge("group focus-within:bg-primary-bg-outline border-primary-bg-outline min-h-8 rounded-(--rounded-secondary) border transition-(--transition-primary) bg-primary-bg backdrop-blur-primary-scaled flex flex-row justify-center items-center", className)}>
      {decoration}
      <input
        type={type}
        className={twMerge(
          "order-first w-full h-full focus:outline-none transition-(--transition-primary) pl-4",
        )}
        placeholder={placeholder} />
    </div>
  );
}
