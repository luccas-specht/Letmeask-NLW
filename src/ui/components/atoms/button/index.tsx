import { ButtonHTMLAttributes } from "react";

import "./button.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ type, children, onClick, ...props }: Props) => (
  <button className="button" type={type} onClick={onClick} {...props}>
    {children}
  </button>
);