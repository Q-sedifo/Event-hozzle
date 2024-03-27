import { create } from "zustand";
import { serverApi } from "@/shared/api/serverApi";

interface Store {
  user: any;
  updateUser: (values: any) => Promise<any>;
  getMe: () => void;
}

export const useUserStore = create<Store>((set, get) => ({
  user: null,
  updateUser: async (user) => {
    console.log("USER", user);

    try {
      const formData = new FormData();

      formData.append("avatar", user.image);

      for (const key in user) {
        if (Object.hasOwn(user, key)) {
          formData.append(key, user[key]);
        }
      }

      const response = await serverApi.put("/users/update/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response
    } catch (error) {
      console.log("UPDATE USER ERROR", error);
    }
  },
  getMe: async () => {
    try {
      const response = await serverApi.get(`/users/getMe`);
      console.log("USER RESPONSE", response);

      set((state) => ({ ...state, user: response.data }))
    } catch (error) {
      console.log("ERROR FETCHING USER", error)
    }
  }
}));
