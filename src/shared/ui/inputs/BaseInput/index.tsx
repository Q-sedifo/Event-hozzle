"use client";
import React from "react";
import clsx from "clsx";

interface Props {
  value?: string;
  onChange: (data: string) => void;
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
  type?: "text" | "password";
}

export const BaseInput = ({
  icon,
  placeholder,
  className,
  type,
  value,
  onChange,
}: Props) => {
  return (
    <div className={clsx("flex w-fit items-center gap-2", className)}>
      {icon && icon}
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        className="w-full border-none bg-inherit outline-none"
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
};
