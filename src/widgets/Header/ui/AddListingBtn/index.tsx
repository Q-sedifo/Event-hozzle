import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { IoAddOutline } from "react-icons/io5";

interface Props {
  className?: string;
}

export const AddListingBtn = ({ className }: Props) => {
  return (
    <BaseButton
      text="Add Listing"
      variant="rounded"
      type="button"
      icon={<IoAddOutline className="h-[25px] w-[25px]" />}
      className={className}
    />
  )
}