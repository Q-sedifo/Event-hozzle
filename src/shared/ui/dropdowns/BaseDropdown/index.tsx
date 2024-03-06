"use client"
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
  }[]
}

export const BaseDropdown = ({ className, placeholder, icon, items }: IBaseDropdownProps) => {
  const [isActive, setIsActive] = useState<Boolean>(false);
  
  return (
    <div className={clsx("w-full flex items-center gap-2 relative", className)}>
      {icon && icon}
      <div className="w-full flex items-center justify-between gap-2 cursor-pointer" onClick={() => setIsActive(prev => !prev)}>
        <span className="whitespace-nowrap">{placeholder}</span>
        <RiArrowDownSLine/>
      </div>
      {isActive && (
        <div className="w-full absolute left-0 bg-white border font-normal text-primary" style={{ top: "100%" }}>
          {(items || [{ title: "Test", key: "test" }])?.map((item, index) => (
            <div key={index} className="p-2 cursor-pointer hover:bg-cyan hover:text-white">
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}