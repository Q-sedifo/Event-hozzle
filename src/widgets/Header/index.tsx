"use client";
import { useState, useRef } from "react";
import { Logo } from "@/shared/ui/Logo";
import { SearchInput } from "./ui/Search";
import { AddListingBtn } from "./ui/AddListingBtn";
import { AuthorizationModal } from "@/shared/ui/modals/AuthorizationModal";
import { useSession } from "next-auth/react";
import { NavList } from "./ui/NavList";
import { ProfileBtn } from "./ui/ProfileBtn";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Icons
import { PiUserCircle } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { VscMenu } from "react-icons/vsc";

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState<boolean>(false);
  const header = useRef<HTMLElement | null>(null);
  const session = useSession();
  const path = usePathname();

  const isDashboard = path.includes("dashboard")

  return (
    <>
      <header
        className={clsx(
          "sticky left-0 top-0 z-50 w-full bg-white px-2 xl:px-[30px] 2xl:px-[6%]",
          className,
        )}
        ref={header}
      >
        <div className="flex items-center gap-[50px] py-5">
          <div className="flex items-center gap-[50px]">
            <Logo className={isDashboard ? "hidden xl:block" : ""}/>
            {isDashboard ? (
              <VscMenu className="block h-[30px] w-[30px] cursor-pointer xl:hidden"/>
            ) : (
              <SearchInput className="hidden 2xl:flex" />
            )}
          </div>
          <div className="flex flex-1 items-center justify-end gap-[50px] xl:justify-between">
            <NavList />
            <div className="flex items-center justify-between gap-10">
              {session.data ? (
                <ProfileBtn session={session} />
              ) : (
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
              <AddListingBtn className="hidden 2xl:flex" />
              <div className="flex items-center gap-2 2xl:hidden">
                <span className="relative block w-fit cursor-pointer 2xl:hidden">
                  {isMobileToolsOpen && (
                    <div className="absolute right-0 top-[105%] flex h-fit w-[320px] flex-col gap-5 bg-white p-5 pt-10 shadow-lg 2xl:hidden">
                      <SearchInput className="flex w-full" />
                      <AddListingBtn className="flex w-full justify-center" />
                    </div>
                  )}
                  <HiDotsHorizontal
                    className="h-[30px] w-[30px] duration-500 hover:fill-cyan"
                    onClick={() => setIsMobileToolsOpen((prev) => !prev)}
                  />
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
