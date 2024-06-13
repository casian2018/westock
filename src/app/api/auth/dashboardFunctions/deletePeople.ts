"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { User } from "@/app/types/types";

export default async function deletePeopleFct(user: User, _id: string) {
  connectDB();

  try {
    let newUser = user;

    let modifiedArray = newUser.people.filter((obj) => obj._id !== _id);

    newUser.people = modifiedArray;

    const usr = await userModel.findOneAndReplace({ _id: user._id }, newUser);
  } catch (error) {
    console.error("Error: ", error);
  }
}
