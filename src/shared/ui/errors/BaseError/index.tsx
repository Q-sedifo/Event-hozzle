interface Props {
  className?: string;
  error: string | undefined;
}

export const BaseError = ({ error, className }: Props) => {
  return error ? (
    <div className={`py-1 px-3 text-red-600 font-semibod text-sm ${className}`}>
      {error}
    </div>
  ) : null
}