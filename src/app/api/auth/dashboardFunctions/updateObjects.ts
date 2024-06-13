"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { User } from "@/app/types/types";

export default async function updateObjectsFct(
  user: User,
  objectsItem: {
    _id: string;
    item: string;
    location: string;
    quantity: number;
    status: string;
    price: number;
  }
) {
  connectDB();

  try {
    let newUser = user;

    let modifiedArray = newUser.objects.map((obj) => {
      if (obj._id === objectsItem._id) {
        return {
          ...obj,
          item: objectsItem.item,
          location: objectsItem.location,
          quantity: objectsItem.quantity,
          status: objectsItem.status,
          price: objectsItem.price,
        };
      }
      return obj;
    });

    newUser.objects = modifiedArray;

    const usr = await userModel.findOneAndReplace({ _id: user._id }, newUser);
  } catch (error) {
    console.error("Error: ", error);
  }
}
