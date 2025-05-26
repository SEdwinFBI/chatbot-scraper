import React, { useEffect, useState } from 'react'

const Message = ({ message, chatbot }) => {


  return (

    <div className={`${chatbot == false ? 'bg-blue-900' : ''} rounded-tl-lg  rounded-tr-lg rounded-br-lg  h-auto p-4 text-white `} >
     
       {chatbot == true ?   <FormattedMessage message={message} /> : <h1>{message}</h1>}

    </div>
  )
}

interface MessageProps {
  message: string[];
}

const FormattedMessage: React.FC<MessageProps> = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = message.join('.')
    .replace(/\n(\d+)\s+/g, '\n\n$1. ')
    .replace(/Q\s?(\d{3})/g, 'Q$1');

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 10); // Velocidad por carácter

    return () => clearInterval(typingEffect);
  }, [fullText]);

  return (
    <div className="whitespace-pre-line">
      {displayedText}
      {displayedText.length < fullText.length && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
};
export default Message
