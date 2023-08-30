'use client'
import { signIn } from "next-auth/react"
import { Button } from "./ui/button"

function Login() {
    return (
        <div className="bg-[#0f7e53] h-screen w-screen text-center flex flex-col items-center justify-center">
            <h1>MAIN MAN</h1>
            <Button onClick={() => signIn("google")}
                variant="outline" className="bg-transparent
                border-black hover:bg-[#55c29371]">
                <p className="animate-pulse">Sign In to use</p>
            </Button>
        </div>
    )
}

export default Login