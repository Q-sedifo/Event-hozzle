import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

export interface IBaseModal {
  isOpen: boolean;
  close: () => void;
  children?: React.ReactNode,
  className?: string;
}

export const BaseModal = ({ isOpen, children, className, close }: IBaseModal) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      return;
    }

    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return isOpen ? createPortal(
    <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center overflow-auto bg-[#000000]/50 z-[100]">
      <div className={`w-fit max-w-full p-10 bg-white border border-cyan relative shadow-[5px_5px_0px_0px_#82e0e0] ${className}`}>
        <div 
          className="w-fit absolute -right-5 -top-5 p-2 bg-red-500 text-white rounded-full cursor-pointer"
          onClick={close}
        >
          <MdClose/>
        </div>
        {children}
      </div>
    </div>, 
    document.getElementById("modal") as Element,
  ) : null
}