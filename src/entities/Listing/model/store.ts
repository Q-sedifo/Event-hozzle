import { create } from "zustand";
import { serverApi } from "@/shared/api/serverApi";
import axios from "axios";

interface Store {
  listings: any;
  addListing: (data: any) => void;
}

export const useListingsStore = create<Store>((set, get) => ({
  listings: [],
  addListing: async (listing) => {
    console.log("LISTING", listing);
    try {
      listing.keywords = listing.keywords.split(", ");

      const formData = new FormData();

      listing.images.forEach((image: File, index: number) => {
        formData.append(`image[${index}]`, image);
      });

      // for (const key in listing) {
      //   if (listing.hasOwnProperty(key)) {
      //     formData.append(key, listing[key]);
      //   }
      // }

      // const response = await serverApi.post("/listings/create/", formData)
      const response = await fetch(
        "http://192.168.3.161/api/listings/create/",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        },
      );

      console.log("LISTING RESPONSE", response);
    } catch (error) {
      console.log("POST LISTING ERROR", error);
    }
  },
}));
