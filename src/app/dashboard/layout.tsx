"use client";
import React, { useState, useEffect } from "react";
import { SideBar } from "@/widgets/Sidebar";
import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth < 1280) {
      setIsMobile(true);
      setIsSidebarOpen(false);
      return;
    }

    setIsSidebarOpen(true);
    setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <div className={clsx({ "pl-[258px]": !isMobile })}>{children}</div>
    </div>
  );
}
