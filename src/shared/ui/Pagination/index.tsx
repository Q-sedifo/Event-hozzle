"use client"
import clsx from "clsx";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";

interface Props {
  onPageChange?: () => void;
  pagesCount: number;
}

export const Pagination = ({ pagesCount, onPageChange }: Props) => {
  return (
    <div className="w-fit flex items-center gap-3 py-5">
      <button 
        className="relative flex items-center justify-center w-[40px] h-[40px] border border-cyan rounded-full font-medium shadow-[-5px_5px_0px_0px_#82e0e0]"
      >
        <span className="absolute">
          <RiArrowLeftDoubleLine/>
        </span>
      </button>
      {[1, 2, 3, 4, 5, 6].map((page, index) => (
        <button 
          key={index} 
          onClick={() => console.log("PAGE", page)}
          className={clsx("relative flex items-center justify-center w-[40px] h-[40px] border rounded-full font-medium shadow-[5px_5px_0px_0px_#c7c7c7] duration-500 hover:bg-cyan hover:text-white", {
            "text-white bg-cyan": index === 0
          })}
        >
          <span className="absolute">
            {page}
          </span>
        </button>
      ))}
      <button 
        className="relative flex items-center justify-center w-[40px] h-[40px] border border-cyan rounded-full font-medium shadow-[5px_5px_0px_0px_#82e0e0]"
      >
        <span className="absolute">
          <RiArrowRightDoubleLine/>
        </span>
      </button>
    </div>
  )
}