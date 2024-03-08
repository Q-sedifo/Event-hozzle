"use client";
import { useState, useRef } from "react";
import { Logo } from "./ui/Logo";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { AuthorizationModal } from "@/shared/ui/modals/AuthorizationModal";
import { useSession } from "next-auth/react";
import { NavList } from "./ui/NavList";
import { ProfileBtn } from "./ui/ProfileBtn";
import clsx from "clsx";

// Icons
import { IoIosSearch } from "react-icons/io";
import { PiUserCircle } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAddOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const header = useRef<HTMLElement | null>(null);
  const session = useSession();

  return (
    <>
      <header
        className={clsx(
          "sticky left-0 top-0 z-50 w-full bg-white px-2 xl:px-[30px] 2xl:px-[6%]",
          className
        )}
        ref={header}
      >
        <div className="flex items-center gap-[50px] py-5">
          <div className="flex items-center gap-[50px]">
            <Logo />
            <BaseInput
              icon={<IoIosSearch className="h-[20px] w-[20px] fill-cyan" />}
              placeholder="What are you looking for?"
              className="hidden w-[230px] border-b border-b-slate-400 py-1 pr-1 2xl:flex"
              onChange={() => ""}
            />
          </div>
          <div className="flex flex-1 items-center justify-end gap-[50px] xl:justify-between">
            <NavList />
            <div className="flex items-center gap-10 justify-between">
              {session.data ? <ProfileBtn/> : (
                <button
                  className="group relative hidden items-center gap-1 whitespace-nowrap text-[15px] transition-all duration-500 hover:text-cyan xl:flex"
                  onClick={() => setIsModalOpen(true)}
                >
                  <PiUserCircle className="h-[18px] w-[18px] fill-cyan" />
                  Login / Register
                  <span className="absolute -bottom-1 left-1/2 h-[1px] w-0 bg-cyan transition-all duration-500 group-hover:w-1/2"></span>
                  <span className="absolute -bottom-1 right-1/2 h-[1px] w-0 bg-cyan transition-all duration-500 group-hover:w-1/2"></span>
                </button>
              )}
              <button className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-cyan fill-cyan px-[30px] py-[11px] font-medium text-cyan duration-500 hover:bg-cyan hover:text-white 2xl:flex">
                <IoAddOutline className="h-[25px] w-[25px]" />
                Add Listing
              </button>
              <div className="flex items-center gap-2 2xl:hidden">
                <span className="block w-fit cursor-pointer 2xl:hidden">
                  <HiDotsHorizontal className="h-[30px] w-[30px] duration-500 hover:fill-cyan" />
                </span>
                <span className="block w-fit cursor-pointer xl:hidden">
                  <GiHamburgerMenu className="h-[40px] w-[40px]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AuthorizationModal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </>
  );
};
