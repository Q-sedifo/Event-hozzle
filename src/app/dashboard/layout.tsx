import React from "react";
import { Footer } from "./ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="min-h-full flex-1 bg-lightGray/50 px-5 py-10 md:p-10 xl:!pl-[280px]"
    >
      {children}
      <Footer/>
    </div>
  );
}
