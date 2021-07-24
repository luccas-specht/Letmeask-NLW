import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import { Input, Button, AsideBanner } from "../../components";

import "./room.scss";

export const NewRoom = () => (
  <div className="room">
    <AsideBanner />
    <main>
      <div className="main-content">
        <img src={logoImg} alt="Letmeask" />
        <h2>Crie uma nova sala</h2>
        <form>
          <Input value={""} onChange={() => {}} placeholder="Nome da sala" />
          <Button type="submit" onClick={() => {}}>
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
