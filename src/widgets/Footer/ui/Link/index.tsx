interface Props {
  text: string;
}

export const Link = ({ text }: Props) => {
  return (
    <div className="text-[14px] font-semibold text-gray-500 cursor-pointer duration-500 hover:text-cyan">
      {text}
    </div>
  )
}