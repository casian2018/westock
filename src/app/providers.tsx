"use client";

import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./Providers/UserProvider";
import LoadingScreen from "./components/LoadingScreen";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <UserProvider>
        <LoadingScreen>{children}</LoadingScreen>
      </UserProvider>
    </SessionProvider>
  );
}
