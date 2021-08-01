import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Input, Button, AsideBanner } from "../../components";
import { useAuth } from "../../../hooks";
import { database } from "../../../services/firebase";

import logoImg from "../../assets/images/logo.svg";

import "./room.scss";


export const NewRoom = () => {
  const { push } = useHistory()
  const { user } = useAuth()
  const [newRoom, setNewRoom] = useState('')

  const handleCreateRow = async (event: FormEvent) => {
    event.preventDefault()

    if(newRoom.trim() === '') return;
    
    const roomRef = database.ref('rooms')

    const { key } = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    push(`/rooms/${key}`)
  }


  return (
    <div className="room">
      <AsideBanner />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Crie uma nova sala</h2>
          <form onSubmit={handleCreateRow}>
            <Input value={newRoom} onChange={(event) => setNewRoom(event.target.value)} placeholder="Nome da sala" />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
  
}