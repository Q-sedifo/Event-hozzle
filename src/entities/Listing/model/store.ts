import { create } from "zustand";
import { serverApi } from "@/shared/api/serverApi";

interface Store {
  listings: any;
  getListings: () => void;
  addListing: (data: any) => void;
}

export const useListingsStore = create<Store>((set, get) => ({
  listings: [],
  getListings: async () => {
    try {
      const response = await fetch("http://localhost:3000/api/listings", {
        method: "GET",
        mode: "no-cors",
      });

      console.log("LISTINGS RESPONSE", await response.json());
    } catch (error) {
      console.log("ERROR FETCHING LISTINGS", error);
    }
  },
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
        // "http://192.168.3.161/api/listings/create/",
        "https://655caf6425b76d9884fdc8df.mockapi.io/api/Users",
        // {
        //   method: "GET",
        //   mode: "no-cors",
        //   body: formData,
        // },
      );

      console.log("LISTING RESPONSE", await response.json());
    } catch (error) {
      console.log("POST LISTING ERROR", error);
    }
  },
}));
