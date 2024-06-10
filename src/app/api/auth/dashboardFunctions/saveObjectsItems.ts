"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { User } from "@/app/types/types";

export default async function saveObjectsItemFct(
  user: User,
  objectsItem: 
  {
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
    newUser?.objects.push(objectsItem);

    const usr = await userModel.findOneAndReplace({ _id: user._id }, newUser);
  } catch (error) {
    console.error("Error: ", error);
  }
}