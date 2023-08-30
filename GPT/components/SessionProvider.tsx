'use client'

import { SessionProvider as Provider } from "next-auth/react";
import { Session } from "next-auth";
type Props = {
  session: Session | null;
  children: React.ReactNode;
}

function SessionProvider({ children, session }: Props) {
  return (
    <Provider>
      {children}
    </Provider>
  )
};

export default SessionProvider