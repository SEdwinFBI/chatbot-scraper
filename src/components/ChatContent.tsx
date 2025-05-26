import { useEffect, useRef, type FC } from "react"
import Message from "./Message"
import imgChatbot from "../../public/img/chatbot.png"

type ChatContentprop = {
  messages: {
    message: string,
    typeAlign: string,
    isChatbot: boolean
  }[],
  loading: boolean
}

const ChatContent: FC<ChatContentprop> = ({ messages, loading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Efecto para auto-scroll
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  };
  return (
    <section className={`bg-gray-200 py-20 flex-1 flex flex-col lg:px-30 md:px-10 sm:px-10 ${messages.length == 0 ? 'content-center items-center justify-center' : ''} `}>
      {
        messages.length == 0 &&
        <div className="text-center h-max flex flex-col justify-center items-center content-center">
          <img className="w-40 animate-pulse" src={imgChatbot} alt="" />
          <h1 className="items-center content-center text-xl ">
            !Hola, en que te puedo ayudar¡
          </h1>
          <h1 className="items-center content-center text-xs ">
            Version Demo 0.0.0
          </h1>
          <h2 className="text-3xl animate-spin">
            .
          </h2>
        </div>
      }
      {
        messages.map((mes, index) => {
          return (
            <div key={index} className={`m-2 ${mes.typeAlign}  `}>
              <Message message={mes.message} chatbot={mes.isChatbot} />
            </div>
          )
        })
      }
      {
        loading &&
        <div className="animate-pulse">
          <h1 className="text-5xl animate-bounce">...</h1>
        </div>
      }
      <div ref={messagesEndRef} />
    </section>
  )
}

export default ChatContent
