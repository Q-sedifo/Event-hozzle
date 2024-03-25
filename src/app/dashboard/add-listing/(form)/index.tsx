"use client";
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseTextarea } from "@/shared/ui/textareas/BaseTextarea";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { BaseError } from "@/shared/ui/errors/BaseError";
import { BaseDropdown } from "@/shared/ui/dropdowns/BaseDropdown";
import { BaseRadio } from "@/shared/ui/radios/BaseRadio";
import { BaseSwitch } from "@/shared/ui/switches/BaseSwitch";
import { Box } from "@/app/dashboard/ui/Box";
import { generateHoursIso } from "@/shared/utils/Time";
import { listingValidation } from "@/entities/Listing/validation";
import Image from "next/image";

// Icons
import { BiCarousel } from "react-icons/bi";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiText } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

interface Props {
  onSubmit: (values: any) => void;
}

const initialValues = {
  title: "",
  category: null,
  keywords: "",
  city: null,
  address: "",
  state: "",
  zip_code: "",
  description: "",
  images: [],
  email: "",
  website: "",
  phone: "",
  urls: {
    facebook_url: "",
    twitter_url: "",
    linkedin_url: "",
  },
  booking_form: false,
  price_range: false,
  instagram: false,
  monday: {
    opening: null,
    closing: null,
  },
  tuesday: {
    opening: null,
    closing: null,
  },
  wednesday: {
    opening: null,
    closing: null,
  },
  thursday: {
    opening: null,
    closing: null,
  },
  friday: {
    opening: null,
    closing: null,
  },
  saturday: {
    opening: null,
    closing: null,
  },
  sunday: {
    opening: null,
    closing: null,
  },
  free_wifi: false,
  parking: false,
  fitnes_center: false,
  non_smoking_rooms: false,
  airoport_shuttle: false,
  air_conditioning: false,
  events: false,
  friendly_workspace: false,
  price: "",
};

const categiries: any = [
  { title: "Shops", key: "shops" },
  { title: "Hotels", key: "hotels" },
  { title: "Restaurants", key: "restaurants" },
  { title: "Fitness", key: "fitness" },
  { title: "Events", key: "events" },
];

const cities: any = [
  { title: "New York", key: "New York" },
  { title: "London", key: "London" },
  { title: "Paris", key: "Paris" },
  { title: "Moscow", key: "Moscow" },
  { title: "Rome", key: "Rome" },
];

const timeItems: any = [
  { title: "Opening Time", key: "opening time" },
  { title: "Closed", key: "closed" },
  ...generateHoursIso(),
];

export const ListingForm = ({ onSubmit }: Props) => {
  const [images, setImages] = useState<any>([]);
  const [previews, setPreviews] = useState<any>([]);

  const handleUploadImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imagesList = e.target.files;
    if (!imagesList) return;

    setImages(Object.values(imagesList));
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const imagesList = event.dataTransfer.files;
    setImages(Object.values(imagesList));
  };

  useEffect(() => {
    if (!images) return;

    images.forEach((image: File) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prev: any) => [...prev, reader.result]);
      };

      reader.readAsDataURL(image);
    });
  }, [images]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={listingValidation}
        validateOnChange={false}
        onSubmit={onSubmit}
      >
        {({ values, errors, setFieldValue, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
            {isSubmitting && "Loading..."}
            <Box title="Basic Informations">
              <div>
                <label className="mb-3 flex items-center gap-2 text-[14px]">
                  <BiCarousel className="text-cyan" />
                  Listing Title:
                </label>
                <BaseError error={errors.title} />
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("title", data)}
                  placeholder="Name of your business"
                  value={values.title}
                />
              </div>
              <div className="mt-5 flex flex-col items-center gap-5 md:flex-row">
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <MdOutlineAddToPhotos className="text-cyan" />
                    Type / Category:
                  </label>
                  <BaseError error={errors.category} />
                  <BaseDropdown
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onSelect={(data) => setFieldValue("category", data)}
                    selected={values.category}
                    items={categiries}
                    placeholder="Select category"
                  />
                </div>
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <IoKey className="text-cyan" />
                    Keywords:
                  </label>
                  <BaseError error={errors.keywords} />
                  <BaseInput
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onChange={(data) => setFieldValue("keywords", data)}
                    value={values.keywords}
                    placeholder="Maximum 15, should be separated by commas"
                  />
                </div>
              </div>
            </Box>
            <Box title="Location">
              <div className="mt-5 flex flex-col items-center gap-5 md:flex-row">
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <BiMenuAltLeft className="text-cyan" />
                    City:
                  </label>
                  <BaseError error={errors.city} />
                  <BaseDropdown
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onSelect={(data) => setFieldValue("city", data)}
                    selected={values.city}
                    items={cities}
                    placeholder="Select City"
                  />
                </div>
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <BiMenuAltLeft className="text-cyan" />
                    Address:
                  </label>
                  <BaseError error={errors.address} />
                  <BaseInput
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onChange={(data) => setFieldValue("address", data)}
                    value={values.address}
                    placeholder="e.g. 55 Counrty Laios"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col items-center gap-5 md:flex-row">
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <BiMenuAltLeft className="text-cyan" />
                    State:
                  </label>
                  <BaseError error={errors.state} />
                  <BaseInput
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onChange={(data) => setFieldValue("state", data)}
                    value={values.state}
                  />
                </div>
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <BiMenuAltLeft className="text-cyan" />
                    Zip-Code:
                  </label>
                  <BaseError error={errors.zip_code} />
                  <BaseInput
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onChange={(data) => setFieldValue("zip_code", data)}
                    value={values.zip_code}
                  />
                </div>
              </div>
            </Box>
            <Box title="Gallery">
              <div>
                <BaseError error={errors.images as string} />
                {!!previews.length && (
                  <div className="flex flex-wrap gap-5">
                    {previews.map((image: string, index: number) => (
                      <span key={index} className="relative">
                        <Image
                          key={index}
                          src={image}
                          alt="Image"
                          width={100}
                          height={100}
                        />
                        <span
                          className="absolute -right-5 -top-5 cursor-pointer rounded-full bg-red-500 p-1 text-white"
                          onClick={() => {
                            let newPreviewsArray: string[] = [
                              ...previews.slice(0, index),
                              ...previews.slice(index + 1),
                            ];

                            let newImagesArray: File[] = [
                              ...values.images.slice(0, index),
                              ...values.images.slice(index + 1),
                            ];

                            setPreviews(newPreviewsArray);
                            setFieldValue("images", newImagesArray);
                          }}
                        >
                          <IoMdClose className="h-[20px] w-[20px] text-white" />
                        </span>
                      </span>
                    ))}
                  </div>
                )}
                <label
                  htmlFor="listing-images"
                  className="block cursor-pointer py-10 text-center"
                  onDragOver={handleDragOver}
                  onDrop={(e) => {
                    handleDrop(e);
                    setFieldValue("images", [
                      ...values.images,
                      ...Object.values(e.dataTransfer.files as any),
                    ]);
                  }}
                >
                  Drag n drop some files here, or click to select files
                </label>
                <input
                  id="listing-images"
                  placeholder="Drag 'n' drop some files here, or click to select files"
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    handleUploadImages(e);
                    setFieldValue("images", [
                      ...values.images,
                      ...Object.values(e.target.files as any),
                    ]);
                  }}
                />
              </div>
            </Box>
            <Box title="Details">
              <div>
                <label className="mb-3 flex items-center gap-2 text-[14px]">
                  <BiText className="text-cyan" />
                  Description
                </label>
                <BaseError error={errors.description} />
                <BaseTextarea
                  onChange={(data) => setFieldValue("description", data)}
                  className="h-[200px] w-full rounded bg-gray-100 p-3 font-normal"
                  value={values.description}
                  placeholder="Details..."
                />
              </div>
              <div className="mt-5 flex flex-col items-center gap-5 md:flex-row">
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <MdOutlineMail className="text-cyan" />
                    Email Address: (optional)
                  </label>
                  <BaseError error={errors.email} />
                  <BaseInput
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onChange={(data) => setFieldValue("email", data)}
                    value={values.email}
                  />
                </div>
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <CiGlobe className="text-cyan" />
                    Website: (optional)
                  </label>
                  <BaseError error={errors.website} />
                  <BaseInput
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onChange={(data) => setFieldValue("website", data)}
                    value={values.website}
                  />
                </div>
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <BiPhoneCall className="text-cyan" />
                    Phone: (optional)
                  </label>
                  <BaseError error={errors.phone} />
                  <BaseInput
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onChange={(data) => setFieldValue("phone", data)}
                    value={values.phone}
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col items-center gap-5 md:flex-row">
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <ImFacebook2 className="text-blue-900" />
                    Facebook: (optional)
                  </label>
                  <BaseError error={errors?.urls?.facebook_url} />
                  <BaseInput
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onChange={(data) =>
                      setFieldValue("urls.facebook_url", data)
                    }
                    value={values.urls.facebook_url}
                    placeholder="https://www.facebook.com/"
                  />
                </div>
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <FaTwitter className="text-blue-500" />
                    Twitter: (optional)
                  </label>
                  <BaseError error={errors?.urls?.twitter_url} />
                  <BaseInput
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onChange={(data) => setFieldValue("urls.twitter_url", data)}
                    value={values.urls.twitter_url}
                    placeholder="https://www.twitter.com/"
                  />
                </div>
                <div className="w-full flex-1">
                  <label className="mb-3 flex items-center gap-2 text-[14px]">
                    <FaLinkedinIn className="text-blue-700" />
                    LinkedIn: (optional)
                  </label>
                  <BaseError error={errors?.urls?.linkedin_url} />
                  <BaseInput
                    className="w-full rounded bg-gray-100 p-3 font-normal"
                    onChange={(data) =>
                      setFieldValue("urls.linkedin_url", data)
                    }
                    value={values.urls.linkedin_url}
                    placeholder="https://www.linkedin.com/"
                  />
                </div>
              </div>
            </Box>
            <Box title="Facilities">
              <div className="flex flex-wrap items-center gap-5">
                <BaseRadio
                  setSelected={(data) => setFieldValue("free_wifi", data)}
                  selected={values.free_wifi}
                  lable="Free WiFi"
                />
                <BaseRadio
                  setSelected={(data) => setFieldValue("parking", data)}
                  selected={values.parking}
                  lable="Parking"
                />
                <BaseRadio
                  setSelected={(data) => setFieldValue("fitnes_center", data)}
                  selected={values.fitnes_center}
                  lable="Fitness Center"
                />
                <BaseRadio
                  setSelected={(data) =>
                    setFieldValue("non_smoking_rooms", data)
                  }
                  selected={values.non_smoking_rooms}
                  lable="Non-smoking Rooms"
                />
                <BaseRadio
                  setSelected={(data) =>
                    setFieldValue("airoport_shuttle", data)
                  }
                  selected={values.airoport_shuttle}
                  lable="Airport Shuttle"
                />
                <BaseRadio
                  setSelected={(data) =>
                    setFieldValue("air_conditioning", data)
                  }
                  selected={values.air_conditioning}
                  lable="Air Conditioning"
                />
                <BaseRadio
                  setSelected={(data) => setFieldValue("events", data)}
                  selected={values.events}
                  lable="Events"
                />
                <BaseRadio
                  setSelected={(data) =>
                    setFieldValue("friendly_workspace", data)
                  }
                  selected={values.friendly_workspace}
                  lable="Friendly Workspace"
                />
              </div>
            </Box>
            <Box title="Sidebar Widgets">
              <div className="flex flex-col gap-5">
                <BaseSwitch
                  lable="Booking Form"
                  active={values.booking_form}
                  onSwitch={(value) => setFieldValue("booking_form", value)}
                  className="border bg-gray-100 p-5 text-[15px]"
                />
                <BaseSwitch
                  lable="Price Range"
                  active={values.price_range}
                  onSwitch={(value) => setFieldValue("price_range", value)}
                  className="border bg-gray-100 p-5 text-[15px]"
                />
                <BaseSwitch
                  lable="Instagram"
                  active={values.instagram}
                  onSwitch={(value) => setFieldValue("instagram", value)}
                  className="border bg-gray-100 p-5 text-[15px]"
                />
              </div>
            </Box>
            <Box title="Opening hours">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <div className="w-[20%] text-[15px] font-semibold">
                    Monday
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      placeholder="Opening time"
                      onSelect={(data) => setFieldValue("monday.opening", data)}
                      items={timeItems}
                      selected={values.monday.opening}
                    />
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      placeholder="Closing time"
                      items={timeItems}
                      onSelect={(data) => setFieldValue("monday.closing", data)}
                      selected={values.monday.closing}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <div className="w-[20%] text-[15px] font-semibold">
                    Tuesday
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) =>
                        setFieldValue("tuesday.opening", data)
                      }
                      selected={values.tuesday.opening}
                      items={timeItems}
                      placeholder="Opening time"
                    />
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) =>
                        setFieldValue("tuesday.closing", data)
                      }
                      selected={values.tuesday.closing}
                      items={timeItems}
                      placeholder="Closing time"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <div className="w-[20%] text-[15px] font-semibold">
                    Wednesday
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) =>
                        setFieldValue("wednesday.opening", data)
                      }
                      selected={values.wednesday.opening}
                      items={timeItems}
                      placeholder="Opening time"
                    />
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) =>
                        setFieldValue("wednesday.opening", data)
                      }
                      selected={values.wednesday.opening}
                      items={timeItems}
                      placeholder="Closing time"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <div className="w-[20%] text-[15px] font-semibold">
                    Thursday
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) =>
                        setFieldValue("thursday.opening", data)
                      }
                      selected={values.thursday.opening}
                      items={timeItems}
                      placeholder="Opening Time"
                    />
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) =>
                        setFieldValue("thursday.closing", data)
                      }
                      selected={values.thursday.closing}
                      items={timeItems}
                      placeholder="Closing Time"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <div className="w-[20%] text-[15px] font-semibold">
                    Friday
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) => setFieldValue("friday.opening", data)}
                      selected={values.friday.opening}
                      items={timeItems}
                      placeholder="Opening Time"
                    />
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) => setFieldValue("friday.closing", data)}
                      selected={values.friday.closing}
                      items={timeItems}
                      placeholder="Closing Time"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <div className="w-[20%] text-[15px] font-semibold">
                    Saturday
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) =>
                        setFieldValue("saturday.opening", data)
                      }
                      selected={values.saturday.opening}
                      items={timeItems}
                      placeholder="Opening Time"
                    />
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) =>
                        setFieldValue("saturday.closing", data)
                      }
                      selected={values.saturday.closing}
                      items={timeItems}
                      placeholder="Closing Time"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <div className="w-[20%] text-[15px] font-semibold">
                    Sunday
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) => setFieldValue("sunday.opening", data)}
                      selected={values.sunday.opening}
                      items={timeItems}
                      placeholder="Opening Time"
                    />
                  </div>
                  <div className="flex-1">
                    <BaseDropdown
                      className="w-full rounded bg-gray-100 p-3 font-normal"
                      onSelect={(data) => setFieldValue("sunday.closing", data)}
                      selected={values.sunday.closing}
                      items={timeItems}
                      placeholder="Closing Time"
                    />
                  </div>
                </div>
              </div>
            </Box>
            <Box title="Prising">
              <div>
                <label className="mb-3 flex items-center gap-2 text-[14px]">
                  <IoPricetagOutline className="text-cyan" />
                  Prising
                </label>
                <BaseError error={errors.price} />
                <BaseInput
                  className="w-full rounded bg-gray-100 p-3 font-normal"
                  onChange={(data) => setFieldValue("price", data)}
                  value={values.price}
                  placeholder="$542.00"
                />
              </div>
            </Box>
            <BaseButton
              text="Submit Listings"
              variant="default"
              type="submit"
              className="w-full px-8 hover:bg-blue-800 md:w-fit"
            />
          </form>
        )}
      </Formik>
    </>
  );
};
