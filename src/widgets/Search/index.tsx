"use client"
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseDropdown } from "@/shared/ui/dropdowns/BaseDropdown";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { TfiViewListAlt } from "react-icons/tfi";

export const Search = () => {
  return (
    <div className="mt-10 flex flex-col items-stretch gap-3 rounded bg-white p-5 shadow-[5px_5px_0px_0px_#0ec6c6] xl:flex-row xl:gap-0 xl:p-0">
      <div className="flex items-center border px-4 py-2 xl:border-b-0 xl:border-l-0 xl:border-r xl:border-t-0 xl:border-cyan">
        <BaseInput
          icon={<IoIosSearch className="h-[25px] w-[25px] fill-gray-500" />}
          placeholder="What are you looking for?"
          className="w-full py-1 pr-1 xl:w-[230px]"
          onChange={() => ""}
        />
      </div>
      <div className="flex flex-col items-stretch gap-3 md:flex-row xl:gap-0">
        <div className="flex flex-1 items-center border px-4 py-2 xl:border-b-0 xl:border-l-0 xl:border-r xl:border-t-0 xl:border-cyan">
          <BaseInput
            icon={<SlLocationPin className="h-[25px] w-[25px] fill-gray-500" />}
            placeholder="Location"
            className="w-full py-1 pr-1"
            onChange={() => ""}
          />
        </div>
        <div className="flex flex-1 items-center border px-5 py-3 xl:border-none">
          <BaseDropdown
            icon={
              <TfiViewListAlt className="h-[20px] w-[20px] fill-gray-500" />
            }
            placeholder="All categories"
            className="w-full text-gray-500 xl:w-[230px]"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center py-2 xl:w-fit xl:pr-2">
        <button className="w-full whitespace-nowrap rounded bg-cyan px-8 py-3 text-[15px] font-bold text-white duration-500 hover:bg-slate-800 md:w-fit xl:px-5 xl:py-3">
          Search Now
        </button>
      </div>
    </div>
  );
};
