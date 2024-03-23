import clsx from "clsx";

interface Props {
  className?: string;
  lable: string;
  selected: boolean;
  setSelected: (data: boolean) => void;
}

export const BaseRadio = ({
  className,
  selected,
  setSelected,
  lable,
}: Props) => {
  return (
    <div
      className={clsx(
        "flex cursor-pointer items-center gap-2 duration-500",
        className,
      )}
      onClick={() => setSelected(!selected)}
    >
      <span
        className={clsx("rounded-full bg-gray-300 p-[6px]", {
          "!bg-cyan": selected,
        })}
      >
        <span
          className={clsx("block h-[10px] w-[10px] rounded-full duration-500", {
            "bg-white": selected,
          })}
        />
      </span>
      <span className="text-[15px] font-semibold text-gray-500">{lable}</span>
    </div>
  );
};
