import { ReactNode } from "react";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  onCLick: () => void;
};

export const Button = ({ type, children, onCLick }: Props) => (
  <button type={type} onClick={onCLick}>
    {children}
  </button>
);
