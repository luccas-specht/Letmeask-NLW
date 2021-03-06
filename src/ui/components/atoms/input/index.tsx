import "./style.scss";

type Props = {
  value: any;
  onChange: (event: any) => void;
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
