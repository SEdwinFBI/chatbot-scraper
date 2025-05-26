import type { FC } from "react"
import Message from "./Message"

type ChatContentprop={
  mesagges:{
        mensaje: string,
        tipe: string,
         chat:boolean
    }[]
}

const ChatContent:FC<ChatContentprop> = ({mesagges}) => {
  return (
    <section className="bg-blue-950 py-20 flex-1 flex flex-col lg:px-30 md:px-10 sm:px-10">
      {
       mesagges.map(mes=>{
        return (
          <div className= {`m-2 ${mes.tipe} w-auto`}>
                    <Message message={mes.mensaje} chatbot={mes.chat} />
                  </div>
        )
       })
      }
         
    </section>
  )
}

export default ChatContent
