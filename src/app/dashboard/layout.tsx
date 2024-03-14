"use client";
import React, { useState, useEffect } from "react";
import { useMobile } from "@/shared/contexts/MobileContext";
import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isMobile } = useMobile();

  return (
    <div>
      <div className={clsx({ "pl-[258px]": !isMobile })}>{children}</div>
    </div>
  );
}
