import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseDropdown } from "@/shared/ui/dropdowns/BaseDropdown";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { TfiViewListAlt } from "react-icons/tfi";

export const Search = () => {
  return (
    <div className="flex flex-col items-stretch gap-3 p-5 bg-white rounded mt-10 shadow-[5px_5px_0px_0px_#0ec6c6] xl:flex-row xl:gap-0 xl:p-0">
      <div className="flex items-center px-4 py-2 border xl:border-cyan xl:border-b-0 xl:border-t-0 xl:border-l-0 xl-border-r">
        <BaseInput
          icon={<IoIosSearch className="h-[25px] w-[25px] fill-gray-500" />}
          placeholder="What are you looking for?"
          className="py-1 pr-1 w-full xl:w-[230px]"
        />
      </div>
      <div className="flex items-stretch flex-col gap-3 xl:gap-0 md:flex-row">
        <div className="flex flex-1 items-center px-4 py-2 border xl:border-cyan xl:border-b-0 xl:border-t-0 xl:border-l-0 xl-border-r">
          <BaseInput
            icon={<SlLocationPin className="h-[25px] w-[25px] fill-gray-500" />}
            placeholder="Location"
            className="w-full py-1 pr-1"
          />
        </div>
        <div className="flex flex-1 items-center px-5 py-3 border xl:border-none">
          <BaseDropdown
            icon={<TfiViewListAlt className="h-[20px] w-[20px] fill-gray-500" />}
            placeholder="All categories"
            className="w-full text-gray-500 xl:w-[230px]"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-2 xl:w-fit xl:pr-2">
        <button className="w-full py-3 px-8 text-white text-[15px] font-bold bg-cyan duration-500 whitespace-nowrap rounded hover:bg-slate-800 md:w-fit xl:px-5 xl:py-3">
          Search Now
        </button>
      </div>
    </div>
  )
}