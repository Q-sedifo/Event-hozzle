import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import { cookies } from "next/headers";
import { serverApi } from "@/shared/api/serverApi";

export const authConfig: AuthOptions = {
  pages: {
    signIn: "/",
    newUser: "/",
  },
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        const resp = await serverApi.post("/auth/login", credentials)

        console.log("LOGIN RESP", resp);
        return resp as any;
        // return credentials as any;
      },
    }),
    Credentials({
      name: "sign-up",
      id: "sign-up",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "your-email",
        },
        username: {
          label: "Your name:",
          type: "text",
          placeholder: "Name",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
        passwordConfirm: {
          label: "Confirm password:",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async (credentials) => {
        try {
          const responseReg = await serverApi.post("/users/create", credentials)
          const userData = responseReg.data

          const responseLog = await serverApi.post("/auth/login", responseReg.data)
          const tokens = responseLog.data

          cookies().set("_auth_access_token", tokens.access_token);
          cookies().set("_auth_refresh_token", tokens.refresh_token);
          console.log("REG RESP", userData, tokens)
          return userData
        } catch (error) {
          console.log("REGISTER ERROR", error)
          return false as any
        }
      },
    }),
  ],
};
