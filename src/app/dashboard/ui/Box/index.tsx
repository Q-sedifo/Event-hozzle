import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Box = ({ children, title }: Props) => {
  return (
    <div className="bg-white">
      <div className="border-b p-5">
        <h3 className="text-[17px] font-semibold">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};
