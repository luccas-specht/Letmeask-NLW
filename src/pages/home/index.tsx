import ilustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

import { Input, Button } from "../../components";

import "./home.scss";

export const Home = () => (
  <div className="page-auth">
    <aside>
      <img src={ilustrationImg} alt="imagem_login" />
      <strong>Toda pergunta tem uma resposta.</strong>
      <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
    </aside>
    <main>
      <div className="main-content">
        <img src={logoImg} alt="Letmeask" />
        <button className="create-room">
          <img src={googleIconImg} alt="logo do google" />
          Crie sua sala com o Google
        </button>
        <div className="separator">ou entre em uma sala</div>
        <form>
          <Input
            value={""}
            onChange={() => {}}
            placeholder="Digite o código da sala"
          />
          <Button type="submit" onClick={() => {}}>
            Entrar na sala
          </Button>
        </form>
      </div>
    </main>
  </div>
);
