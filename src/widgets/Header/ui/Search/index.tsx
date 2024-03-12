import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { IoIosSearch } from "react-icons/io";

interface Props {
  onChange?: () => void;
  className?: string;
}

export const SearchInput = ({ onChange, className }: Props) => {
  return (
    <BaseInput
      icon={<IoIosSearch className="h-[20px] w-[20px] fill-cyan" />}
      placeholder="What are you looking for?"
      className={`w-[230px] border-b border-b-slate-400 py-1 pr-1 ${className}`}
      onChange={() => ""}
    />
  );
};
