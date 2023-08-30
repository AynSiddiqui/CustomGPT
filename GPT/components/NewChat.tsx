'use client'
import { PlusCircleIcon, PlusIcon } from "@heroicons/react/24/outline"
import { addDoc } from "firebase/firestore";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";


function NewChat() {
    const { data: session } = useSession();
    const createChat = async () => {
        const doc = await addDoc
    }

    return (
        <div onClick={createChat} className="border-gray-700 border chatRow">
            <PlusCircleIcon className="h-5 w-5" />
            <div>New Chat</div>
        </div>
    )
}

export default NewChat