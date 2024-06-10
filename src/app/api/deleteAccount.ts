import { signOut } from "next-auth/react";
import connectDB from "../dbConfig/db";
import { userModel } from "../dbConfig/models";

export default async function deleteAccount(userId: string) {
  await connectDB();

  try {
    const result = await userModel.deleteOne({ _id: userId });

    if (result.deletedCount === 1) {
      signOut({
        redirect: true,
        callbackUrl: "/",
      });
      return { message: "Account deleted successfully" };
    } else {
      return { message: "User not found" };
    }
  } catch (error) {
    console.error("Error deleting account:", error);
    return { message: "Internal server error" };
  }
}
