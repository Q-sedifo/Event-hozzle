interface Props {
  progress: number;
}

export const Progress = ({ progress }: Props) => {
  return (
    <div className="relative w-full max-w-[200px] h-[4px] bg-gray-300 overflow-hidden">
      <span className="absolute left-0 w-[80%] h-full bg-black"/>
    </div>
  )
}