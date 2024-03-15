"use client"
import React from "react";
import { Formik } from "formik";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { BaseError } from "@/shared/ui/errors/BaseError";

const initialValues = {
  currentPassword: "lololo",
  newPassword: "",
  confirmPassword: ""
};

export const PasswordForm = () => {
  const handleSubmit = (data: any, { setSubmitting }: any) => {
    console.log("PASSWORD DATA: ", data)
    setSubmitting(true);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {({ values, errors, setFieldValue, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
            {isSubmitting && "Loading..."}
            <div className="w-full flex-1">
              <BaseError error={errors.currentPassword} />
              <label className="mb-3 block text-[14px]">Password</label>
              <BaseInput
                className="w-full rounded bg-gray-100 p-3 font-normal"
                onChange={(data) => setFieldValue("currentPassword", data)}
                value={values.currentPassword}
                type="password"
              />
            </div>
            <div className="w-full flex-1">
              <BaseError error={errors.newPassword} />
              <label className="mb-3 block text-[14px]">New Password</label>
              <BaseInput
                className="w-full rounded bg-gray-100 p-3 font-normal"
                onChange={(data) => setFieldValue("newPassword", data)}
                value={values.newPassword}
                type="password"
              />
            </div>
            <div className="w-full flex-1">
              <BaseError error={errors.confirmPassword} />
              <label className="mb-3 block text-[14px]">Confirm Password</label>
              <BaseInput
                className="w-full rounded bg-gray-100 p-3 font-normal"
                onChange={(data) => setFieldValue("confirmPassword", data)}
                value={values.confirmPassword}
                type="password"
              />
            </div>
            <BaseButton 
              text="Change Password"
              variant="default" 
              type="submit"
              className="!w-full hover:bg-blue-800"
            />
          </form>
        )}
      </Formik>
    </>
  );
};
