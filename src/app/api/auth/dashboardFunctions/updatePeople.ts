"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { User } from "@/app/types/types";

export default async function updatePeopleFct(
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

    let modifiedArray = newUser.people.map((obj) => {
      if (obj._id === person._id) {
        return {
          ...obj,
          name: person.name,
          email: person.email,
          location: person.location,
          function: person.function,
        };
      }
      return obj;
    });

    newUser.people = modifiedArray;

    const usr = await userModel.findOneAndReplace({ _id: user._id }, newUser);
  } catch (error) {
    console.error("Error: ", error);
  }
}
