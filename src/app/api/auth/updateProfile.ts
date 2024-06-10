"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { User } from "@/app/types/types";

export default async function updateProfile(
  user: User,
  modified: {
    busniessType: string;
    busniessIndustry: string;
    busniessLocation: string;
    busniessNumber: string;
  }
) {
  connectDB();

  try {
    let newUser = user;
    newUser.busniessType = modified.busniessType;
    newUser.busniessIndustry = modified.busniessIndustry;
    newUser.busniessLocation = modified.busniessLocation;
    newUser.busniessNumber = modified.busniessNumber;

    const usr = await userModel.findOneAndReplace({ _id: user._id }, newUser);
  } catch (error) {
    console.error("Error: ", error);
  }
}
