"use client";
import React from "react";
import { useMobile } from "@/shared/contexts/MobileContext";
import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isMobile } = useMobile();

  return (
    <div className={clsx("min-h-full flex-1 bg-lightGray/50 p-10", { "pl-[280px]": !isMobile })}>
      {children}
    </div>
  );
}
