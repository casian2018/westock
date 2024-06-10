"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";

export default async function getUserDataFct(email: string) {
  connectDB();

  try {
    let users = await userModel.findOne({ email: email });
    users._id = users._id.toString();

    return JSON.stringify(users);
  } catch (error) {
    console.error("Error: ", error);
  }
}
