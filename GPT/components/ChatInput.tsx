'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { FormEvent, use, useEffect, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "react-hot-toast";
type Props = {
    id: string;
}

function ChatInput({ id }: Props) {
    // const [prompt, setPrompt] = useState('');
    const [val, setVal] = useState('');
    const { data: session } = useSession();

    //TODO: useSWR to get model
    const model = 'text-davinci-003';

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!val) return;
        const input = val.trim();
        setVal('');
        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image!,
            }
        }
        await addDoc(
            collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
            message
        )

        //toast notif loading
        // clear all toasts
        // toast.dismiss();
        const notif = toast.loading('ChatGPT is thinking...');

        await fetch('/api/askQuestion?', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input, id, model, session
            })
        }).then(() => {
            //Toast notif sucess
            toast.success('ChatGPT has responded!', {
                id: notif,
            });
        });
    };
    return (
        <div className="bg-slate-600 text-gray-300 rounded-lg text-sm 
         ">
            <form className="p-5 space-x-5 rounded-lg flex"
                onSubmit={sendMessage}
            >
                <input type="text"
                    className="bg-transparent flex-1 focus:outline-none disabled:cursor-not-allowed
                    disabled:text-gray-300 font-bold"
                    // value={prompt}
                    disabled={!session}
                    onChange={(e) => setVal(e.target.value)}
                    value={val}
                    placeholder="Type a message" />
                <button
                    id="sendButton"
                    disabled={!session || !val}
                    type="submit"
                    className="disabled:opacity-40 hover:opacity-80 bg-[#5bbc72c7]
                    px-4 py-2 text-white font-bold rounded-xl hover:ease-in-out transition-all"
                >
                    <PaperAirplaneIcon className="h-3 w-4 -rotate-45" />
                </button>
            </form>
            <div>
                {/* Modal Selection */}

            </div>
        </div>
    )
}

export default ChatInput