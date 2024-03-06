interface Props {
  text: string;
}

export const Title = ({ text }: Props) => {
  return (
    <div className="text-[20px] text-primary font-bold pb-5">
      {text}
    </div>
  )
}