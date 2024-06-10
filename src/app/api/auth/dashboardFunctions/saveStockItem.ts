"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { User } from "@/app/types/types";

export default async function saveStockItemFct(
  user: User,
  stockItem: {
    item: string;
    link: string;
    quantity: number;
    price: number;
    _id: string;
  }
) {
  connectDB();

  try {
    let newUser = user;
    newUser?.stock.push(stockItem);

    const usr = await userModel.findOneAndReplace({ _id: user._id }, newUser);
  } catch (error) {
    console.error("Error: ", error);
  }
}
