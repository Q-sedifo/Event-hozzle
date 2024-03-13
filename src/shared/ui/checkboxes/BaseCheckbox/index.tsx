import clsx from "clsx";

interface Props {
  onChange: (value: boolean) => void;
  value?: boolean;
  label?: string;
}

export const BaseCheckbox = ({ value, label, onChange }: Props) => {
  return (
    <div
      className="flex cursor-pointer items-center gap-4"
      onClick={() => onChange(!value)}
    >
      <div className="h-fit w-fit cursor-pointer rounded border border-cyan p-1">
        <span
          className={clsx("block h-[8px] w-[8px] bg-cyan duration-300", {
            "bg-white": value === false,
          })}
        />
      </div>
      {label && <span className="font-medium text-gray-500">{label}</span>}
    </div>
  );
};
