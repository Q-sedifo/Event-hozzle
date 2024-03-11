import { Formik } from "formik";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { signIn, SignInResponse } from "next-auth/react";
import { BaseError } from "@/shared/ui/errors/BaseError";
import { registerSchema } from "@/shared/validation/auth/registerValidation";
import { redirect } from "next/navigation";

const initialValues = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export const RegisterForm = () => {
  const handleSubmit = async (data: any, { setSubmitting }: any) => {
    data.redirect = false;
    setSubmitting(true);

    await signIn("sign-up", data).then(resp => {
      setSubmitting(false)
      redirect("/")
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
            {isSubmitting && <>Loading...</>}
            <div>
              <BaseError error={errors.username} />
              <BaseInput
                placeholder="Username"
                className="w-full rounded border p-3"
                onChange={(data) => setFieldValue("username", data)}
                value={values.username}
              />
            </div>
            {errors.email && touched.email && errors.email}
            <div>
              <BaseError error={errors.email} />
              <BaseInput
                placeholder="Email"
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
            <div>
              <BaseError error={errors.passwordConfirm} />
              <BaseInput
                placeholder="Confirm password"
                type="password"
                className="w-full rounded border p-3"
                onChange={(data) => setFieldValue("passwordConfirm", data)}
                value={values.passwordConfirm}
              />
            </div>
            <BaseButton type="submit" text="Register now" variant="default" disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </>
  );
};
