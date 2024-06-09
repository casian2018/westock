import NextAuth from "next-auth/next";
import { options } from "./options";

const handeler = NextAuth(options);

export { handeler as GET, handeler as POST };
