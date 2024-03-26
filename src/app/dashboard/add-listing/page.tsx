"use client";
import React, { useState } from "react";
import { NavInfo } from "@/shared/ui/NavInfo";
import { ListingForm } from "./(form)";
import { useListingsStore } from "@/entities/Listing/model/store";

const AddListing = () => {
  const [success, setSuccess] = useState<null | string>(null);
  const { addListing } = useListingsStore();

  const handleSubmit = async (values: any) => {
    addListing(values).then(() => {
      setSuccess("Listing created successfully")
    });
  };

  return (
    <div>
      <NavInfo title="Add Listing" />
      <ListingForm onSubmit={handleSubmit} />
      {success && (
        <div className="p-5 test-white bg-green-400 font-bold rounded-lg">
          {success}
        </div>
      )}
    </div>
  );
};

export default AddListing;
