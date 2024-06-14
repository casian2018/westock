"use server";

import connectDB from "@/app/dbConfig/db";
import { invitedUserModel } from "@/app/dbConfig/models";

export default async function saveInvitedUser(userInfo: {
  name: string;
  email: string;
  password: string;
  permissions: string;
  dateCreated: string;
  manager: string;
}) {
  connectDB();
  let usr = new invitedUserModel(userInfo);
  usr.save();
}
