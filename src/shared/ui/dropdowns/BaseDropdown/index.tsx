"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { RiArrowDownSLine } from "react-icons/ri";

export interface IBaseDropdownProps {
  className?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  items?: {
    title: string;
    key: string;
  }[];
}

export const BaseDropdown = ({
  className,
  placeholder,
  icon,
  items,
}: IBaseDropdownProps) => {
  const [isActive, setIsActive] = useState<Boolean>(false);

  return (
    <div className={clsx("relative flex w-full items-center gap-2", className)}>
      {icon && icon}
      <div
        className="flex w-full cursor-pointer items-center justify-between gap-2"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <span className="whitespace-nowrap">{placeholder}</span>
        <RiArrowDownSLine />
      </div>
      {isActive && (
        <div
          className="absolute left-0 w-full border bg-white font-normal text-primary"
          style={{ top: "100%" }}
        >
          {(items || [{ title: "Test", key: "test" }])?.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer p-2 hover:bg-cyan hover:text-white"
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
