"use client";
import React from "react";
import { Formik } from "formik";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { BaseError } from "@/shared/ui/errors/BaseError";
import { passwordValidation } from "@/shared/validation/user/passwordValidation";

interface Props {
  onSubmit: any;
}

const initialValues = {
  oldPassword: "lololo",
  newPassword: "",
  confirmPassword: "",
};

export const PasswordForm = ({ onSubmit }: Props) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={passwordValidation}
        validateOnChange={false}
        onSubmit={onSubmit}
      >
        {({ values, errors, setFieldValue, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
            {isSubmitting && "Loading..."}
            <div className="w-full flex-1">
              <label className="mb-3 block text-[14px]">Password</label>
              <BaseError error={errors.oldPassword} />
              <BaseInput
                className="w-full rounded bg-gray-100 p-3 font-normal"
                onChange={(data) => setFieldValue("oldPassword", data)}
                value={values.oldPassword}
                type="password"
              />
            </div>
            <div className="w-full flex-1">
              <label className="mb-3 block text-[14px]">New Password</label>
              <BaseError error={errors.newPassword} />
              <BaseInput
                className="w-full rounded bg-gray-100 p-3 font-normal"
                onChange={(data) => setFieldValue("newPassword", data)}
                value={values.newPassword}
                type="password"
              />
            </div>
            <div className="w-full flex-1">
              <label className="mb-3 block text-[14px]">Confirm Password</label>
              <BaseError error={errors.confirmPassword} />
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
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </>
  );
};
