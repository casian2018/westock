"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { User } from "@/app/types/types";

export default async function savePeople(
  user: User,
  person: {
    name: string;
    email: string;
    location: string;
    function: string;
    _id: string;
  }
) {
  connectDB();

  try {
    let newUser = user;
    newUser?.people.push(person);

    const usr = await userModel.findOneAndReplace({ _id: user._id }, newUser);
  } catch (error) {
    console.error("Error: ", error);
  }
}
