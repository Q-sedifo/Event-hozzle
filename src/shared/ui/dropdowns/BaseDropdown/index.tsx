"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { RiArrowDownSLine } from "react-icons/ri";

export interface IBaseDropdownProps {
  className?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  onSelect: (data: string) => void;
  selected?: string | null;
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
  onSelect,
  selected,
}: IBaseDropdownProps) => {
  const [isActive, setIsActive] = useState<Boolean>(false);

  return (
    <div
      className={clsx(
        "relative flex w-full cursor-pointer items-center gap-2",
        className,
      )}
      onClick={() => setIsActive((prev) => !prev)}
    >
      {icon && icon}
      <div className="flex w-full items-center justify-between gap-2">
        <span className="whitespace-nowrap">
          {/* @ts-ignore */}
          {(!!selected &&
            items?.find((item) => item.key === selected)?.title) ||
            placeholder}
        </span>
        <RiArrowDownSLine />
      </div>
      {isActive && (
        <div
          className="absolute left-0 z-10 max-h-[300px] w-full overflow-y-auto border bg-white font-normal text-primary"
          style={{ top: "100%" }}
        >
          {(items || [{ title: "Test", key: "test" }])?.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer p-2 hover:bg-cyan hover:text-white"
              onClick={() => onSelect(item.key)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
