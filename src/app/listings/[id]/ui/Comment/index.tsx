import { Estimate } from "@/shared/ui/inputs/Estimate";

// Icons
import { FaUser } from "react-icons/fa";

interface Props {
  item: any;
}

export const Comment = ({ item }: Props) => {
  const { accuracy, cleanlines, value, check_in, communication, location } = item;
  const rate = Math.round((accuracy + cleanlines + value + check_in + communication + location) / 6)

  return (
    <div className="flex flex-col gap-10 border p-[30px] md:flex-row">
      <div className="flex w-fit gap-4">
        <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded bg-cyan">
          <FaUser className="absolute h-[25px] w-[25px] text-white" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[16px] font-semibold">{item?.username}</span>
          <span className="text-[14px]">New York, USA</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <div>
          <Estimate rate={rate} />
        </div>
        <p>{item?.text}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-4">
            <span className="cursor-pointer text-[15px] font-semibold duration-500 hover:text-cyan">
              Like
            </span>
            <span className="cursor-pointer text-[15px] font-semibold duration-500 hover:text-cyan">
              Unlike
            </span>
          </span>
          <span className="cursor-pointer text-[15px] font-semibold duration-500 hover:text-cyan">
            Comment
          </span>
        </div>
      </div>
    </div>
  );
};
