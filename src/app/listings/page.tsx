import { Container } from "@/shared/ui/Container";
import { Search } from "@/widgets/Search";
import { Listing } from "@/entities/Listing/ui";
import { BaseDropdown } from "@/shared/ui/dropdowns/BaseDropdown";
import { Pagination } from "@/shared/ui/Pagination";

const filterItems = [
  { title: "Name", key: "name" },
  { title: "Date", key: "date" },
]

const Listings = () => {
  return (
    <div>
      <div className="bg-gray-100 py-[100px]">
        <Container>
          <div className="flex flex-col items-center">
            <h1 className="text-primary font-bold text-[40px]">
              Find Popular Places
            </h1>
            <Search/>
          </div>
        </Container>
      </div>
      <div className="py-[100px]">
        <Container>
          <div>
            <div className="flex flex-col items-center justify-between text-[15px] py-4 md:flex-row">
              <div>
                <span>We found <span className="font-semibold">9</span> listings available for you</span>
              </div>
              <span className="flex min-w-fit w-[40%] items-center justify-end gap-2">
                <span className="whitespace-nowrap">Sort By</span>
                <BaseDropdown
                  placeholder="Recommended"
                  items={filterItems}
                  className="!w-fit font-semibold"
                />
              </span>
            </div>
            <div className="flex justify-between gap-5 flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <Listing key={index}/>
              ))}
            </div>
            <div className="flex items-center justify-center mt-10">
              <Pagination pagesCount={5}/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Listings;