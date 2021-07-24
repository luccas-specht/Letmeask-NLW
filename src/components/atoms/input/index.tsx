import "./input.scss";

type Props = {
  value: any;
  onChange: () => void;
  placeholder: string;
};

export const Input = ({ value, placeholder, onChange }: Props) => (
  <input
    className="input"
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);
