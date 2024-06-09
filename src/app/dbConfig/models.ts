"use server";

import mongoose from "mongoose";

const user = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const userModel =
  mongoose.models?.users || mongoose.model("users", user);
