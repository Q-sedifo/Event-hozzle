interface Props {
  className?: string;
  error: string | undefined;
}

export const BaseError = ({ error, className }: Props) => {
  return error ? (
    <div className={`font-semibold px-3 py-1 text-sm text-red-600 ${className}`}>
      {error}
    </div>
  ) : null;
};
