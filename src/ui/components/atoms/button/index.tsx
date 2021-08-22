import { ButtonHTMLAttributes } from "react";

import "./style.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  outlined?: boolean;
};

export const Button = ({
  type,
  children,
  outlined = false,
  onClick,
  ...props
}: Props) => (
  <button
    type={type}
    onClick={onClick}
    className={`button ${outlined ?? ""}`}
    {...props}
  >
    {children}
  </button>
);
