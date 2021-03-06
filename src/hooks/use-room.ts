import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type FirebaseQuestion = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isHighlighted: boolean;
    isAnswer: boolean;
  }
>;

type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isHighlighted: boolean;
  isAnswer: boolean;
};

export const useRoom = (roomId: string) => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([] as QuestionType[]);

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);
    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const fiebaseQuestions: FirebaseQuestion = databaseRoom.questions ?? {};
      const parsedQuestions = Object.entries(fiebaseQuestions).map(
        ([key, value]) => ({
          id: key,
          content: value.content,
          author: value.author,
          isAnswer: value.isAnswer,
          isHighlighted: value.isHighlighted,
        })
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [roomId]);

  return { questions, title };
};
