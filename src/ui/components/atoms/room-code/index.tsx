import copyImg from "../../../assets/images/copy.svg";

import "./style.scss";

type Props = {
  code: string;
};

export const RoomCode = ({ code }: Props) => {
  const handleCopyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <button className="room-code" onClick={handleCopyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="codígo copiado" />
      </div>
      <span>Sala {code}</span>
    </button>
  );
};
