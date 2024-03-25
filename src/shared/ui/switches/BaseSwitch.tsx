import clsx from "clsx";

interface Props {
  className?: string;
  onSwitch: (value: boolean) => void;
  active: boolean;
  lable: string;
}

export const BaseSwitch = ({ className, onSwitch, active, lable }: Props) => {
  return (
    <div className={clsx("flex items-center justify-between", className)}>
      <span className="font-semibold">{lable}</span>
      <div
        className={clsx(
          "relative w-[50px] cursor-pointer rounded-full bg-cyan p-[4px]",
          {
            "flex items-center justify-end bg-green-400": active,
          },
        )}
        onClick={() => onSwitch(!active)}
      >
        <span
          className={clsx(
            "relative flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white duration-500 before:absolute before:h-[50%] before:w-[50%] before:rounded-full before:bg-cyan",
            {
              "mr-[5px] w-[5px] before:hidden": active,
            },
          )}
        />
      </div>
    </div>
  );
};
