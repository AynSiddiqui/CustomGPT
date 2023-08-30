import { PlusCircleIcon, PlusIcon } from "@heroicons/react/24/outline"

function NewChat() {
    return (
        <div className="border-gray-700 border chatRow">
            <PlusCircleIcon className="h-5 w-5" />
            <div>New Chat</div>
        </div>
    )
}

export default NewChat