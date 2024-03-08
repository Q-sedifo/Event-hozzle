interface Props {
  className?: string;
  error: string | undefined;
}

export const BaseError = ({ error, className }: Props) => {
  return error ? (
    <div
      className={`px-3 py-1 text-sm font-semibold text-red-600 ${className}`}
    >
      {error}
    </div>
  ) : null;
};
