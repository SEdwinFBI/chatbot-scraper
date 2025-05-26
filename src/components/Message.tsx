import React, { useEffect, useState, type FC } from 'react'


type FormattMessageProps = {
  message: string[];
}

type MessageProps = {
  message:string,
  chatbot: boolean
}

const Message: FC<MessageProps> = ({ message, chatbot }) => {
 const charArray = [message];


  return (

    <div className={`${chatbot == false ? 'bg-yellow-700 text-white min-w-30' : 'text-black w-auto'} rounded-tl-lg  rounded-tr-lg rounded-bl-lg  h-auto p-4  shadow-xl selection:bg-yellow-800 selection:text-white`} >

      {chatbot == true ? <FormattedMessage message={charArray} /> : <h1>{message}</h1>}

    </div>
  )
}


const FormattedMessage: React.FC<FormattMessageProps> = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('');
  let fullText: string = '';
  try {
    fullText = message.join('.')
      .replace(/\n(\d+)\s+/g, '\n\n$1. ')
      .replace(/Q\s?(\d{3})/g, 'Q$1');
  } catch (error) {
    fullText = "Ocurrio un error inesperado, intenta de nuevo mas tarde..."
  }


  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {

        setDisplayedText(prev => prev + fullText.charAt(i));
        if (i == 0) {
          setDisplayedText(prev => prev + fullText.charAt(1));
        }

        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 15); // Velocidad por carácter

    return () => clearInterval(typingEffect);
  }, [fullText]);

  return (
    <div className="whitespace-pre-line">
      {displayedText}
      {displayedText.length < fullText.length - 1 && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
};
export default Message
