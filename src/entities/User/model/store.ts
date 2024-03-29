import { create } from "zustand";
import { serverApi } from "@/shared/api/serverApi";

interface Store {
  user: any;
  updateUser: (values: any) => Promise<any>;
  changePassword: (values: any) => Promise<any>;
  getMe: () => void;
}

export const useUserStore = create<Store>((set, get) => ({
  user: null,
  updateUser: async (user) => {
    try {
      const formData = new FormData();

      for (const key in user) {
        if (Object.hasOwn(user, key)) {
          if (key === "image") {
            formData.append("avatar", user[key]);
          } else {
            formData.append(key, user[key]);
          }
        }
      }

      const response = await serverApi.put("/users/update/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response;
    } catch (error) {
      console.log("UPDATE USER ERROR", error);
    }
  },
  changePassword: async (values) => {
    try {
      const response = await serverApi.patch("/users/changePassword", values);
      return response;
    } catch (error) {
      console.log("ERROR CHANGING PASSWORD", error);
    }
  },
  getMe: async () => {
    try {
      const response = await serverApi.get(`/users/getMe`);
      const user = response.data;
      console.log("USER RESPONSE", user);
      // const { avatar, ...filteredUser } = user

      set((state) => ({ ...state, user: user }));
    } catch (error) {
      console.log("ERROR FETCHING USER", error);
    }
  },
}));
