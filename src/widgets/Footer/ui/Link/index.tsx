interface Props {
  text: string;
}

export const Link = ({ text }: Props) => {
  return (
    <div className="cursor-pointer text-[14px] font-semibold text-gray-500 duration-500 hover:text-cyan">
      {text}
    </div>
  );
};
