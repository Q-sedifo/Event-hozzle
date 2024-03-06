// import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
// import { TbStarHalfFilled } from "react-icons/tb";

export const Estimate = () => {
  return (
    <div className="flex w-fit items-center gap-1">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <TbStarFilled key={index} className="text-yellow" />
      ))}
    </div>
  );
};
