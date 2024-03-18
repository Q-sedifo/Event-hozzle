import { object, string, ref } from "yup";

export const passwordValidation = object({
  currentPassword: string().required("Password is required").max(20, "Too long password"),
  newPassword: string().required("New password is required").max(50, "Too long password"),
  confirmPassword: string().required("Please confirm your password")
    .oneOf([ref("password")], "Passwords must match")
});
