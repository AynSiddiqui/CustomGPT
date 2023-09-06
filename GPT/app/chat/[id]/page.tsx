import Chat from "@/components/Chat"
import ChatInput from "@/components/ChatInput"

type Props = {
    params: {
        id: string;
    }
}

function ChatPage({ params: { id } }: Props) {
    console.log(id);
    return (
        <>
            {/* chat */}
            <Chat id={id} />
            {/* chat input */}
            <ChatInput id={id} />
        </>
    )
}

export default ChatPage