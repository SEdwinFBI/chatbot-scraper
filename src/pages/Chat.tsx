import { useEffect, useState } from "react"
import ChatContent from "../components/ChatContent"
import ChatHeader from "../components/ChatHeader"
import ChatMessage from "../components/ChatMessages"
import MainLayout from "../layout/MainLayout"
import { postQuestion } from '../api/PostApi';


const Chat = () => {
    const [chat, setChat] = useState("")
    const [isLoading, setIsLoading]=useState(false)
    
    const [response, setResponse] = useState("");
    const [messages, setMessages] = useState<{
        message: string
        typeAlign: string,
        isChatbot: boolean
    }[]>([])

    const question = async () => {
        setIsLoading(true);
        const response = await postQuestion(chat)
        setResponse(response)

    }
    useEffect(() => {
        if (chat != "") {
            question().then(
                ()=>setIsLoading(false)
            )
        }
    }, [chat])


    useEffect(() => {
        if (chat != "") {
            setMessages((prev) => [
                ...prev, {
                    message: chat,
                    typeAlign: "self-end",
                    isChatbot: false,
                }
            ])
        }
    }, [chat])
    useEffect(() => {
        if (response != "") {
            setMessages((prev) => [
                ...prev, {
                    message: response,
                    typeAlign: "self-start",
                    isChatbot: true,
                }
            ])
        }
    }, [response])

    return (
        <MainLayout>
            <ChatHeader />
            <ChatContent messages={messages} loading={isLoading} />
            <ChatMessage setInChat={setChat} />
        </MainLayout>
    )
}

export default Chat
