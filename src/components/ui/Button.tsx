import React from "react";
import { twMerge } from "tailwind-merge";

export enum ButtonStyle {
  Primary,
  Secondary,
}
interface props {
  className?: string;
  style: ButtonStyle;
  children?: React.ReactNode;
  onClick?: () => void;
}
export default function Button({ className, style, children, onClick }: props) {
  let colorSelectors = "";

  switch (style) {
    case ButtonStyle.Primary:
      colorSelectors = "bg-secondary-bg";
      break;
    case ButtonStyle.Secondary:
      colorSelectors =
        "bg-primary-bg hover:bg-primary-bg-outline outline outline-primary-bg-outline";
      break;
  }

  return (
    <button
      onClick={onClick}
      className={twMerge(
        `${colorSelectors} min-h-6 rounded-(--rounded-secondary) px-6 py-2.75 transition-(--transition-primary)`,
        className,
      )}>
      {children}
    </button>
  );
}
