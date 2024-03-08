import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";

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

        console.log("LOGIN", credentials);
        return credentials as any;
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
      authorize(credentials) {
        console.log("SIGN UP", credentials);
        return null;
      },
    }),
  ],
};
