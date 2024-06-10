"use client";

import { createContext, useContext, useEffect, useState } from "react";
import getUserDataFct from "../api/auth/getUserData";
import { User } from "@/app/types/types";
import { useSession } from "next-auth/react";

const UserContext = createContext({
  user: {} as User | null,
  getUserData: async () => {},
  loading: false,
  setLoading: (loading: boolean) => {},
});

function UserProvider({ children }: { children: React.ReactNode }) {
  //   const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const session = useSession();

  const getUserDataByEmail = async (email: string) => {
    const usrs = await getUserDataFct(email);

    setUser(JSON.parse(usrs || "{}"));
  };

  const getUserData = async () => {
    await getUserDataByEmail(session.data?.user?.email || "");
  };

  useEffect(() => {
    let fct = async () => {
      if (session.status === "authenticated") {
        setLoading(true);
        await getUserDataByEmail(session.data?.user?.email || "");
        setLoading(false);
      }
      console.log(session);
    };

    fct();
  }, [session.status]);

  return (
    <UserContext.Provider value={{ user, getUserData, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, UserContext, useUser };
