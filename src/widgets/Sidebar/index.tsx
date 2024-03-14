"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import { Logo } from "@/shared/ui/Logo";
import { usePathname } from "next/navigation";
import { Title } from "./ui/Title";
import { NavItem } from "./ui/NavItem";
import { useSidebar } from "@/shared/contexts/SidebarContext";
import { useMobile } from "@/shared/contexts/MobileContext";

// Icons
import { IoClose } from "react-icons/io5";
import { GrHome } from "react-icons/gr";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { BsCopy } from "react-icons/bs";
import { LuWallet2 } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbCircleDotted } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

export const SideBar = () => {
  const path = usePathname();
  const isDashboard = path.includes("dashboard");

  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();
  const { isMobile } = useMobile();

  useEffect(() => {
    if (isMobile) return

    openSidebar();
  }, [isMobile, openSidebar])

  return isDashboard ? (
    <div
      className={clsx(
        "fixed left-0 top-0 h-[100vh] w-[250px] -translate-x-full border-r-[8px] border-gray-100 bg-white py-5 duration-500",
        {
          "!translate-x-[0%]": isSidebarOpen,
          "z-50": isMobile,
        },
      )}
    >
      <div className="flex items-center justify-between px-5">
        <Logo />
        <IoClose className="cursor-pointer" onClick={closeSidebar}/>
      </div>
      <div>
        <Title text="Main" />
        <NavItem text="Dashboard" href="/dashboard" icon={<GrHome />} />
        <NavItem
          text="Messages"
          href="/dashboard/messages"
          icon={<FaRegEnvelopeOpen />}
        />
        <NavItem text="Bookings" href="/dashboard/bookings" icon={<BsCopy />} />
        <NavItem text="Wallet" href="/dashboard/wallet" icon={<LuWallet2 />} />
        <Title text="Listings" />
        <NavItem
          text="Reviews"
          href="/dashboard/reviews"
          icon={<FaRegStar />}
        />
        <NavItem
          text="Bookmarks"
          href="/dashboard/bookmarks"
          icon={<FaRegHeart />}
        />
        <NavItem
          text="Add Listings"
          href="/dashboard/add-listing"
          icon={<IoMdAddCircleOutline />}
        />
        <NavItem
          text="Invoice"
          href="/dashboard/invoice"
          icon={<TbCircleDotted />}
        />
        <Title text="Account" />
        <NavItem
          text="Profile"
          href="/dashboard/profile"
          icon={<MdAccountCircle />}
        />
        <NavItem text="Logout" href="/dashboard/invoice" icon={<CiLogout />} />
      </div>
    </div>
  ) : null;
};
