"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";

export default async function getUserDataFct(email: string | string[] | undefined, password: string | string[] | undefined, fullName: string | string[] | undefined, username: string | string[] | undefined, authType: string | string[] | undefined, stock: any[] | undefined, people: any[] | undefined, objects: any[] | undefined) {
  connectDB();

  try {
    let users = await userModel.findOne({ email: email });
    users._id = users._id.toString();

    return JSON.stringify(users);
  } catch (error) {
    console.error("Error: ", error);
  }
}
