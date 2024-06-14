"use server";

import connectDB from "@/app/dbConfig/db";
import { invitedUserModel } from "@/app/dbConfig/models";

export default async function getInvitedUsers(_id: string) {
  connectDB();

  try {
    let invitedUsers;
    invitedUsers = await invitedUserModel.find({ manager: _id });
    return JSON.stringify(invitedUsers);
  } catch (error) {
    console.error("Error: ", error);
  }
}
