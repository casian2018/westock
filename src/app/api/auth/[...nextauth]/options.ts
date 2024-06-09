import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
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
          console.error("Error: ", error);
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  //   pages: {
  //     signIn: "/login",
  //   },
};
