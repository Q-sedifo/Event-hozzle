import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { IoAddOutline } from "react-icons/io5";
import Link from "next/link";

interface Props {
  className?: string;
}

export const AddListingBtn = ({ className }: Props) => {
  return (
    <Link href="/dashboard/add-listing">
      <BaseButton
        text="Add Listing"
        variant="rounded"
        type="button"
        icon={<IoAddOutline className="h-[25px] w-[25px]" />}
        className={className}
      />
    </Link>
  );
};
