import { ReactNode } from "react";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({ type, children, onClick }: Props) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);
