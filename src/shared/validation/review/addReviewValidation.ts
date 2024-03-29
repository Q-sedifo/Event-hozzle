import { object, string, number, bool } from "yup";

export const reviewSchema = object({
  text: string().required("Review is required"),
  saveData: bool(),
  cleanlines: number().required("Cleanliness is required"),
  accuracy: number().required("Accuracy is required"),
  location: number().required("Location is required"),
  check_in: number().required("CheckIn is required"),
  communication: number().required("Communication is required"),
  value: number().required("Value is required"),
});
