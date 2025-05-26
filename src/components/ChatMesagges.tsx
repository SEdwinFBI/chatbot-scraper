import React from 'react'

const ChatMesagges = () => {
    return (
        <div className='bottom-0 h-20 w-full bg-blue-800 fixed rounded-t-lg text-white'>
          <div className='flex w-full h-full items-center justify-evenly'>
              
                <input className='w-100 h-10 rounded-2xl bg-blue-500 p-2 border-none' type="text" name="" id="" placeholder='Escribe...' />
          
         
                <button className='bg-blue-500 active:opacity-35 rounded-2xl p-2'>
                    Enviar
                </button>
           
          </div>
        </div>
    )
}

export default ChatMesagges
