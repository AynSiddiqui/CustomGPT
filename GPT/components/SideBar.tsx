'use client'
import { collection, orderBy, query } from "firebase/firestore";
import NewChat from "./NewChat"
import { useSession, signOut } from "next-auth/react"
import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";
function SideBar() {
    const { data: session } = useSession();
    const [chats, loading, error] = useCollection(
        session && query(
            collection(db, "users", session.user?.email!, "chats"),
            orderBy('createdAt', 'asc')
        ));

    return (
        <div className="flex flex-col p-2 h-screen">
            <div className="flex-1">
                {/*New*/}
                <NewChat />
                <div>
                    {/* Modal */}
                </div>
                {/* Chat Rows*/}
                {chats?.docs.map((chat) => (
                    <ChatRow key={chat.id} id={chat.id} />
                ))}

            </div>
            {session && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={session.user?.image!}
                    className="h-12 w-12 rounded-full cursor-pointer
                     mx-auto mb-2"
                    onClick={() => signOut()}
                    alt="profile pic" />
            )}
        </div>
    )
}

export default SideBar