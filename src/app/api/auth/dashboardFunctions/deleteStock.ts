"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { User } from "@/app/types/types";

export default async function deleteStockItemFct(user: User, _id: string) {
  connectDB();

  try {
    let newUser = user;

    let modifiedArray = newUser.stock.filter((obj) => obj._id !== _id);

    newUser.stock = modifiedArray;

    const usr = await userModel.findOneAndReplace({ _id: user._id }, newUser);
  } catch (error) {
    console.error("Error: ", error);
  }
}
