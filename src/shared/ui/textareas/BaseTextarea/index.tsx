interface Props {
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string;
}

export const BaseTextarea = ({ className, placeholder, onChange, value }: Props) => {
  return (
    <textarea
      className={`p-5 focus:outline-none ${className}`}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  );
};
