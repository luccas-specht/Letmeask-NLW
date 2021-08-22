import { Dispatch, FormEvent, SetStateAction } from "react";

import { AsideBanner, RoomCreationForm } from "../../";

import "./style.scss";

type Props = {
  roomCode: string;
  setRoomCode: Dispatch<SetStateAction<string>>;
  handleJoinRoow: (event: FormEvent) => Promise<void>;
  handleCreateRow: () => Promise<void>;
};

export const HomeTemplate = ({
  roomCode,
  setRoomCode,
  handleJoinRoow,
  handleCreateRow,
}: Props) => (
  <div className="page-auth">
    <AsideBanner />
    <RoomCreationForm
      roomCode={roomCode}
      setRoomCode={setRoomCode}
      handleJoinRoow={handleJoinRoow}
      handleCreateRow={handleCreateRow}
    />
  </div>
);
