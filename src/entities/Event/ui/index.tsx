import { HiOutlineBookmark } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { Estimate } from "@/shared/ui/inputs/Estimate";

export const Event = () => {
  return (
    <div className="w-full bg-white rounded border border-cyan duration-500 cursor-pointer shadow-[5px_5px_0px_0px_#82e0e0] hover:shadow-[5px_5px_0px_0px_#0ec6c6] overflow-hidden md:w-[350px]">
      <div className="h-[230px] bg-black"></div>
      <div className="flex flex-col gap-3 relative p-5">
        <span className="absolute flex items-center gap-2 p-2 bg-white rounded-full -top-5 right-5 font-semibold text-[13px] text-gray-500">
          <span className="w-[30px] h-[30px] bg-cyan rounded-full"></span>
          Taylor
        </span>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-gray-200 rounded-full text-cyan"></span>
            <span className="font-semibold text-[13px] text-gray-500">Restaurant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-gray-200 rounded-full text-cyan"><SlLocationPin className="w-[15px] h-[15px]"/></span>  
            <span className="font-semibold text-[13px] text-gray-500">Location</span>
          </div>
        </div>
        <div className="font-bold text-[18px]">
          Chipotel Mexican Grill
        </div>
        <div className="flex items-center gap-2 text-[14px] font-semibold text-cyan">
          <span><HiOutlineBookmark className="text-cyan w-[15px] h-[15px]"/></span>Open now
        </div>
        <div className="flex items-center justify-between gap-5">
          <span className="flex items-center gap-1 font-semibold text-gray-500">
            <Estimate />(35)
          </span>
          <div className="w-fit flex items-center gap-3">
            <span className="font-semibold text-[13px] text-gray-500">Start from</span>
            <span className="font-bold">500$</span>
          </div>
        </div>
      </div>
    </div>
  )
}