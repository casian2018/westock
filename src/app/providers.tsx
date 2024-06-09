"use client";

import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./Providers/UserProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <UserProvider>{children}</UserProvider>
    </SessionProvider>
  );
}
