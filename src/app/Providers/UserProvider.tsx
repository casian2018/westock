"use client";

import { createContext, useContext, useState } from "react";
import getUserDataFct from "../api/auth/getUserData";

interface Stock {
  item: string;
  link: string;
  quantity: number;
  _id: string;
  price: number;
}

interface People {
  _id: string;
  name: string;
  email: string;
  location: string;
  function: string;
}

interface Objects {
  _id: string;
  name: string;
  location: string;
  quantity: number;
  status: string;
  price: number;
}

interface User {
  _id: string;
  authType: string;
  fullName: string;
  email: string;
  username: string;
  password: string;
  stock: Stock[];
  people: People[];
  objects: Objects[];
}

const UserContext = createContext({
  user: {} as User | null,
  getUserData: async (email: string) => {},
});

function UserProvider({ children }: { children: React.ReactNode }) {
  //   const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<any>(null);

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
