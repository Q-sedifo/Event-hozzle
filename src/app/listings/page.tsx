"use client";
import React, { useEffect } from "react";
import { Container } from "@/shared/ui/Container";
import { Search } from "@/widgets/Search";
import { Listing } from "@/entities/Listing/ui";
import { BaseDropdown } from "@/shared/ui/dropdowns/BaseDropdown";
import { Pagination } from "@/shared/ui/Pagination";
import { useListingsStore } from "@/entities/Listing/model/store";
import Link from "next/link";

const filterItems = [
  { title: "Name", key: "name" },
  { title: "Date", key: "date" },
];

const Listings = () => {
  const { listings, getListings } = useListingsStore();

  useEffect(() => {
    getListings();
  }, [getListings])

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
              {!listings && (
                <div>No listings</div>
              )}
              {listings?.map((item: any, index: number) => (
                <Link href={`/listings/${item.id}`}>
                  <Listing item={item} key={item.id + index} />
                </Link>
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
