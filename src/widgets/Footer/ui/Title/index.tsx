interface Props {
  text: string;
}

export const Title = ({ text }: Props) => {
  return <div className="pb-5 text-[20px] font-bold text-primary">{text}</div>;
};
