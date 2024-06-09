"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import bcrypt from "bcryptjs";

export default async function register(
  fullName: string,
  email: string,
  username: string,
  password: string
) {
  connectDB();

  try {
    let users;
    users = await userModel.find({ username: username });
    if (users.length > 0) {
      return "Username already exists";
    }

    users = await userModel.find({ email: email });
    if (users.length > 0) {
      return "Email already exists";
    }

    let encPass = bcrypt.hashSync(password, 10);

    let user = new userModel({
      fullName,
      email,
      username,
      password: encPass,
    });

    await user.save();

    return null;
  } catch (error) {
    console.error("Error: ", error);
    return JSON.stringify(error);
  }
}
