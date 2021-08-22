import { RoomCode } from "../../atoms";

import logoImg from "../../../assets/images/logo.svg";

import "./style.scss";

type Props = {
  id: string;
};

export const Header = ({ id }: Props) => (
  <header className="header">
    <div className="header__content">
      <img src={logoImg} alt="logo" />
      <RoomCode code={id} />
    </div>
  </header>
);
