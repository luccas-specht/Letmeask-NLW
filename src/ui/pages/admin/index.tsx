import { useParams } from "react-router-dom";

import { Header, Question } from "../../components";
import { useAuth, useRoom } from "../../../hooks";

export const AdminRoom = () => {
  const { id } = useParams<{ id: string }>();
  const { questions, title } = useRoom(id);

  return (
    <>
      <Header id={id} />
      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span> {questions.length} Pergunta(s)</span>}
        </div>
        <div className="question-list">
          {questions.map(({ id, author, content }) => (
            <Question key={id} author={author} content={content} />
          ))}
        </div>
      </main>
    </>
  );
};
