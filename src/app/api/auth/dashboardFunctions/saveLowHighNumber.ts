"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { User } from "@/app/types/types";

export default async function saveLowHighNumberFct(
  user: User,
  lowNr: number,
  highNr: number
) {
  connectDB();

  try {
    let newUser = user;
    newUser.lowNumber = lowNr;
    newUser.highNumber = highNr;

    const usr = await userModel.findOneAndReplace({ _id: user._id }, newUser);
  } catch (error) {
    console.error("Error: ", error);
  }
}
