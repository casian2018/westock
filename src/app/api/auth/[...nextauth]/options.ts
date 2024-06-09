import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username: ",
          type: "text",
          placeholder: "Jeg cacat",
        },
        password: {
          label: "Password: ",
          type: "password",
        },
      },
      async authorize(credentials) {
        await connectDB();

        let pass = credentials?.password as string;
        let user = credentials?.username as string;

        try {
          const users = await userModel.findOne({ username: user });
          if (!users) {
            return null;
          }

          if (bcrypt.compareSync(pass, users.password)) {
            return users;
          }

          return null;
        } catch (error) {
          return null;
          console.error("Error: ", error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
