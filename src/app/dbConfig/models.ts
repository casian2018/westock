"use server";

import mongoose from "mongoose";

const user = new mongoose.Schema({
  authType: {
    type: String,
    required: true,
  },
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
  stock: {
    type: Array,
    required: true,
  },
  people: {
    type: Array,
    required: true,
  },
  objects: {
    type: Array,
    required: true,
  },
});

export const userModel =
  mongoose.models?.users || mongoose.model("users", user);
