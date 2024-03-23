"use client"
import { Container } from "@/shared/ui/Container";
import { Search } from "@/widgets/Search";
import { Listing } from "@/entities/Listing/ui";
import { BaseDropdown } from "@/shared/ui/dropdowns/BaseDropdown";
import { Pagination } from "@/shared/ui/Pagination";

const filterItems = [
  { title: "Name", key: "name" },
  { title: "Date", key: "date" },
];

const Listings = () => {
  return (
    <div>
      <div className="bg-gray-100 py-[100px]">
        <Container>
          <div className="flex flex-col items-center">
            <h1 className="text-[40px] font-bold text-primary">
              Find Popular Places
            </h1>
            <Search />
          </div>
        </Container>
      </div>
      <div className="py-[100px]">
        <Container>
          <div>
            <div className="flex flex-col items-center justify-between py-4 text-[15px] md:flex-row">
              <div>
                <span>
                  We found <span className="font-semibold">9</span> listings
                  available for you
                </span>
              </div>
              <span className="flex w-[40%] min-w-fit items-center justify-end gap-2">
                <span className="whitespace-nowrap">Sort By</span>
                <BaseDropdown
                  placeholder="Recommended"
                  items={filterItems}
                  className="!w-fit font-semibold"
                  onSelect={(data) => ""}
                />
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <Listing key={index} />
              ))}
            </div>
            <div className="mt-10 flex items-center justify-center">
              <Pagination pagesCount={5} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Listings;
