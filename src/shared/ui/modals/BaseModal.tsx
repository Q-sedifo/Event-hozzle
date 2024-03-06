import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

export interface IBaseModal {
  isOpen: boolean;
  close: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const BaseModal = ({
  isOpen,
  children,
  className,
  close,
}: IBaseModal) => {
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

  return isOpen
    ? createPortal(
        <div className="fixed left-0 top-0 z-[100] flex h-[100vh] w-full items-center justify-center overflow-auto bg-[#000000]/50">
          <div
            className={`relative w-fit max-w-full border border-cyan bg-white p-10 shadow-[5px_5px_0px_0px_#82e0e0] ${className}`}
          >
            <div
              className="absolute -right-5 -top-5 w-fit cursor-pointer rounded-full bg-red-500 p-2 text-white"
              onClick={close}
            >
              <MdClose />
            </div>
            {children}
          </div>
        </div>,
        document.getElementById("modal") as Element,
      )
    : null;
};
