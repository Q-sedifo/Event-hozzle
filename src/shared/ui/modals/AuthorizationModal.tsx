import React, { useState } from "react";
import { BaseModal, IBaseModal } from "@/shared/ui/modals/BaseModal";
import clsx from "clsx";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

interface Props extends IBaseModal {

}

export const AuthorizationModal = (props: Props) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <BaseModal {...props}>
      <div className="w-full md:w-[420px]">
        <div className="flex items-center gap-10 border-b border-gray-200 text-gray-600 text-[18px] font-semibold">
          <button className={clsx("group relative pb-2 border-b-2 border-transparent", {
              "!border-cyan": isLogin
            })} 
            onClick={() => setIsLogin(true)}
          >
            Login
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-1/2"></span>
            <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-1/2"></span>
          </button>
          <button className={clsx("group relative pb-2 border-b-2 border-transparent", {
              "!border-cyan": !isLogin
            })} 
            onClick={() => setIsLogin(false)}
          >
            Register
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-1/2"></span>
            <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-1/2"></span>
          </button>
        </div>
        <div className="py-5">
          <div className="text-[15px] text-gray-500 font-medium">
            {isLogin ? <>Login</> : <>Register</>} with
          </div>
          <div className="flex items-center gap-5 text-white font-bold pt-5">
            <button className="w-full flex items-center justify-center gap-2 p-3 bg-blue-800 rounded hover:opacity-70 transition-opacity duration-500">
              <FaFacebookF className="w-[20px] h-[20px]"/>
              Facebook
            </button>
            <button className="w-full flex items-center justify-center gap-2 p-3 bg-blue-500 rounded hover:bg-blue-600 duration-500">
              <FaTwitter className="w-[20px] h-[20px]"/>
              Twitter
            </button>
          </div>
          <div className="flex items-center gap-2 my-5">
            <span className="text-[15px] text-gray-500 font-medium">
              Or {isLogin ? <>Login</> : <>Register</>} with
            </span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>
        </div>
      </div>
    </BaseModal>
  )
}