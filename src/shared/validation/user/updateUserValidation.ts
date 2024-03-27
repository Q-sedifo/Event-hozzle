import { object, mixed, string } from "yup";

export const userValidation = object({
  image: mixed().required("Please upload image"),
  username: string().required("Name is required").max(20, "Too long name"),
  email: string().required("Email is required").max(50, "Too long email"),
  phone: string().max(30, "Too long phone number"),
  address: string().max(50, "Too long address"),
  website: string().max(100, "Too long website url"),
  bio: string().max(300, "Too long bio"),
  facebook_url: string().max(100, "Too long url"),
  twitter_url: string().max(100, "Too long url"),
  linkedin_url: string().max(100, "Too long url"),
  instagram_url: string().max(100, "Too long url"),
});
