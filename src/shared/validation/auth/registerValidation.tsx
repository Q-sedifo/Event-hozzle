import { object, string, ref } from "yup";

export const registerSchema = object({
  username: string().required("User name is required").max(16, "Too long name"),
  email: string().required("Email is required"),
  password: string().required("Password is required").min(8, "Password must contain at least 8 characters"),
  passwordConfirm: string().oneOf([ref("password")], "Passwords must match"),
});
