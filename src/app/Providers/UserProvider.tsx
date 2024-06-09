"use client";

import { createContext, useContext, useState } from "react";
import getUserDataFct from "../api/auth/getUserData";

interface User {
  _id: string;
  authType: string;
  fullName: string;
  email: string;
  username: string;
  password: string;
  stock: any[];
  people: any[];
  objects: any[];
}

const UserContext = createContext({
  user: {} as User | null,
  getUserData: async (email: string) => {},
});

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const getUserData = async (email: string) => {
    const usrs = await getUserDataFct(email);

    setUser(JSON.parse(usrs || "{}"));
  };

  return (
    <UserContext.Provider value={{ user, getUserData }}>
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
