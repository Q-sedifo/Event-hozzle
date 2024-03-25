import { object, string } from "yup";

export const userValidation = object({
  name: string().required("Name is required").max(20, "Too long name"),
  email: string().required("Email is required").max(50, "Too long email"),
  phone: string().max(30, "Too long phone number"),
  address: string().max(50, "Too long address"),
  website: string().max(100, "Too long website url"),
  bio: string().max(300, "Too long bio"),
  facebookUrl: string().max(100, "Too long url"),
  twitterUrl: string().max(100, "Too long url"),
  linkedInUrl: string().max(100, "Too long url"),
  instagramUrl: string().max(100, "Too long url"),
});
