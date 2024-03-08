import { object, string } from "yup";

export const loginSchema = object({
  email: string().required("Email is required"),
  password: string().required("Password is required"),
});
