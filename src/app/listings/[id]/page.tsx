"use client";
import React, { useEffect } from "react";
import { useListingsStore } from "@/entities/Listing/model/store";
import { Container } from "@/shared/ui/Container";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { Estimate } from "@/shared/ui/inputs/Estimate";
import { Progress } from "./ui/Progress";
import { Comment } from "./ui/Comment";
import { CommentForm } from "./ui/CommentForm";
import Image from "next/image";

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

const Amenities = [
  "Parking Street",
  "Vegan Options",
  "Kids Activities Nearby",
  "Accepts Apple Pay",
  "Accepts Google Pay",
  "Wheelchair Accessible",
];

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ListingPage = ({ params }: { params: { id: string } }) => {
  const { listing, getListing } = useListingsStore();

  useEffect(() => {
    getListing(params?.id);
  }, [params?.id, getListing]);

  const dayOfWeek = new Date().getDay();
  const dayOfWeekName = daysOfWeek[dayOfWeek].toLocaleLowerCase();

  return listing ? (
    <div>
      <div
        className="relative bg-gray-200 bg-cover bg-center"
        style={{
          backgroundImage: `url("http://localhost/api/${listing?.images?.[0]}"`,
        }}
      >
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
                {listing?.title}
              </h2>
              <div className="flex items-center gap-2">
                <Estimate />
                <span className="text-[15px] font-bold text-cyan">(45)</span>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                {JSON.parse(listing?.phone) && (
                  <BaseButton
                    text="(+212) 279-1456"
                    type="button"
                    variant="rounded"
                    className="w-full !bg-cyan text-[18px] !font-bold !text-white md:w-fit"
                    icon={<PiPhoneCallBold className="h-[25px] w-[25px]" />}
                  />
                )}
                <span className="flex items-center gap-2">
                  <MdOutlineAccessTime className="h-[48px] w-[48px] text-gray-300" />
                  <span className="flex flex-col justify-between">
                    <span className="text-[15px] font-bold text-white md:text-[17px]">
                      Currently Open
                    </span>
                    <span className="text-[13px] text-cyan md:text-[15px]">
                      {new Date(listing[dayOfWeekName + "_opening"]).getHours()}
                      :00 AM -
                      {new Date(listing[dayOfWeekName + "_closing"]).getHours()}
                      :00 PM
                    </span>
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <GrLocation className="h-[48px] w-[48px] text-gray-300" />
                  <span className="flex flex-col justify-between">
                    <span className="text-[17px] font-bold text-white">
                      Location
                    </span>
                    <span className="text-[15px] text-cyan">
                      {listing?.address}
                    </span>
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
                <h3 className="text-[18px] font-bold text-primary md:text-[22px]">
                  {listing?.title}
                </h3>
                <p className="py-5 text-[13px] md:text-[15px]">
                  {listing?.description}
                </p>
              </section>
              <section>
                <h3 className="text-[18px] font-bold text-primary md:text-[22px]">
                  Amenities
                </h3>
                <div className="flex flex-wrap items-center gap-5 py-5">
                  {Amenities.map((item, index) => (
                    <span key={index} className="group flex items-center gap-2">
                      <span className="rounded-full bg-gray-200 p-2 duration-500 group-hover:bg-cyan group-hover:text-white">
                        <IoCheckmarkSharp />
                      </span>
                      <span className="font-medium">{item}</span>
                    </span>
                  ))}
                </div>
              </section>
              <section>
                <h3 className="text-[18px] font-bold text-primary md:text-[22px]">
                  Gallery
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-5 py-5 md:justify-between">
                  {listing?.images?.map((image: string, index: number) => (
                    <Image
                      key={index}
                      src={`http://localhost/api/${image}`}
                      className="h-[150px] w-[230px] min-w-[230px]"
                      alt="Image"
                      width={100}
                      height={100}
                    />
                  ))}
                </div>
              </section>
              <section>
                <h3 className="text-[18px] font-bold text-primary md:text-[22px]">
                  Pricing
                </h3>
                <div className="flex flex-col items-center justify-between gap-5 py-5">
                  {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div
                      key={index}
                      className="md:[text-16px] flex w-full items-center justify-between bg-gray-100 p-4 text-[14px] font-bold shadow-[5px_5px_0px_0px_#dedede] duration-500 hover:shadow-[5px_5px_0px_0px_#0ec6c6]"
                    >
                      <span className="text-gray-500">Pizza</span>
                      <span className="text-primary">$15</span>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h3 className="mb-5 text-[18px] font-bold text-primary md:text-[22px]">
                  Review
                </h3>
                <div className="bg-gray-100 p-[30px] shadow-[5px_5px_0px_0px_#dedede]">
                  <h2 className="flex items-center gap-2 text-[15px] font-semibold md:text-[20px]">
                    <Estimate />
                    5.0 <span className="text-cyan">(5 reviews)</span>
                  </h2>
                  <div className="grid grid-cols-1 gap-x-10 gap-y-3 pt-5 md:grid-cols-2">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                      <div
                        key={index}
                        className="flex w-full items-center justify-between text-[14px] font-semibold"
                      >
                        TEST
                        <span className="flex w-full items-center justify-end gap-4">
                          <Progress progress={80} />
                          4.0
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-10 flex items-center bg-gray-100 p-[30px] shadow-[5px_5px_0px_0px_#dedede]">
                  <div className="flex flex-1 flex-col gap-5">
                    <h4 className="text-[17px] font-semibold">
                      Tell people what you think.
                    </h4>
                    <span className="text-[13px] md:text-[15px]">
                      Help others by sharing your experience with this business.
                    </span>
                  </div>
                  <button className="my-5 w-fit bg-cyan px-8 py-4 text-center text-[15px] font-bold text-white shadow-[5px_5px_0px_0px_#82e0e0] duration-500 hover:shadow-[5px_5px_0px_0px_#000000]">
                    Write A Review
                  </button>
                </div>
                <div className="mt-10 flex flex-col gap-5">
                  {[1, 2, 3].map((item, index) => (
                    <Comment
                      key={index}
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis."
                      estimate="4.5"
                    />
                  ))}
                </div>
                <div className="mt-10 bg-gray-100 p-[30px] shadow-[5px_5px_0px_0px_#dedede]">
                  <h3 className="mb-5 text-[18px] font-bold text-primary md:text-[22px]">
                    Add A Review
                  </h3>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <CommentForm />
                </div>
              </section>
              <section>
                <h3 className="mt-5 text-[18px] font-bold text-primary md:text-[22px]">
                  Other Nearby Services
                </h3>
                <div className="flex flex-col items-center gap-10 py-5 md:flex-row">
                  {/* {[1, 2].map((item, index) => (
                    <Listing key={index} />
                  ))} */}
                </div>
              </section>
            </div>
            <div className="flex w-full flex-col gap-10 md:w-[386px]">
              <div className="rounded border bg-gray-100 p-5">
                <h3 className="text-[17px] font-bold text-primary md:text-[20px]">
                  Booking Online
                </h3>
                <button className="my-5 w-full bg-cyan p-4 text-center text-[15px] font-bold text-white shadow-[5px_5px_0px_0px_#82e0e0] duration-500 hover:shadow-[5px_5px_0px_0px_#000000]">
                  Book now
                </button>
                <p className="text-[15px] text-gray-500">By Booking.com</p>
              </div>
              <div className="rounded border bg-gray-100 p-5">
                <h3 className="mb-5 text-[17px] font-bold text-primary md:text-[20px]">
                  Contact Details
                </h3>
                <div className="flex items-center gap-3 border-b border-t py-2">
                  <TbWorld className="h-[20px] w-[20px]" />
                  <span className="text-cyan">{JSON.parse(listing?.website) || "-"}</span>
                </div>
                <div className="flex items-center gap-3 border-b border-t py-2">
                  <PiPhoneCallBold className="h-[20px] w-[20px]" />
                  <span>{JSON.parse(listing?.phone) || "-"}</span>
                </div>
                <div className="flex items-center gap-3 border-b border-t py-2">
                  <IoTrailSignOutline className="h-[20px] w-[20px]" />
                  <span className="text-cyan">Get Directions</span>
                </div>
                <div className="flex items-center gap-3 border-b border-t py-2">
                  <GrLocation className="h-[20px] w-[20px]" />
                  <span>{listing?.address}</span>
                </div>
              </div>
              <div className="rounded border bg-gray-100 p-5">
                <h3 className="text-[17px] font-bold text-primary md:text-[20px]">
                  Hosted By
                </h3>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-cyan p-6" />
                  <div className="my-5 flex flex-col justify-between">
                    <span className="text-[16px] font-semibold duration-500 hover:text-cyan">
                      John Smith
                    </span>
                    <span className="text-[14px] text-gray-500">
                      20 Places Hosted
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t py-5">
                  <span className="cursor-pointer font-bold text-cyan duration-500 hover:text-primary">
                    View Profile
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="cursor-pointer rounded bg-gray-200 p-3 duration-500 hover:bg-cyan hover:text-white">
                      <FaFacebookF />
                    </span>
                    <span className="cursor-pointer rounded bg-gray-200 p-3 duration-500 hover:bg-cyan hover:text-white">
                      <FaTwitter />
                    </span>
                    <span className="cursor-pointer rounded bg-gray-200 p-3 duration-500 hover:bg-cyan hover:text-white">
                      <FaLinkedinIn />
                    </span>
                    <span className="cursor-pointer rounded bg-gray-200 p-3 duration-500 hover:bg-cyan hover:text-white">
                      <FaInstagram />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ListingPage;
