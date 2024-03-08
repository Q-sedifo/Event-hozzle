"use client"
import React from "react";
import { useSession } from "next-auth/react";

export const Loader = () => {
  const session = useSession();

  return session?.status === "loading" ? (
    <div className="fixed left-0 top-0 z-[1000] flex h-[100vh] w-full items-center justify-center overflow-auto bg-white">
      <span className="pulse-loader"/>
    </div>
  ) : null
}