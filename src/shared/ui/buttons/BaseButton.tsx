import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactElement;
  type: "submit" | "button";
}

export const BaseButton = ({ text, className, onClick, type }: Props) => {
  return (
    <button
      type={type}
      className={`block rounded bg-cyan p-3 text-center font-bold text-white duration-500 hover:bg-primary ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
