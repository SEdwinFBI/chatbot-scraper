import { useEffect, useState } from "react"
import ChatContent from "../components/ChatContent"
import ChatHeader from "../components/ChatHeader"
import ChatMesagges from "../components/ChatMesagges"
import MainLayout from "../layout/MainLayout"
import { postQuestion } from '../api/PostApi';


const Chat = () => {
    const [mes, setMes] = useState("")
    const [res, setRes] = useState("");
    const [messages, setMessages] = useState<{
        mensaje: string
        tipe: string,
         chat:boolean
    }[]>([])
    console.log(mes)
    const question = async () => {

        const response = await postQuestion(mes)
        setRes(response)
    }
    useEffect(() => {
        if (mes != "") {
            question();
        }
    }, [mes])


    useEffect(() => {
        if (mes != "") {
            setMessages((prev) => [
                ...prev, {
                    mensaje: mes,
                    tipe: "self-end",
                    chat:false,
                }
            ])
        }
    }, [mes])
    useEffect(() => {
       if(res!=""){
         setMessages((prev) => [
            ...prev, {
                mensaje: res,
                tipe: "self-start",
                     chat:true,
            }
        ])
       }
    }, [res])

    return (
        <MainLayout>
            <ChatHeader />
            <ChatContent mesagges={messages} />
            <ChatMesagges setmes={setMes} mes={mes} />
        </MainLayout>
    )
}

export default Chat
