import { object, string, number, bool } from "yup";

export const reviewSchema = object({
  email: string().required("Email is required"),
  name: string().required("Name is required"),
  review: string().required("Review is required"),
  saveData: bool(),
  cleanliness: number().required("Cleanliness is required"),
  accuracy: number().required("Accuracy is required"),
  location: number().required("Location is required"),
  checkIn: number().required("CheckIn is required"),
  communication: number().required("Communication is required"),
  value: number().required("Value is required"),
});