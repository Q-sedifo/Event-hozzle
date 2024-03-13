import clsx from "clsx";

interface Props {
  onChange: (value: boolean) => void;
  value?: boolean;
  label?: string;
}

export const BaseCheckbox = ({ value, label, onChange }: Props) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer" onClick={() => onChange(!value)}>
      <div className="w-fit h-fit p-1 border border-cyan cursor-pointer rounded">
        <span className={clsx("block w-[8px] h-[8px] bg-cyan duration-300", {
          "bg-white": value === false
        })}/>
      </div>
      {label && (
        <span className="text-gray-500 font-medium">
          {label}
        </span>
      )}
    </div>
  )
}