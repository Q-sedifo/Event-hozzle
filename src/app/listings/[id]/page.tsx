import { Container } from "@/shared/ui/Container";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { Estimate } from "@/shared/ui/inputs/Estimate";

// Icons
import { GoShareAndroid } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiPhoneCallBold } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { IoCheckmarkSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { IoTrailSignOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Amenities = ["Parking Street", "Vegan Options", "Kids Activities Nearby", "Accepts Apple Pay", "Accepts Google Pay", "Wheelchair Accessible"]

const Listing = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <Container>
          <div className="flex h-fit flex-col justify-between py-10 md:h-[392px]">
            <div className="flex items-center justify-end">
              <span className="flex items-center gap-2">
                <button className="flex items-center gap-2 bg-black/70 px-5 py-2 text-[15px] text-white duration-500 hover:bg-white hover:text-black">
                  <GoShareAndroid />
                  Share
                </button>
                <button className="flex items-center gap-2 bg-black/70 px-5 py-2 text-[15px] text-white duration-500 hover:bg-white hover:text-black">
                  <IoMdHeartEmpty />
                  Save
                </button>
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-[20px] font-extrabold text-white md:text-[35px]">
                Chipotle Mexican Grill
              </h2>
              <div className="flex items-center gap-2">
                <Estimate />
                <span className="text-[15px] font-bold text-cyan">(45)</span>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <BaseButton
                  text="(+212) 279-1456"
                  type="button"
                  variant="rounded"
                  className="w-full !bg-cyan text-[18px] !font-bold !text-white md:w-fit"
                  icon={<PiPhoneCallBold className="h-[25px] w-[25px]" />}
                />
                <span className="flex items-center gap-2">
                  <MdOutlineAccessTime className="h-[48px] w-[48px] text-gray-300" />
                  <span className="flex flex-col justify-between">
                    <span className="text-[15px] font-bold text-white md:text-[17px]">
                      Currently Open
                    </span>
                    <span className="text-[13px] text-cyan md:text-[15px]">
                      08:00 AM - 10:00 PM
                    </span>
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <GrLocation className="h-[48px] w-[48px] text-gray-300" />
                  <span className="flex flex-col justify-between">
                    <span className="text-[17px] font-bold text-white">
                      Location
                    </span>
                    <span className="text-[15px] text-cyan">New York, USA</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="flex flex-col gap-10 py-20 xl:flex-row">
            <div className="flex-1">
              <section>
                <h3 className="text-[18px] font-bold text-primary md:text-[22px]">Chipotle Mexican Grill</h3>
                <p className="py-5 text-[13px] md:text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                </p>
              </section>
              <section>
                <h3 className="text-[18px] font-bold text-primary md:text-[22px]">Amenities</h3>
                <div className="flex flex-wrap items-center gap-5 py-5">
                  {Amenities.map((item, index) => (
                    <span key={index} className="group flex gap-2">
                      <span className="rounded-full bg-gray-200 p-2 duration-500 group-hover:bg-cyan group-hover:text-white"><IoCheckmarkSharp/></span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>  
              </section>
              <section>
                <h3 className="text-[18px] font-bold text-primary md:text-[22px]">Gallery</h3>
                <div className="flex items-center justify-between gap-5 py-5">
                  {[1, 2, 3].map((item, index) => (
                    <div key={index} className="h-[150px] w-[230px] bg-cyan"/>
                  ))}
                </div>  
              </section>
              <section>
                <h3 className="text-[18px] font-bold text-primary md:text-[22px]">Pricing</h3>
                <div className="flex flex-col items-center justify-between gap-5 py-5">
                  {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div key={index} className="md:[text-16px] flex w-full items-center justify-between bg-gray-100 p-3 text-[14px] font-bold shadow-[5px_5px_0px_0px_#dedede] duration-500 hover:shadow-[5px_5px_0px_0px_#0ec6c6]">
                      <span className="text-gray-500">Pizza</span>
                      <span className="text-primary">$15</span>
                    </div>
                  ))}
                </div>  
              </section>
            </div>
            <div className="flex w-full flex-col gap-10 md:w-[386px]">
              <div className="rounded border bg-gray-100 p-5">
                <h3 className="text-[17px] font-bold text-primary md:text-[20px]">Booking Online</h3>
                <button className="my-5 w-full bg-cyan p-4 text-center text-[15px] font-bold text-white shadow-[5px_5px_0px_0px_#82e0e0]">
                  Book now
                </button>
                <p className="text-[15px] text-gray-500">By Booking.com</p>
              </div>
              <div className="rounded border bg-gray-100 p-5">
                <h3 className="mb-5 text-[17px] font-bold text-primary md:text-[20px]">Contact Details</h3>
                <div className="flex items-center gap-3 border-b border-t py-2">
                  <TbWorld className="h-[20px] w-[20px]"/>
                  <span className="text-cyan">www.indice.com</span>
                </div>
                <div className="flex items-center gap-3 border-b border-t py-2">
                  <PiPhoneCallBold className="h-[20px] w-[20px]"/>
                  <span>(+212) 279-1456</span>
                </div>
                <div className="flex items-center gap-3 border-b border-t py-2">
                  <IoTrailSignOutline className="h-[20px] w-[20px]"/>
                  <span className="text-cyan">Get Directions</span>
                </div>
                <div className="flex items-center gap-3 border-b border-t py-2">
                  <GrLocation className="h-[20px] w-[20px]"/>
                  <span>New York, USA</span>
                </div>
              </div>
              <div className="rounded border bg-gray-100 p-5">
                <h3 className="text-[17px] font-bold text-primary md:text-[20px]">Hosted By</h3>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-cyan p-6"/>
                  <div className="my-5 flex flex-col justify-between">
                    <span className="text-[16px] font-semibold duration-500 hover:text-cyan">John Smith</span>
                    <span className="text-[14px] text-gray-500">20 Places Hosted</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t py-5">
                  <span className="cursor-pointer font-bold text-cyan duration-500 hover:text-primary">View Profile</span>
                  <span className="flex items-center gap-2">
                    <span className="cursor-pointer rounded bg-gray-200 p-3 duration-500 hover:bg-cyan hover:text-white"><FaFacebookF/></span>
                    <span className="cursor-pointer rounded bg-gray-200 p-3 duration-500 hover:bg-cyan hover:text-white"><FaTwitter/></span>
                    <span className="cursor-pointer rounded bg-gray-200 p-3 duration-500 hover:bg-cyan hover:text-white"><FaLinkedinIn/></span>
                    <span className="cursor-pointer rounded bg-gray-200 p-3 duration-500 hover:bg-cyan hover:text-white"><FaInstagram/></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Listing;
