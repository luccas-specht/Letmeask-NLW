import { useHistory } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

import { useAuth } from "../../hooks";
import { Input, Button, AsideBanner } from "../../components";

import "./home.scss";

export const Home = () => {
  const { push } = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const handleCreateRow = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    push("/rooms/new");
  };

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
};
