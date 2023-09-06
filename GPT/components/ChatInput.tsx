'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { use, useRef, useState } from "react";

type Props = {
    chatId: string;
}

function ChatInput({ chatId }: Props) {
    const [prompt, setPrompt] = useState('');
    // write a use ref hook to get the input value using useRef
    const inputRef = useRef(null);
    const { data: session } = useSession();
    const onClick = (e) => {
        //prevent default
        e.preventDefault();
        console.log(inputRef.current.value);
    }

    const handleInputChange = () => {
        const inputValue = inputRef.current.value;
        const submitButton = document.getElementById('sendButton');

        if (inputValue === '') {
            submitButton!.disabled = true;
        } else {
            submitButton!.disabled = false;
        }
    };

    return (
        <div className="bg-slate-600 text-gray-300 rounded-lg text-sm 
         ">
            <form className="p-5 space-x-5 rounded-lg flex">
                <input type="text"
                    className="bg-transparent flex-1 focus:outline-none disabled:cursor-not-allowed
                    disabled:text-gray-300 font-bold"
                    // value={prompt}
                    disabled={!session}
                    onChange={handleInputChange}
                    placeholder="Type a message"
                    ref={inputRef} />
                <button
                    id="sendButton"
                    disabled
                    onClick={onClick} type="submit"
                    className=" hover:opacity-60 bg-[#5bbc7193]
                    px-4 py-2 text-white font-bold "
                >
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                </button>
            </form>
            <div>
                {/* Modal Selection */}

            </div>
        </div>
    )
}

export default ChatInput