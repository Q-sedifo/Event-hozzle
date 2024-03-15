"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { SidebarProvider } from "@/shared/contexts/SidebarContext";
import { MobileProvider } from "@/shared/contexts/MobileContext";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <MobileProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </MobileProvider>
    </SessionProvider>
  );
};
