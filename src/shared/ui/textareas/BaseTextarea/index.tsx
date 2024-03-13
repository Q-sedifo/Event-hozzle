interface Props {
  className?: string;
  placeholder?: string;
  onChange?: () => void;
  value?: string;
}

export const BaseTextarea = ({ className, placeholder, onChange }: Props) => {
  return (
    <textarea
      className={`p-5 focus:outline-none ${className}`}
      onChange={onChange}
      placeholder={placeholder}
    ></textarea>
  );
};
