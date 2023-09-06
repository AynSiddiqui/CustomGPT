'use client'
import { db } from "@/firebase";
import { PlusCircleIcon, PlusIcon } from "@heroicons/react/24/outline"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";


function NewChat() {
    const router = useRouter();
    const { data: session } = useSession();
    const createChat = async () => {
        const doc = await addDoc(collection(db, "users", session?.user?.email!, 'chats'), {
            userId: session?.user?.email!,
            createdAt: serverTimestamp(),
            // messsages: []
        });
        router.push(`/chat/${doc.id}`);

    };

    return (
        <div onClick={createChat} className="border-gray-700 border chatRow">
            <PlusCircleIcon className="h-5 w-5" />
            <div>New Chat</div>
        </div>
    )
}

export default NewChat