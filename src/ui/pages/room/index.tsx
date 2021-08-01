import { FormEvent, useState } from "react"
import { useParams } from "react-router-dom"

import { Button, Header } from "../../components"
import { useAuth } from "../../../hooks"
import { database } from "../../../services/firebase"

import './room.scss'
import { useEffect } from "react"

type FirebaseQuestion = Record<string, {
  author: {
    name: string
    avatar: string
  }
  content: string
  isHighlighted: boolean
  isAnswer: boolean
}>

type Question =  {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  isHighlighted: boolean
  isAnswer: boolean
}

export const Room = () => {
  const { user } = useAuth()
  const { id } = useParams<{id: string}>()

  const [newQuestion, setNewQuestion] = useState('')
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState([] as Question[])

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault()

    if(newQuestion.trim() === '') return;

    if(!user) throw new Error('você deve estar logado')

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswer: false
    }

    await database.ref(`rooms/${id}/questions`).push(question);
    setNewQuestion('')
  }

  useEffect(() => {
      const roomRef = database.ref(`rooms/${id}`)
      roomRef.on('value', room => {

        const databaseRoom = room.val()
        const fiebaseQuestions: FirebaseQuestion = databaseRoom.questions ?? {}
        const parsedQuestions = Object.entries(fiebaseQuestions).map(([key, value]) => (
          {
            id: key,
            content: value.content,
            author: value.author,
            isAnswer: value.isAnswer,
            isHighlighted: value.isHighlighted,
          }
        ))
        
        setTitle(databaseRoom.title)
        setQuestions(parsedQuestions)
      })
  }, [id])

  return (
    <>
      <Header id={id}/>
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
                  </div>) :  <span>Para enviar uma pergunta, <button>faça seu login</button>.</span> }
            <Button type="submit" disabled={!user}>
              Enviar pergunta 
            </Button>
          </footer>  
        </form>
      </main>
    </>
  )
}