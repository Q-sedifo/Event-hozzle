import React from "react";

interface Props {
  children: React.ReactNode | JSX.Element | string;
  maxWidth?: number;
}

export const Container = ({ children, maxWidth }: Props) => {
  const BASE_MAX_WIDTH = 1230;

  return (
    <div
      className="w-full"
      style={{ margin: "0 auto", maxWidth: `${maxWidth || BASE_MAX_WIDTH}px` }}
    >
      {children}
    </div>
  );
};
