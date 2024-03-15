import React from "react";
import clsx from "clsx";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactElement;
  type: "submit" | "button";
  variant: "default" | "rounded";
  disabled?: boolean;
}

export const BaseButton = ({
  text,
  className,
  onClick,
  type,
  variant = "default",
  icon,
  disabled,
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        `flex items-center gap-2 whitespace-nowrap ${className}`,
        {
          "rounded-full border border-cyan fill-cyan px-[30px] py-[11px] font-medium text-cyan duration-500 hover:bg-cyan hover:text-white":
            variant === "rounded",
          "justify-center rounded bg-cyan p-3 text-center font-bold text-white duration-500 hover:bg-primary":
            variant === "default",
        },
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icon}
      {text}
    </button>
  );
};
