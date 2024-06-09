import { createContext, useState } from "react";
import connectDB from "../dbConfig/db";
import { userModel } from "../dbConfig/models";

const UserContext = createContext(null);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);

  const getUserData = async (email: string) => {
    "use server";

    connectDB();

    try {
      const users = await userModel.findOne({ email: email });
      setUser(users);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
}
