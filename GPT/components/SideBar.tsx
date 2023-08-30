'use client'
import NewChat from "./NewChat"
import { useSession, signOut } from "next-auth/react"

function SideBar() {
    const { data: session } = useSession();
    return (

        <div className="flex flex-col p-2 h-screen">
            <div className="flex-1">
                {/*New*/}
                <NewChat />
                <div>
                    {/* Modal */}
                </div>
                {/* Chat Rows*/}


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