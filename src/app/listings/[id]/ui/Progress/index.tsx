interface Props {
  progress: number;
}

export const Progress = ({ progress }: Props) => {
  return (
    <div className="relative h-[4px] w-full max-w-[200px] overflow-hidden bg-gray-300">
      <span className="absolute left-0 h-full bg-black" style={{ width: `${progress}%` }}/>
    </div>
  );
};
