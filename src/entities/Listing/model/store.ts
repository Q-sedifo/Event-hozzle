import { create } from "zustand";
import { serverApi } from "@/shared/api/serverApi";
import { AxiosResponse } from "axios";

interface Store {
  listings: any;
  listing: any;
  getListings: () => void;
  getListing: (id: string) => void;
  addListing: (data: any) => Promise<any>;
}

export const useListingsStore = create<Store>((set, get) => ({
  listings: [],
  listing: null,
  getListings: async () => {
    try {
      const response = await serverApi.get("/listings");
      const listings = response.data
      console.log("LISTINGS RESPONSE", listings);

      set((state) => ({ ...state, listings: listings }))
    } catch (error) {
      console.log("ERROR FETCHING LISTINGS", error);
    }
  },
  getListing: async (id) => {
    try {
      const response = await serverApi.get(`/listings/${id}`);
      const listing = response.data
      console.log("LISTINGS RESPONSE", listing);

      set((state) => ({ ...state, listing: listing }))
    } catch (error) {
      console.log("ERROR FETCHING LISTING", error);
    }
  },
  addListing: async (listing) => {
    console.log("LISTING", listing);

    try {
      const formData = new FormData();
      listing.type = listing.category;

      listing.images.forEach((image: File, index: number) => {
        formData.append(`image[${index}]`, image);
      });

      for (const key in listing) {
        if (Object.hasOwn(listing, key)) {
          if (typeof listing[key] === "string") {
            formData.append(key, listing[key] || null);
          }
          else {
            typeof listing[key] !== "object" && formData.append(key, listing[key]);
          }
        }
      }

      const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
      for (const key in listing) {
        if (Object.hasOwn(listing, key) && weekDays.includes(key)) {
          formData.append(`${key}.opening`, listing[key].opening);
          formData.append(`${key}.closing`, listing[key].closing);
        }
      }

      const options = ["instagram", "price_range", "booking_form"]
      for (const key in listing) {
        if (Object.hasOwn(listing, key) && options.includes(key)) {
          formData.append(`options.${key}`, listing[key]);
        }
      }

      for (const key in listing.urls) {
        if (Object.hasOwn(listing.urls, key)) {
          formData.append(`urls.${key}`, listing.urls[key] || null);
        }
      }

      const response = await serverApi.post("/listings/create/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("LISTING RESPONSE", response);
      return response
    } catch (error) {
      console.log("POST LISTING ERROR", error);
    }
  },
}));
