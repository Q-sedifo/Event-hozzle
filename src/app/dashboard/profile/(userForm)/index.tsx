"use client"
import React from "react";
import { Formik } from "formik";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseTextarea } from "@/shared/ui/textareas/BaseTextarea";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { BaseError } from "@/shared/ui/errors/BaseError";
import Image from "next/image";

// Icons
import { BsUpload } from "react-icons/bs";

const initialValues = {
  image: null,
  name: "",
  email: "",
  phone: "",
  address: "",
  website: "",
  bio: "",
  facebookUrl: "",
  twitterUrl: "",
  linkedInUrl: "",
  instagramUrl: ""
};

export const UserForm = () => {
  const handleSubmit = (data: any, { setSubmitting }: any) => {
    console.log("USER DATA: ", data)
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
            <div>
              <div className="relative">
                <Image width={300} height={300} className="rounded bg-purple-500" src="" alt="Avatar"/>
                <BaseButton 
                  text="Upload photo" 
                  type="button" 
                  variant="rounded" 
                  className="absolute bottom-5 left-5 border-transparent bg-white text-primary hover:bg-cyan hover:text-white"
                  icon={<BsUpload/>}
                />
              </div>
            </div>
            <div>
              <BaseError error={errors.name} />
              <label className="mb-3 block text-[14px]">Your name</label>
              <BaseInput
                className="w-full rounded bg-gray-100 p-3 font-normal"
                onChange={(data) => setFieldValue("name", data)}
                value={values.name}
              />
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="w-full flex-1">
                <BaseError error={errors.email} />
                <label className="mb-3 block text-[14px]">Your email</label>
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("email", data)}
                  value={values.email}
                />
              </div>
              <div className="w-full flex-1">
                <BaseError error={errors.phone} />
                <label className="mb-3 block text-[14px]">Your phone</label>
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("phone", data)}
                  value={values.phone}
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="w-full flex-1">
                <BaseError error={errors.address} />
                <label className="mb-3 block text-[14px]">Your address</label>
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("address", data)}
                  value={values.address}
                />
              </div>
              <div className="w-full flex-1">
                <BaseError error={errors.website} />
                <label className="mb-3 block text-[14px]">Your website</label>
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("website", data)}
                  value={values.website}
                />
              </div>
            </div>
            <div>
              <BaseError error={errors.bio} />
              <label className="mb-3 block text-[14px]">Bio</label>
              <BaseTextarea 
                onChange={(data) => setFieldValue("bio", data)}
                className="h-[200px] w-full rounded bg-gray-100 p-3 font-normal"
                value={values.bio}
              />
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="w-full flex-1">
                <BaseError error={errors.facebookUrl} />
                <label className="mb-3 block text-[14px]">Facebook URL</label>
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("facebookUrl", data)}
                  value={values.facebookUrl}
                />
              </div>
              <div className="w-full flex-1">
                <BaseError error={errors.twitterUrl} />
                <label className="mb-3 block text-[14px]">Twitter URL</label>
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("twitterUrl", data)}
                  value={values.twitterUrl}
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="w-full flex-1">
                <BaseError error={errors.linkedInUrl} />
                <label className="mb-3 block text-[14px]">LinkedIn URL</label>
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("linkedInUrl", data)}
                  value={values.linkedInUrl}
                />
              </div>
              <div className="w-full flex-1">
                <BaseError error={errors.instagramUrl} />
                <label className="mb-3 block text-[14px]">Instagram URL</label>
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("instagramUrl", data)}
                  value={values.instagramUrl}
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
