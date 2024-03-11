import { HiOutlineBookmark } from "react-icons/hi";
import { Estimate } from "@/shared/ui/inputs/Estimate";

// Icons
import { SlLocationPin } from "react-icons/sl";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

export const Listing = () => {
  return (
    <div className="w-full min-w-fit overflow-hidden rounded border border-cyan bg-white shadow-[5px_5px_0px_0px_#82e0e0] duration-500 hover:shadow-[5px_5px_0px_0px_#0ec6c6] md:w-[350px]">
      <div className="relative h-[230px] bg-gray-200">
        <span className="absolute left-3 top-3 cursor-pointer rounded-full bg-black/50 p-2 text-white duration-500 hover:bg-cyan">
          <IoRestaurantOutline className="h-[20px] w-[20px]" />
        </span>
        <span className="absolute right-3 top-3 cursor-pointer rounded-full bg-black/50 p-2 text-white duration-500 hover:bg-cyan">
          <IoMdHeartEmpty className="h-[20px] w-[20px]" />
        </span>
      </div>
      <div className="relative flex flex-col gap-3 p-5">
        <span className="absolute -top-5 right-5 flex items-center gap-2 rounded-full bg-white p-2 text-[13px] font-semibold text-gray-500">
          <span className="h-[30px] w-[30px] rounded-full bg-cyan"></span>
          Taylor
        </span>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-gray-200 p-2 text-cyan"></span>
            <span className="text-[13px] font-semibold text-gray-500">
              Restaurant
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-gray-200 p-2 text-cyan">
              <SlLocationPin className="h-[15px] w-[15px]" />
            </span>
            <span className="text-[13px] font-semibold text-gray-500">
              Location
            </span>
          </div>
        </div>
        <div className="text-[18px] font-bold">Chipotel Mexican Grill</div>
        <div className="flex items-center gap-2 text-[14px] font-semibold text-cyan">
          <span>
            <HiOutlineBookmark className="h-[15px] w-[15px] text-cyan" />
          </span>
          Open now
        </div>
        <div className="flex items-center justify-between gap-5">
          <span className="flex items-center gap-1 font-semibold text-gray-500">
            <Estimate />
            (35)
          </span>
          <div className="flex w-fit items-center gap-3">
            <span className="text-[13px] font-semibold text-gray-500">
              Start from
            </span>
            <span className="font-bold">500$</span>
          </div>
        </div>
      </div>
    </div>
  );
};
