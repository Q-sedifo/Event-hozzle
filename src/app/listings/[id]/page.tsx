import { Container } from "@/shared/ui/Container";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { Estimate } from "@/shared/ui/inputs/Estimate";

// Icons
import { GoShareAndroid } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiPhoneCallBold } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const Listing = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <Container>
          <div className="flex h-fit flex-col justify-between py-10 md:h-[392px]">
            <div className="flex items-center justify-end">
              <span className="flex items-center gap-2">
                <button className="flex items-center gap-2 bg-black/70 px-5 py-2 text-[15px] text-white duration-500 hover:bg-white hover:text-black">
                  <GoShareAndroid/>
                  Share
                </button>
                <button className="flex items-center gap-2 bg-black/70 px-5 py-2 text-[15px] text-white duration-500 hover:bg-white hover:text-black">
                  <IoMdHeartEmpty/>
                  Save
                </button>
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-[20px] font-extrabold text-white md:text-[35px]">Chipotle Mexican Grill</h2>
              <div className="flex items-center gap-2">
                <Estimate/>
                <span className="text-[15px] font-bold text-cyan">(45)</span>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <BaseButton 
                  text="(+212) 279-1456" 
                  type="button" 
                  variant="rounded" 
                  className="w-full !bg-cyan text-[18px] !font-bold !text-white md:w-fit"
                  icon={<PiPhoneCallBold className="h-[25px] w-[25px]"/>}
                />
                <span className="flex items-center gap-2">
                  <MdOutlineAccessTime className="h-[48px] w-[48px] text-gray-300"/>
                  <span className="flex flex-col justify-between">
                    <span className="text-[15px] font-bold text-white md:text-[17px]">Currently Open</span>
                    <span className="text-[13px] text-cyan md:text-[15px]">08:00 AM - 10:00 PM</span>
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <GrLocation className="h-[48px] w-[48px] text-gray-300"/>
                  <span className="flex flex-col justify-between">
                    <span className="text-[17px] font-bold text-white">Location</span>
                    <span className="text-[15px] text-cyan">New York, USA</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Listing;
