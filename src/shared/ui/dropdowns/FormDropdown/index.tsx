import React from "react";
import {
  BaseDropdown,
  IBaseDropdownProps,
} from "@/shared/ui/dropdowns/BaseDropdown";

interface Props extends IBaseDropdownProps {
  className?: string;
}

export const FormDropdown: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <BaseDropdown
      className={`border bg-gray-100 px-5 py-3 ${className}`}
      {...rest}
    />
  );
};
