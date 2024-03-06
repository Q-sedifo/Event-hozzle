import Image from "next/image";
import { Container } from "@/shared/ui/Container";
import img from "@/shared/assets/images/banner-img1.png";
import { Search } from "@/widgets/Search";
import { Event } from "@/entities/Event/ui";

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
  { title: "Restaurant", icon: <GiKnifeFork className="w-[30px] h-[30px] "/>, placesCount: 16 },
  { title: "Hotel", icon: <RiHotelLine className="w-[30px] h-[30px]"/>, placesCount: 42 },
  { title: "Fitness", icon: <CiDumbbell className="w-[30px] h-[30px]"/>, placesCount: 11 },
  { title: "Shopping", icon: <BsShopWindow className="w-[30px] h-[30px]"/>, placesCount: 24 },
  { title: "Beauty & Spa", icon: <FaWandMagicSparkles className="w-[30px] h-[30px]"/>, placesCount: 8 },
  { title: "Events", icon: <BsCalendar2Day className="w-[30px] h-[30px]"/>, placesCount: 12 },
  { title: "Health Care", icon: <FaHeartPulse className="w-[30px] h-[30px]"/>, placesCount: 16 },
  { title: "Travel & Public", icon: <IoIosAirplane className="w-[30px] h-[30px]"/>, placesCount: 8 },
  { title: "Auto Insurance", icon: <FaCar className="w-[30px] h-[30px]"/>, placesCount: 10 },
  { title: "Attorneys", icon: <SlPeople className="w-[30px] h-[30px]"/>, placesCount: 25 },
  { title: "Plumbers", icon: <VscTools className="w-[30px] h-[30px]"/>, placesCount: 5 }
];

export default function Home() {
  return (
    <div>
      <div className="relative bg-gray-100 pt-[100px]">
        <Container>
          <div className="lg:flex">
            <div className="w-full overflow-x-auto lg:w-[70%] pr-2">
              <h1 className="flex w-full overflow-x-auto text-[40px] font-bold">
                <div className="w-full whitespace-nowrap">
                  Find Nearby <span className="text-cyan">Hotels</span>
                </div>
                <div className="w-full whitespace-nowrap">
                  Find Nearby <span className="text-cyan">Restaurants</span>
                </div>
                <div className="w-full whitespace-nowrap">
                  Find Nearby <span className="text-cyan">Beauty</span>
                </div>
                <div className="w-full whitespace-nowrap">
                  Find Nearby <span className="text-cyan">Fitness</span>
                </div>
                <div className="w-full whitespace-nowrap">
                  Find Nearby <span className="text-cyan">Shopping</span>
                </div>
              </h1>
              <p className="pt-5 text-center text-[18px] text-gray-600 lg:text-left">
                Expolore top-rated attractions, activities and more...
              </p>
              <Search/>
              <div className="flex flex-wrap gap-4 text-[15px] mt-5">
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
            <h2 className="w-fit text-[23px] text-primary font-bold md:text-[30px]">Popular Categories</h2>
          </div>
          <div className="flex justify-center mt-5">
            <p className="text-[13px] text-gray-600 md:text-[15px] max-w-[760px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>
          <div className="flex flex-wrap justify-around gap-5 pt-20">
            {Categories.map((item, index) => (
              <div key={index} className="min-w-[200px] rounded border border-cyan p-5 cursor-pointer group duration-500 shadow-[5px_5px_0px_0px_#82e0e0] hover:shadow-[5px_5px_0px_0px_#0ec6c6]">
                <div className="flex items-center justify-center">
                  <div className="rounded-full bg-slate-200 p-3 text-cyan group-hover:bg-cyan group-hover:text-white duration-500">
                    {item.icon}
                  </div>
                </div>
                <div className="text-center mt-4 text-[18px] font-bold">{item.title}</div>
                <div className="text-center text-gray-600 mt-1 font-medium">
                  {item.placesCount} Places
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center flex-col min-w-[200px] rounded border border-cyan bg-cyan p-5 cursor-pointer group shadow-[5px_5px_0px_0px_#0ec6c6]">
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-white p-3 text-cyan">
                  <HiDotsHorizontal className="w-[30px] h-[30px]"/>
                </div>
              </div>
              <div className="text-center mt-4 text-[18px] font-bold text-white">More Categoris</div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gray-100 py-[60px]">
        <Container>
          <div className="flex justify-center">
            <h2 className="w-fit text-[23px] text-primary font-bold md:text-[30px]">Most Visited Listings</h2>
          </div>
          <div className="flex justify-center mt-5">
            <p className="text-[13px] text-gray-600 md:text-[15px] max-w-[760px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-[60px]">
            {[1, 2, 3, 4, 5, 6].map((item, index) => <Event key={index}/>)}
          </div>
          <div className="flex items-center justify-center">
            <button className="py-3 px-7 border border-cyan text-[15px] text-primary font-semibold duration-500 shadow-[5px_5px_0px_0px_#82e0e0] hover:shadow-[5px_5px_0px_0px_#0ec6c6]">
              More Listings
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}
