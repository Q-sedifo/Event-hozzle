import Image from "next/image";
import { Container } from "@/shared/ui/Container";
import img from "@/shared/assets/images/banner-img1.png";

const PopularItems = [
  "Restaurants",
  "Events",
  "Clothing",
  "Bank",
  "Fitness",
  "Bookstore",
];

export default function Home() {
  return (
    <div className="h-[150vh]">
      <div className="relative bg-gray-100 px-[60px] pt-[100px] xl:px-0">
        <Container>
          <div className="lg:flex">
            <div className="w-full overflow-x-auto lg:w-[70%]">
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
              <p className="pt-5 text-center text-[15px] text-gray-600 lg:text-left">
                Expolore top-rated attractions, activities and more...
              </p>
              <div className="flex gap-4 text-[15px]">
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
    </div>
  );
}
