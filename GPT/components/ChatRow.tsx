'use client'
import { db } from "@/firebase";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { use, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";


type Props = {
    id: string;
};

function ChatRow({ id }: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);
    const [messages] = useCollection(
        collection(db, "users", session?.user?.email!, 'chats', id, 'messages'),
    );
    useEffect(() => {
        if (!pathname) return;
        setActive(pathname.includes(id));
    }, [pathname]);
    // write function to delete inactive chat, when you click on trash icon
    // you will still remain on your current chat, but the chat will be deleted
    // write a conditional statement to check if the chat is active or not
    // if it is active, then delete the chat and redirect to home page
    // if it is not active, then delete the chat and remain on the current chat
    const removeChat = async () => {
        if (pathname?.includes(id)) {
            await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
            router.replace('/');
        } else {
            await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
            //keep router link unchanged
            router.replace(pathname!);
        }
    };
    return (
        <Link
            href={`/chat/${id}`}
            className={`chatRow justify-center 
            ${active && 'bg-gray-700'}`}
        >
            <ChatBubbleLeftIcon className=" justify-start h-5 w-5" />
            <p className="flex-1 hidden md:inline-flex truncate">
                {messages?.docs[messages?.docs.length - 1]?.data().text
                    ||
                    "New Chat"}
            </p>
            <TrashIcon onClick={removeChat} className="h-5 w-5 text-gray-700 hover:text-red-700" />
        </Link >
    )
}

export default ChatRow