import { DocumentData } from "firebase/firestore"
type Props = {
    message: DocumentData;
}


function Message({ message }: Props) {
    const isBot = message.user._id === 'ChatGPT';
    return (
        <div className={`py-2 text-white ${isBot && "bg-slate-600"}`}>
            <div className="flex space-x-5 py-4 px-10 max-w-2xl mx-auto">
                <img className="h-8 w-8 rounded-full" src={message.user.avatar} alt="" />
                <p className="pt-1 text-sm">{message.text}</p>
            </div>
        </div>
    )
}

export default Message