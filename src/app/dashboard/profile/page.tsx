"use client";
import React, { useState, useEffect } from "react";
import { NavInfo } from "@/shared/ui/NavInfo";
import { Box } from "@/app/dashboard/ui/Box";
import { UserForm } from "./(userForm)";
import { PasswordForm } from "./(passwordForm)";
import { useUserStore } from "@/entities/User/model/store";
import { formInitialValues } from "./(userForm)";

const Profile = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const { user, getMe, updateUser } = useUserStore();

  useEffect(() => {
    getMe();
  }, [getMe])

  const handleSubmit = async (values: any, { resetForm }: any) => {
    updateUser(values)
      .then((response) => {
        console.log("UPDATE USER RESPONSE", response);
        resetForm();
        setSuccess(true);
      })
      .catch((error) => {
        setError("Something went wrong, please try again");
      });
  };

  const initialValues = {
    ...formInitialValues,
    ...user
  }

  return (
    <div>
      <NavInfo title="My Profile" />
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex-1">
          <Box title="Profile info">
            <UserForm onSubmit={handleSubmit} success={success} initialValues={initialValues} />
            {error && (
              <div className="mt-5 rounded bg-red-400 p-5 text-white">
                {error}
              </div>
            )}
            {success && (
              <div className="mt-5 rounded bg-green-400 p-5 text-white">
                User data updated successfully
              </div>
            )}
          </Box>
        </div>
        <div className="flex-1">
          <Box title="Change Password">
            <PasswordForm />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Profile;
