import { Button, Header } from "../../components"

import './room.scss'

export const Room = () => {
  return (
    <>
      <Header/>
      <main className="content">
        <div className="room-title">
         <h1>Sala react e QA</h1>
          <span>4 Perguntas</span>
        </div>
        <form>
          <textarea 
         
          placeholder="o que você quer perguntar?"
          />

          <footer className="form-footer">
            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            <Button type="submit">
              Enviar pergunta 
            </Button>
          </footer>  
        </form>
      </main>
    </>
  )
}