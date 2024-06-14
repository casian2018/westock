"use client";

import { createContext, useContext, useEffect, useState } from "react";
import getUserDataFct from "../api/auth/getUserData";
import { InvitedUser, User } from "@/app/types/types";
import { useSession } from "next-auth/react";
import getInvitedUsers from "../api/auth/dashboardFunctions/getInvitedUsers";

const UserContext = createContext({
  user: {} as User | null,
  invitedUsers: [] as InvitedUser[],
  getUserData: async () => {},
  loading: false,
  setLoading: (loading: boolean) => {},
});

function UserProvider({ children }: { children: React.ReactNode }) {
  //   const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [invitedUsers, setInvitedUsers] = useState<InvitedUser[]>([]);
  const [loading, setLoading] = useState(false);

  const session = useSession();

  const getUserDataByEmail = async (email: string) => {
    const usrs = await getUserDataFct(email);

    setUser(JSON.parse(usrs || "{}"));
  };

  const getInvitedUsersFct = async () => {
    const usrs = await getInvitedUsers(user?._id || "");
    console.log(user?._id);
    setInvitedUsers(JSON.parse(usrs || "[]"));
  };

  const getUserData = async () => {
    setLoading(true);
    await getUserDataByEmail(session.data?.user?.email || "");
    setLoading(false);
  };

  useEffect(() => {
    let fct = async () => {
      if (session.status === "loading") setLoading(true);
      if (session.status === "authenticated") {
        setLoading(true);
        await getUserDataByEmail(session.data?.user?.email || "");
        await getInvitedUsersFct();
        setLoading(false);
      }
      if (session.status === "unauthenticated") {
        setLoading(false);
        setUser(null);
      }
      console.log(session);
    };

    fct();
  }, [session.status]);

  return (
    <UserContext.Provider
      value={{ user, invitedUsers, getUserData, loading, setLoading }}
    >
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
