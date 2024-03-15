"use client";
import clsx from "clsx";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";

interface Props {
  onPageChange?: () => void;
  pagesCount: number;
}

export const Pagination = ({ pagesCount, onPageChange }: Props) => {
  return (
    <div className="flex w-fit items-center gap-2 py-5">
      <button className="relative flex h-[40px] w-[40px] items-center justify-center rounded-full border border-cyan font-medium shadow-[-1px_5px_0px_0px_#0ec6c6]">
        <span className="absolute">
          <RiArrowLeftDoubleLine />
        </span>
      </button>
      {[1, 2, 3, 4, 5, 6].map((page, index) => (
        <button
          key={index}
          onClick={() => console.log("PAGE", page)}
          className={clsx(
            "relative flex h-[40px] w-[40px] items-center justify-center rounded-full border font-medium shadow-[2px_5px_0px_0px_#c7c7c7] duration-500 hover:bg-cyan hover:text-white",
            {
              "bg-cyan text-white": index === 0,
            },
          )}
        >
          <span className="absolute">{page}</span>
        </button>
      ))}
      <button className="relative flex h-[40px] w-[40px] items-center justify-center rounded-full border border-cyan font-medium shadow-[1px_5px_0px_0px_#0ec6c6]">
        <span className="absolute">
          <RiArrowRightDoubleLine />
        </span>
      </button>
    </div>
  );
};
