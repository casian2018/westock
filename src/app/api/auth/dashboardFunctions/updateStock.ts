"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { User } from "@/app/types/types";

export default async function updateStockItemFct(
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

    let modifiedArray = newUser.stock.map((obj) => {
      if (obj._id === stockItem._id) {
        return {
          ...obj,
          item: stockItem.item,
          link: stockItem.link,
          quantity: stockItem.quantity,
          price: stockItem.price,
        };
      }
      return obj;
    });

    newUser.stock = modifiedArray;

    const usr = await userModel.findOneAndReplace({ _id: user._id }, newUser);
  } catch (error) {
    console.error("Error: ", error);
  }
}
