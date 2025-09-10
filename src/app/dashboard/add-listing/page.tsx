"use client";
import React, { lazy, useState } from "react";
import { NavInfo } from "@/shared/ui/NavInfo";
import { ListingForm } from "./(form)";
import { useListingsStore } from "@/entities/Listing/model/store";

const AddListing = () => {
  const [success, setSuccess] = useState<null | string>(null);
  const { addListing } = useListingsStore();

  const handleSubmit = async (values: any, { resetForm }: any) => {
    addListing(values).then(() => {
      setSuccess("Listing created successfully")
      resetForm();
    });
  };
  
  return (
    <div>
      <NavInfo title="Add Listing" />
      <ListingForm onSubmit={handleSubmit} success={success}/>
      {success && (
        <div className="mt-5 rounded-lg bg-green-400 p-5 font-bold text-white">
          {success}
        </div>
      )}
    </div>
  );
};

export default AddListing;
