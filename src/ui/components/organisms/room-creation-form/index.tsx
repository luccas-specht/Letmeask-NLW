import { FormEvent, Dispatch, SetStateAction } from "react";

import { Input, Button } from "../..";
import logoImg from "../../../assets/images/logo.svg";
import googleIconImg from "../../../assets/images/google-icon.svg";

import "./style.scss";

type Props = {
  roomCode: string;
  setRoomCode: Dispatch<SetStateAction<string>>;
  handleJoinRoow: (event: FormEvent) => Promise<void>;
  handleCreateRow: () => Promise<void>;
};

export const RoomCreationForm = ({
  handleCreateRow,
  handleJoinRoow,
  roomCode,
  setRoomCode,
}: Props) => (
  <main className="main">
    <div className="main-content">
      <img src={logoImg} alt="Letmeask" />
      <button className="create-room" onClick={handleCreateRow}>
        <img src={googleIconImg} alt="Logo do Google" />
        Crie sua sala com o Google
      </button>
      <div className="separator">ou entre em uma sala</div>
      <form onSubmit={handleJoinRoow}>
        <Input
          value={roomCode}
          onChange={(event) => {
            setRoomCode(event.target.value);
          }}
          placeholder="Digite o código da sala"
        />
        <Button type="submit">Entrar na sala</Button>
      </form>
    </div>
  </main>
);
