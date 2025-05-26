import ChatContent from "../components/ChatContent"
import ChatHeader from "../components/ChatHeader"
import ChatMesagges from "../components/ChatMesagges"
import MainLayout from "../layout/MainLayout"


const Chat = () => {
    return (
        <MainLayout>
            <ChatHeader/>
            <ChatContent/>
            <ChatMesagges/>
        </MainLayout>
    )
}

export default Chat
