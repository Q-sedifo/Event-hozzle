import React, { useState } from "react";
import { BaseModal, IBaseModal } from "@/shared/ui/modals/BaseModal";
import clsx from "clsx";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LoginForm } from "@/widgets/forms/Login";
import { RegisterForm } from "@/widgets/forms/Register";
import { signIn } from "next-auth/react";

interface Props extends IBaseModal {}

export const AuthorizationModal = (props: Props) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <BaseModal {...props}>
      <div className="w-full md:w-[420px]">
        <div className="flex items-center gap-10 border-b border-gray-200 text-[18px] font-semibold text-gray-600">
          <button
            className={clsx(
              "group relative border-b-2 border-transparent pb-2",
              {
                "!border-cyan": isLogin,
              },
            )}
            onClick={() => setIsLogin(true)}
          >
            Login
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-1/2"></span>
            <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-1/2"></span>
          </button>
          <button
            className={clsx(
              "group relative border-b-2 border-transparent pb-2",
              {
                "!border-cyan": !isLogin,
              },
            )}
            onClick={() => setIsLogin(false)}
          >
            Register
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-1/2"></span>
            <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-1/2"></span>
          </button>
        </div>
        <div className="py-5">
          <div className="text-[15px] font-medium text-gray-500">
            {isLogin ? <>Login</> : <>Register</>} with
          </div>
          <div className="flex items-center gap-5 pt-5 font-bold text-white">
            <button
              className="flex w-full items-center justify-center gap-2 rounded bg-blue-800 p-3 transition-opacity duration-500 hover:opacity-70"
              onClick={() => signIn("facebook")}
            >
              <FaFacebookF className="h-[20px] w-[20px]" />
              Facebook
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded bg-blue-500 p-3 duration-500 hover:bg-blue-600">
              <FaTwitter className="h-[20px] w-[20px]" />
              Twitter
            </button>
          </div>
          <div className="my-5 flex items-center gap-2">
            <span className="text-[15px] font-medium text-gray-500">
              Or {isLogin ? <>Login</> : <>Register</>} with
            </span>
            <div className="h-[1px] flex-1 bg-gray-200"></div>
          </div>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="mt-5 flex items-center gap-1 text-gray-500">
            {isLogin ? (
              <>Don&apos;t have an account? </>
            ) : (
              <>Already have an account?</>
            )}
            <span
              className="cursor-pointer text-[15px] font-semibold text-cyan"
              onClick={() => setIsLogin(isLogin ? false : true)}
            >
              {isLogin ? <>Register</> : <>Login</>} now
            </span>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};
