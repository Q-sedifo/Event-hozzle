import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { RiArrowDownSLine } from "react-icons/ri";
import Cookies from "js-cookie";

interface Props {
  session: any;
}

// Icons
import { BiLogOut, BiEnvelope } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";

const links = [
  { title: "Dashboard", icon: <HiOutlineUser /> },
  { title: "Messages", icon: <BiEnvelope /> },
  { title: "Bookings", icon: <AiOutlineEdit /> },
  { title: "Settings", icon: <MdOutlineSettings /> },
];

export const ProfileBtn = ({ session }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLogout = () => {
    Cookies.remove("_auth_access_token");
    Cookies.remove("_auth_refresh_token");
    signOut();
  };

  console.log("session", session);

  return (
    <div className="relative hidden w-fit cursor-pointer items-center gap-2 2xl:flex">
      <div className="rounded-full bg-cyan p-5" />
      <span
        className="flex items-center gap-2 whitespace-nowrap text-gray-500 duration-500 hover:text-cyan"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>My account</span>
        <RiArrowDownSLine />
      </span>
      {isOpen && (
        <div className="absolute right-0 top-[105%] w-[130%] min-w-full cursor-auto bg-white shadow-lg">
          <div className="flex flex-col items-center justify-center gap-3 p-5">
            <span className="rounded-full bg-cyan p-10" />
            <span className="whitespace-nowrap text-[17px] font-semibold text-primary">
              {session?.data?.user?.name || "Andy Smith"}
            </span>
            <span className="whitespace-nowrap text-[14px] text-gray-500">
              {session?.data?.user?.email}
            </span>
          </div>
          <div className="flex flex-col gap-2 border-t border-gray-200 p-5">
            {links.map((link, index) => (
              <span
                key={index}
                className="group flex w-full cursor-pointer items-center gap-2 text-[14px] text-cyan"
              >
                {link.icon}
                <span className="font-medium text-primary duration-500 group-hover:text-cyan">
                  {link.title}
                </span>
              </span>
            ))}
          </div>
          <button
            className="flex w-full items-center gap-3 border-t border-gray-200 px-5 py-3 text-[14px] font-medium text-red-500"
            onClick={() => handleLogout()}
          >
            <BiLogOut />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
