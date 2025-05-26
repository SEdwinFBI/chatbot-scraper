import React, { useEffect, useRef, useState, type FC } from 'react'

type ChatMessagesProps={
    setInChat:(message:string)=>void
}

const ChatMessage:FC<ChatMessagesProps> = ({setInChat }) => {

    const [message, setMessage] = useState("")
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleSendMesagge = () => {
        setInChat(message)
        setMessage("")
    }

    //para manejar el evento de enter
    const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMesagge()
        }
    }
    return (
        <div className='bottom-0 h-20 w-full bg-yellow-900 fixed rounded-t-lg text-white'>
            <div className='flex w-full h-full items-center gap-3 justify-center'>

                <input className='lg:w-150 md:w-140 sm:w-100  xs:w-auto h-10 rounded-2xl bg-yellow-800 opacity-95 p-2 border-none'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    ref={inputRef}
                    onKeyDown={handleKeydown}
                    type="text" name="" id="" placeholder='Escribe...' />


                <button className='bg-yellow-800 opacity-95 active:opacity-35 rounded-2xl p-2'
                    onClick={handleSendMesagge}
                >
                    Enviar
                </button>

            </div>
        </div>
    )
}

export default ChatMessage
