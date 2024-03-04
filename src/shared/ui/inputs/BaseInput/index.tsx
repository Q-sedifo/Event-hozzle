import React from "react";
import clsx from "clsx";

interface Props {
  icon: React.ReactNode;
  placeholder: string;
  className?: string;
}

export const BaseInput = ({ icon, placeholder, className }: Props) => {
  return (
    <div className={clsx("flex w-fit items-center gap-2", className)}>
      {icon && icon}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-none outline-none"
      />
    </div>
  );
};
