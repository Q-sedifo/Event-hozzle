"use client";
import React, { useState, useEffect } from "react";
import { NavInfo } from "@/shared/ui/NavInfo";
import { Box } from "@/app/dashboard/ui/Box";
import { UserForm } from "./(userForm)";
import { PasswordForm } from "./(passwordForm)";
import { useUserStore } from "@/entities/User/model/store";
import { formInitialValues } from "./(userForm)";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, update } = useSession();
  const [success, setSuccess] = useState<boolean>(false);
  const [passwordConfirmationSuccess, setPasswordConfirmationSuccess] =
    useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [passwordConfirmationError, setPasswordConfirmationError] = useState<
    null | string
  >(null);
  const { user, getMe, updateUser, changePassword } = useUserStore();

  useEffect(() => {
    getMe();
  }, [getMe]);

  const handleSubmit = async (values: any) => {
    const response = await updateUser(values)
    console.log("RESPONSE USER UODATE", response)

    if (response?.data) {
      setSuccess(true);
      await update({ ...session, user: { ...session?.user, ...response?.data } })
      return
    }

    setError("Something went wrong, please try again");
  };

  const handleChangePasswordSubmit = async (
    values: any,
    { resetForm, setSubmitting }: any,
  ) => {
    changePassword(values)
      .then(() => {
        setPasswordConfirmationSuccess(true);
        resetForm();
      })
      .catch((error) => {
        setError("Something went wrong, please try again");
      })
      .finally(() => setSubmitting(false));
  };

  if (!user) return

  const { avatar, ...filteredUser} = user

  const initialValues = {
    ...formInitialValues,
    ...filteredUser,
  };

  return (
    <div>
      <NavInfo title="My Profile" />
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex-1">
          <Box title="Profile info">
            <UserForm
              onSubmit={handleSubmit}
              success={success}
              initialValues={initialValues}
              userImage={user?.avatar}
            />
            {error && (
              <div className="mt-5 rounded bg-red-400 p-5 font-bold text-white">
                {error}
              </div>
            )}
            {success && (
              <div className="mt-5 rounded bg-green-400 p-5 font-bold text-white">
                User data updated successfully
              </div>
            )}
          </Box>
        </div>
        <div className="flex-1">
          <Box title="Change Password">
            <PasswordForm onSubmit={handleChangePasswordSubmit} />
            {passwordConfirmationError && (
              <div className="mt-5 rounded bg-red-400 p-5 font-bold text-white">
                {passwordConfirmationError}
              </div>
            )}
            {passwordConfirmationSuccess && (
              <div className="mt-5 rounded bg-green-400 p-5 font-bold text-white">
                Password changes successfully
              </div>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Profile;
