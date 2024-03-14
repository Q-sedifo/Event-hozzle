interface Props {
  text: string;
}

export const Title = ({ text }: Props) => {
  return (
    <div className="mb-2 mt-5 px-5 text-[13px] font-medium uppercase text-gray-500">
      {text}
    </div>
  )
}