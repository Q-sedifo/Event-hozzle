"use client";
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseTextarea } from "@/shared/ui/textareas/BaseTextarea";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { BaseError } from "@/shared/ui/errors/BaseError";
import Image from "next/image";
import { userValidation } from "@/shared/validation/user/updateUserValidation";

// Icons
import { BsUpload } from "react-icons/bs";

interface Props {
  onSubmit: any;
  success: boolean;
  initialValues: any;
}

export const formInitialValues = {
  image: null,
  username: "",
  email: "",
  phone: "",
  address: "",
  website: "",
  bio: "",
  facebook_url: "",
  twitter_url: "",
  linkedin_url: "",
  instagram_url: "",
};

export const UserForm = ({ onSubmit, success, initialValues }: Props) => {
  const [avatar, setAvatar] = useState<any>(null);
  const [preview, setPreview] = useState<any>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e?.target?.files?.[0];
    console.log("UPLOADED FILE: ", image);
    if (!image) return;

    setAvatar(image);
  };

  useEffect(() => {
    if (!avatar) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };

    reader.readAsDataURL(avatar);
  }, [avatar]);

  useEffect(() => {
    if (!success) return

    setPreview(null)
  }, [success])

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={userValidation}
        validateOnChange={false}
        enableReinitialize={true}
        onSubmit={onSubmit}
      >
        {({ values, errors, setFieldValue, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
            {isSubmitting && "Loading..."}
            <div>
              {/* @ts-ignore */}
              <BaseError error={errors.image} />
              <div className="relative">
                <Image
                  width={300}
                  height={300}
                  className="rounded bg-purple-500"
                  src={preview || ""}
                  alt="Avatar"
                />
                <label
                  className="absolute bottom-5 left-5 flex cursor-pointer items-center gap-5 rounded-full border-transparent bg-white px-5 py-2 text-primary hover:bg-cyan hover:text-white"
                  htmlFor="avatar"
                >
                  <BsUpload />
                  Upload photo
                </label>
                <input
                  id="avatar"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    handleUploadImage(e);
                    setFieldValue("image", e.target.files?.[0]);
                  }}
                />
              </div>
            </div>
            <div>
              <label className="mb-3 block text-[14px]">Your name</label>
              {/* @ts-ignore */}
              <BaseError error={errors.username} />
              <BaseInput
                className="w-full rounded bg-gray-100 p-3 font-normal"
                onChange={(data) => setFieldValue("username", data)}
                value={values.username}
              />
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="w-full flex-1">
                <label className="mb-3 block text-[14px]">Your email</label>
                {/* @ts-ignore */}
                <BaseError error={errors.email} />
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("email", data)}
                  value={values.email}
                />
              </div>
              <div className="w-full flex-1">
                <label className="mb-3 block text-[14px]">Your phone</label>
                {/* @ts-ignore */}
                <BaseError error={errors.phone} />
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("phone", data)}
                  value={values.phone}
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="w-full flex-1">
                <label className="mb-3 block text-[14px]">Your address</label>
                {/* @ts-ignore */}
                <BaseError error={errors.address} />
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("address", data)}
                  value={values.address}
                />
              </div>
              <div className="w-full flex-1">
                <label className="mb-3 block text-[14px]">Your website</label>
                {/* @ts-ignore */}
                <BaseError error={errors.website} />
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("website", data)}
                  value={values.website}
                />
              </div>
            </div>
            <div>
              <label className="mb-3 block text-[14px]">Bio</label>
              {/* @ts-ignore */}
              <BaseError error={errors.bio} />
              <BaseTextarea
                onChange={(data) => setFieldValue("bio", data)}
                className="h-[200px] w-full rounded bg-gray-100 p-3 font-normal"
                value={values.bio}
              />
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="w-full flex-1">
                <label className="mb-3 block text-[14px]">Facebook URL</label>
                {/* @ts-ignore */}
                <BaseError error={errors.facebook_url} />
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("facebook_url", data)}
                  value={values.facebook_url}
                />
              </div>
              <div className="w-full flex-1">
                <label className="mb-3 block text-[14px]">Twitter URL</label>
                {/* @ts-ignore */}
                <BaseError error={errors.twitter_url} />
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("twitter_url", data)}
                  value={values.twitter_url}
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="w-full flex-1">
                <label className="mb-3 block text-[14px]">LinkedIn URL</label>
                {/* @ts-ignore */}
                <BaseError error={errors.linkedin_url} />
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("linkedin_url", data)}
                  value={values.linkedin_url}
                />
              </div>
              <div className="w-full flex-1">
                <label className="mb-3 block text-[14px]">Instagram URL</label>
                {/* @ts-ignore */}
                <BaseError error={errors.instagram_url} />
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("instagram_url", data)}
                  value={values.instagram_url}
                />
              </div>
            </div>
            <BaseButton
              text="Save Changes"
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
