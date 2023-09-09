'use client'
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
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
        <>
            {messages?.docs.length === 0
                && (
                    <div className="flex flex-col  text-slate-300 justify-center items-center">
                        <h1 className="pt-10 pb-4 text-2xl font-bold opacity-90"> Type a Prompt to begin</h1>
                        <ArrowDownCircleIcon className=" h-9 w-9 animate-bounce" />

                    </div>
                )}
            <div className="flex-1 overflow-x-hidden overflow-y-auto">
                {messages?.docs.map((message) => (
                    <Message key={message.id}
                        message={message.data()}
                    />)
                )}
            </div>
        </>
    )
}

export default Chat