"use client";
import { NavInfo } from "@/shared/ui/NavInfo";
import { ListingForm } from "./(form)";
import { useListingsStore } from "@/entities/Listing/model/store";

const AddListing = () => {
  const { addListing } = useListingsStore();

  const handleSubmit = async (values: any) => {
    addListing(values);
  };

  return (
    <div>
      <NavInfo title="Add Listing" />
      <ListingForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddListing;
