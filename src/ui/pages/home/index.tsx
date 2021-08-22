import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import { HomeTemplate } from "../../components";
import { useAuth } from "../../../hooks";
import { database } from "../../../services/firebase";

export const Home = () => {
  const { push } = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const [roomCode, setRoomCode] = useState("");

  const handleCreateRow = async () => {
    if (!user) await signInWithGoogle();

    push("/rooms/new");
  };

  const handleJoinRoow = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === "") return;
    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Sala não existe cpx");
      return;
    }

    push(`/rooms/${roomCode}`);
  };

  return (
    <HomeTemplate
      roomCode={roomCode}
      setRoomCode={setRoomCode}
      handleJoinRoow={handleJoinRoow}
      handleCreateRow={handleCreateRow}
    />
  );
};
