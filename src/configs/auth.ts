import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";

export const authConfig: AuthOptions = {
  pages: {
    signIn: "/",
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
          label: "email:",
          type: "text",
        },
        password: {
          label: "password:",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        console.log("LOGIN", credentials);
        return credentials as any;
      },
    }),
  ],
};
