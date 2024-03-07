import { Formik } from "formik";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";

const initialValues = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export const RegisterForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log("Register", values)}
      >
        {({ values, errors, touched, setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
            {errors.username && touched.username && errors.username}
            <BaseInput
              placeholder="Username"
              className="w-full rounded border p-3"
              onChange={(data) => setFieldValue("username", data)}
              value={values.username}
            />
            {errors.email && touched.email && errors.email}
            <BaseInput
              placeholder="Email"
              className="w-full rounded border p-3"
              onChange={(data) => setFieldValue("email", data)}
              value={values.email}
            />
            {errors.password && touched.password && errors.password}
            <BaseInput
              placeholder="Password"
              type="password"
              className="w-full rounded border p-3"
              onChange={(data) => setFieldValue("password", data)}
              value={values.password}
            />
            {errors.passwordConfirm &&
              touched.passwordConfirm &&
              errors.passwordConfirm}
            <BaseInput
              placeholder="Confirm password"
              type="password"
              className="w-full rounded border p-3"
              onChange={(data) => setFieldValue("passwordConfirm", data)}
              value={values.passwordConfirm}
            />
            {errors.password && touched.password && errors.password}
            <BaseButton type="submit" text="Register now" />
          </form>
        )}
      </Formik>
    </>
  );
};
