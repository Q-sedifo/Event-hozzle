"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface Props {
  text: string;
  href: string;
  icon: React.ReactNode;
}

export const NavItem = ({ text, href, icon }: Props) => {
  const path = usePathname();

  return (
    <Link href={href}>
      <div
        className={clsx(
          "group flex items-center gap-2 border-l-4 border-transparent px-5 py-2 text-[15px]",
          {
            "!border-cyan": path === href,
          },
        )}
      >
        <span className="text-[18px] text-gray-700">{icon}</span>
        <span className={clsx("font-medium text-gray-400 duration-500 group-hover:text-cyan", {
          "!text-cyan": path === href,
        })}>
          {text}
        </span>
      </div>
    </Link>
  );
};
