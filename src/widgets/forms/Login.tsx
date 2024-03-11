import React, { useState } from "react";
import { Formik } from "formik";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { signIn, SignInResponse } from "next-auth/react";
import { BaseError } from "@/shared/ui/errors/BaseError";
import { loginSchema } from "@/shared/validation/auth/loginValidation";
import { redirect } from "next/navigation";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = async (data: any, { setSubmitting }: any) => {
    data.redirect = false;
    setSubmitting(true);

    await signIn("credentials", data)
      .then((response) => {
        setSubmitting(false);
        console.log("LOGIN RESPONSE", response);
        redirect("/");
      })
      .catch((error) => {
        setError("Incorrect email or password");
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {({ values, errors, setFieldValue, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
            {isSubmitting && "Loading..."}
            <div>
              <BaseError error={errors.email} />
              <BaseInput
                placeholder="Username or email"
                className="w-full rounded border p-3"
                onChange={(data) => setFieldValue("email", data)}
                value={values.email}
              />
            </div>
            <div>
              <BaseError error={errors.password} />
              <BaseInput
                placeholder="Password"
                type="password"
                className="w-full rounded border p-3"
                onChange={(data) => setFieldValue("password", data)}
                value={values.password}
              />
            </div>
            <BaseError error={error} />
            <BaseButton
              text="Login now"
              type="submit"
              variant="default"
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </>
  );
};
