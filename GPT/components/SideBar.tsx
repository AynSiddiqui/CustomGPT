import NewChat from "./NewChat"

function SideBar() {
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
        </div>
    )
}

export default SideBar