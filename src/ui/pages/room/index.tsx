import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Header, Question } from "../../components";
import { useAuth, useRoom } from "../../../hooks";
import { database } from "../../../services/firebase";

import "./style.scss";

export const Room = () => {
  const { user } = useAuth();
  const { id } = useParams<{ id: string }>();
  const { questions, title } = useRoom(id);

  const [newQuestion, setNewQuestion] = useState("");

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === "") return;

    if (!user) throw new Error("você deve estar logado");

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswer: false,
    };

    await database.ref(`rooms/${id}/questions`).push(question);
    setNewQuestion("");
  };

  return (
    <>
      <Header id={id} />
      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span> {questions.length} Pergunta(s)</span>}
        </div>
        <form onSubmit={handleSendQuestion}>
          <textarea
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
            placeholder="o que você quer perguntar?"
          />

          <footer className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>.
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </footer>
        </form>
        <div className="question-list">
          {questions.map(({ id, author, content }) => (
            <Question key={id} author={author} content={content} />
          ))}
        </div>
      </main>
    </>
  );
};
