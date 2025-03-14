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
  busniessType: {
    type: String,
    required: false,
  },
  busniessIndustry: {
    type: String,
    required: false,
  },
  busniessLocation: {
    type: String,
    required: false,
  },
  busniessNumber: {
    type: String,
    required: false,
  },
  paymentInfo: {
    type: Object,
    required: true,
  },
  autoPayment: {
    type: Boolean,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  lowNumber: {
    type: Number,
    required: true,
  },
  highNumber: {
    type: Number,
    required: true,
  },
});

const invitedUser = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  permissions: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
});

export const userModel =
  mongoose.models?.users || mongoose.model("users", user);

export const invitedUserModel =
  mongoose.models?.invitedUsers || mongoose.model("invitedUsers", invitedUser);
