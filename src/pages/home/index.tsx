import ilustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

import { Input, Button } from "../../components";

export const Home = () => (
  <div>
    <aside>
      <img src={ilustrationImg} alt="imagem_login" />
      <strong>Toda pergunta tem uma resposta.</strong>
      <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
    </aside>
    <main>
      <div>
        <img src={logoImg} alt="Letmeask" />
        <button>
          <img src={googleIconImg} alt="logo do google" />
        </button>
        <div>ou entre em uma sala</div>
        <form>
          <Input
            value={{}}
            onChange={() => {}}
            placeholder="Digite o código da sala"
          />
          <Button type="submit" onCLick={() => {}}>
            Entra na sala
          </Button>
        </form>
      </div>
    </main>
  </div>
);