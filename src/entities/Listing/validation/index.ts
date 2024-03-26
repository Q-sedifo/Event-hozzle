import { object, array, mixed, string, boolean } from "yup";

export const listingValidation = object({
  title: string().required("Title is required").max(50, "Too long title"),
  category: string().required("Category is required"),
  keywords: string()
    .required("Keywords field is required")
    .max(100, "Too long value"),
  city: string().required("City is required"),
  address: string().required("Address is required").max(30, "Too long address"),
  state: string().required("State is required").max(30, "Too long value"),
  zip_code: string().required("Zip code is required").min(5, "Zip code must contain 5 characters").max(5, "Zip code must contain 5 characters"),
  description: string()
    .required("Description is required")
    .max(500, "Too long description"),
  email: string().email("Invalid email").max(40, "Too long email"),
  website: string().max(100, "Too long value"),
  phone: string().max(20, "Too long value"),
  urls: object({
    facebook_url: string().max(50, "Too long url"),
    twitter_url: string().max(50, "Too long url"),
    linkedin_url: string().max(50, "Too long url"),
  }),
  booking_form: boolean(),
  price_range: boolean(),
  instagram: boolean(),
  free_wifi: boolean(),
  parking: boolean(),
  fitnes_center: boolean(),
  non_smoking_rooms: boolean(),
  airoport_shuttle: boolean(),
  air_conditioning: boolean(),
  events: boolean(),
  friendly_workspace: boolean(),
  price: string().required("Price is required").max(20, "Invalid price"),
  images: array().of(mixed()).min(1, "Please upload image"),
  monday: object().shape({
    opening: string().required("Please select date of opening"), 
    closing: string().required("Please select date of closing"), 
  }),
  tuesday: object().shape({
    opening: string().required("Please select date of opening"), 
    closing: string().required("Please select date of closing"), 
  }),
  wednesday: object().shape({
    opening: string().required("Please select date of opening"), 
    closing: string().required("Please select date of closing"), 
  }),
  thursday: object().shape({
    opening: string().required("Please select date of opening"), 
    closing: string().required("Please select date of closing"), 
  }),
  friday: object().shape({
    opening: string().required("Please select date of opening"), 
    closing: string().required("Please select date of closing"), 
  }),
  saturday: object().shape({
    opening: string().required("Please select date of opening"), 
    closing: string().required("Please select date of closing"), 
  }),
  sunday: object().shape({
    opening: string().required("Please select date of opening"), 
    closing: string().required("Please select date of closing"), 
  }),
});
