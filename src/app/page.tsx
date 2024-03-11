"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Container } from "@/shared/ui/Container";
import img from "@/shared/assets/images/banner-img1.png";
import { Search } from "@/widgets/Search";
import { Listing } from "@/entities/Listing/ui";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { serverApi } from "@/shared/api/serverApi";

// Icons
import { GiKnifeFork } from "react-icons/gi";
import { RiHotelLine } from "react-icons/ri";
import { CiDumbbell } from "react-icons/ci";
import { BsShopWindow } from "react-icons/bs";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { BsCalendar2Day } from "react-icons/bs";
import { FaHeartPulse } from "react-icons/fa6";
import { IoIosAirplane } from "react-icons/io";
import { FaCar } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { VscTools } from "react-icons/vsc";
import { HiDotsHorizontal } from "react-icons/hi";

const PopularItems = [
  "Restaurants",
  "Events",
  "Clothing",
  "Bank",
  "Fitness",
  "Bookstore",
];

const Categories = [
  {
    title: "Restaurant",
    icon: <GiKnifeFork className="h-[30px] w-[30px] " />,
    placesCount: 16,
  },
  {
    title: "Hotel",
    icon: <RiHotelLine className="h-[30px] w-[30px]" />,
    placesCount: 42,
  },
  {
    title: "Fitness",
    icon: <CiDumbbell className="h-[30px] w-[30px]" />,
    placesCount: 11,
  },
  {
    title: "Shopping",
    icon: <BsShopWindow className="h-[30px] w-[30px]" />,
    placesCount: 24,
  },
  {
    title: "Beauty & Spa",
    icon: <FaWandMagicSparkles className="h-[30px] w-[30px]" />,
    placesCount: 8,
  },
  {
    title: "Events",
    icon: <BsCalendar2Day className="h-[30px] w-[30px]" />,
    placesCount: 12,
  },
  {
    title: "Health Care",
    icon: <FaHeartPulse className="h-[30px] w-[30px]" />,
    placesCount: 16,
  },
  {
    title: "Travel & Public",
    icon: <IoIosAirplane className="h-[30px] w-[30px]" />,
    placesCount: 8,
  },
  {
    title: "Auto Insurance",
    icon: <FaCar className="h-[30px] w-[30px]" />,
    placesCount: 10,
  },
  {
    title: "Attorneys",
    icon: <SlPeople className="h-[30px] w-[30px]" />,
    placesCount: 25,
  },
  {
    title: "Plumbers",
    icon: <VscTools className="h-[30px] w-[30px]" />,
    placesCount: 5,
  },
];

export default function Home() {

  React.useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const resp = await serverApi.get("/users/getMe")
      console.log("RESP", resp)
    } catch(error) {
      console.log("RESP ERROR", error)
    }
  }

  return (
    <div>
      <div className="relative bg-gray-100 pt-[100px]">
        <Container>
          <div className="lg:flex">
            <div className="w-full pr-2 lg:w-[70%]">
              <div className="w-full overflow-x-auto">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={50}
                  className="flex w-full flex-1 text-[40px] font-bold"
                >
                  <SwiperSlide>
                    <div className="w-full whitespace-nowrap">
                      Find Nearby <span className="text-cyan">Hotels</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full whitespace-nowrap">
                      Find Nearby <span className="text-cyan">Restaurants</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full whitespace-nowrap">
                      Find Nearby <span className="text-cyan">Beauty</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full whitespace-nowrap">
                      Find Nearby <span className="text-cyan">Fitness</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full whitespace-nowrap">
                      Find Nearby <span className="text-cyan">Shopping</span>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <p className="pt-5 text-center text-[18px] text-gray-600 lg:text-left">
                Expolore top-rated attractions, activities and more...
              </p>
              <Search />
              <div className="mt-5 flex flex-wrap gap-4 text-[15px]">
                Popular:
                {PopularItems.map((item, index) => (
                  <span
                    key={index}
                    className="font-semibold text-primary underline"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-1 justify-center">
              <Image src={img} alt="Image" />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white py-[60px]">
        <Container>
          <div className="flex justify-center">
            <h2 className="w-fit text-[23px] font-bold text-primary md:text-[30px]">
              Popular Categories
            </h2>
          </div>
          <div className="mt-5 flex justify-center">
            <p className="max-w-[760px] text-center text-[13px] text-gray-600 md:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>
          <div className="flex flex-wrap justify-around gap-5 pt-20">
            {Categories.map((item, index) => (
              <div
                key={index}
                className="group min-w-[200px] cursor-pointer rounded border border-cyan p-5 shadow-[5px_5px_0px_0px_#82e0e0] duration-500 hover:shadow-[5px_5px_0px_0px_#0ec6c6]"
              >
                <div className="flex items-center justify-center">
                  <div className="rounded-full bg-slate-200 p-3 text-cyan duration-500 group-hover:bg-cyan group-hover:text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="mt-4 text-center text-[18px] font-bold">
                  {item.title}
                </div>
                <div className="mt-1 text-center font-medium text-gray-600">
                  {item.placesCount} Places
                </div>
              </div>
            ))}
            <div className="group flex min-w-[200px] cursor-pointer flex-col items-center justify-center rounded border border-cyan bg-cyan p-5 shadow-[5px_5px_0px_0px_#0ec6c6]">
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-white p-3 text-cyan">
                  <HiDotsHorizontal className="h-[30px] w-[30px]" />
                </div>
              </div>
              <div className="mt-4 text-center text-[18px] font-bold text-white">
                More Categoris
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gray-100 py-[60px]">
        <Container>
          <div className="flex justify-center">
            <h2 className="w-fit text-[23px] font-bold text-primary md:text-[30px]">
              Most Visited Listings
            </h2>
          </div>
          <div className="mt-5 flex justify-center">
            <p className="max-w-[760px] text-center text-[13px] text-gray-600 md:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 py-[60px] md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Listing key={index} />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button className="border border-cyan px-7 py-3 text-[15px] font-semibold text-primary shadow-[5px_5px_0px_0px_#82e0e0] duration-500 hover:shadow-[5px_5px_0px_0px_#0ec6c6]">
              More Listings
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}
