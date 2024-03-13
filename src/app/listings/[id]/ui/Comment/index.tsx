import { Estimate } from "@/shared/ui/inputs/Estimate"

interface Props {
  text: string;
  estimate: string | number;
}

export const Comment = ({ text, estimate }: Props) => {
  return (
    <div className="flex flex-col gap-10 p-[30px] border md:flex-row">
      <div className="w-fit flex gap-4">
        <div className="w-[60px] h-[60px] rounded bg-cyan"/>
        <div className="flex flex-col gap-1">
          <span className="text-[16px] font-semibold">James Andy</span>
          <span className="text-[14px]">New York, USA</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div><Estimate/></div>
        <p>{text}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-4">
            <span className="text-[15px] font-semibold duration-500 hover:text-cyan cursor-pointer">Like</span>
            <span className="text-[15px] font-semibold duration-500 hover:text-cyan cursor-pointer">Unlike</span>
          </span>
          <span className="text-[15px] font-semibold duration-500 hover:text-cyan cursor-pointer">Comment</span>
        </div>
      </div>
    </div>
  )
}