import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

import { useAuth } from "../../../hooks";
import { Input, Button, AsideBanner } from "../../components";

import "./home.scss";
import { database } from "../../../services/firebase";


export const Home = () => {
  const { push } = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const [roomCode, setRoomCode] = useState('')

  const handleCreateRow = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    push("/rooms/new");
  };

  const handleJoinRoow = async (event:FormEvent) => {
    event.preventDefault();

    if(roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if(!roomRef.exists()){
      alert('Sala não existe cpx')
      return;
    }

    push(`/rooms/${roomCode}`)
  }

  return (
    <div className="page-auth">
      <AsideBanner />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRow}>
            <img src={googleIconImg} alt="logo do google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoow}>
            <Input
              value={roomCode}
              onChange={(event) => {setRoomCode(event.target.value)}}
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};
