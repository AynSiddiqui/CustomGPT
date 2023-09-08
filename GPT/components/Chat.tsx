'use client'
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";

type Props = {
    id: string;
}

function Chat({ id }: Props) {
    const { data: session } = useSession();
    const [messages] = useCollection(session &&
        query(
            collection(db, "users", session?.user?.email!, 'chats', id, 'messages'),
            orderBy('createdAt', 'asc')
        ));
    return (
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
            {messages?.docs.map((message) => (
                <Message key={message.id}
                    message={message.data()}
                />)
            )}
        </div>
    )
}

export default Chat