import ilustrationImg from "../../../assets/images/illustration.svg";

import "./style.scss";

type Props = {
  title?: string;
  subTitle?: string;
};

export const AsideBanner = ({
  title = "Toda pergunta tem uma resposta.",
  subTitle = "Aprenda e compartilhe conhecimento com outras pessoas",
}: Props) => (
  <aside className="banner">
    <img src={ilustrationImg} alt="imagem_login" />
    <strong>{title}</strong>
    <p>{subTitle}</p>
  </aside>
);
