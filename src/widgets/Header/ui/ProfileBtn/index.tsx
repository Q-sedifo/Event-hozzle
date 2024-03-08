import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { RiArrowDownSLine } from "react-icons/ri";

// Icons
import { BiLogOut, BiEnvelope } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";

const links = [
  { title: "Dashboard", icon: <HiOutlineUser/> },
  { title: "Messages", icon: <BiEnvelope/> },
  { title: "Bookings", icon: <AiOutlineEdit/> },
  { title: "Settings", icon: <MdOutlineSettings/> },
]

export const ProfileBtn = () => {
  const session = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log("session", session)

  return (
    <div className="hidden relative w-fit items-center gap-2 cursor-pointer 2xl:flex">
      <div className="p-5 rounded-full bg-cyan"/>
      <span 
        className="flex items-center gap-2 text-gray-500 whitespace-nowrap duration-500 hover:text-cyan"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span>My account</span>
        <RiArrowDownSLine/>
      </span>
      {isOpen && (
        <div className="absolute w-[130%] min-w-full right-0 top-[105%] cursor-auto bg-white shadow-lg">
          <div className="flex items-center justify-center flex-col gap-3 p-5">
            <span className="bg-cyan p-10 rounded-full"/>
            <span className="text-primary font-semibold text-[17px] whitespace-nowrap">
              {session?.data?.user?.name || "Andy Smith"}
            </span>
            <span className="text-[14px] text-gray-500 whitespace-nowrap">{session?.data?.user?.email}</span>
          </div>
          <div className="flex flex-col gap-2 p-5 border-t border-gray-200">
            {links.map((link, index) => (
              <span key={index} className="w-full flex items-center gap-2 text-[14px] text-cyan cursor-pointer group">
                {link.icon}
                <span className="text-primary font-medium group-hover:text-cyan duration-500">
                  {link.title}
                </span>
              </span>
            ))}
          </div>
          <button 
            className="w-full flex items-center gap-3 px-5 py-3 border-t border-gray-200 text-[14px] font-medium text-red-500"
            onClick={() => signOut()}
          >
              <BiLogOut/>
              Logout
          </button>
        </div>
      )}
    </div>
  )
}