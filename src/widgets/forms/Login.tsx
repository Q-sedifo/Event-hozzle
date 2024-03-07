import { Formik } from "formik";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { signIn } from "next-auth/react";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const handleSubmit = async (data: any) => {
    await signIn("credentials", data);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, errors, setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
            <BaseInput
              placeholder="Username or email"
              className="w-full rounded border p-3"
              onChange={(data) => setFieldValue("email", data)}
              value={values.email}
            />
            {errors.email && errors.email}
            <BaseInput
              placeholder="Password"
              type="password"
              className="w-full rounded border p-3"
              onChange={(data) => setFieldValue("password", data)}
              value={values.password}
            />
            {errors.password && errors.password}
            <BaseButton text="Login now" type="submit" />
          </form>
        )}
      </Formik>
    </>
  );
};
