import React, { useState } from 'react'

const ChatMesagges = ({ setmes, mes }) => {

    const [mesagge, setMesagge] = useState("")

    const handleSendMesagge = () => {
        setmes(mesagge)
        setMesagge("")
    }
    return (
        <div className='bottom-0 h-20 w-full bg-blue-800 fixed rounded-t-lg text-white'>
            <div className='flex w-full h-full items-center gap-3 justify-center'>

                <input className='lg:w-150 md:w-140 sm:w-100  xs:w-auto h-10 rounded-2xl bg-blue-500 p-2 border-none'
                    onChange={(e) => setMesagge(e.target.value)}
                    value={mesagge}
                    type="text" name="" id="" placeholder='Escribe...' />


                <button className='bg-blue-500 active:opacity-35 rounded-2xl p-2'
                    onClick={handleSendMesagge}
                >
                    Enviar
                </button>

            </div>
        </div>
    )
}

export default ChatMesagges
