import { Estimate } from "@/shared/ui/inputs/Estimate";

interface Props {
  text: string;
  estimate: string | number;
}

export const Comment = ({ text, estimate }: Props) => {
  return (
    <div className="flex flex-col gap-10 border p-[30px] md:flex-row">
      <div className="flex w-fit gap-4">
        <div className="h-[60px] w-[60px] rounded bg-cyan" />
        <div className="flex flex-col gap-1">
          <span className="text-[16px] font-semibold">James Andy</span>
          <span className="text-[14px]">New York, USA</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <div>
          <Estimate />
        </div>
        <p>{text}</p>
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
