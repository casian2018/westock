"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import bcrypt from "bcryptjs";
import { Bungee_Shade } from "next/font/google";

export default async function register(
  fullName: string,
  email: string,
  username: string,
  password: string
) {
  connectDB();

  try {
    let users;
    users = await userModel.find({ username: username });
    if (users.length > 0) {
      return "Username already exists";
    }

    users = await userModel.find({ email: email });
    if (users.length > 0) {
      return "Email already exists";
    }

    let encPass = bcrypt.hashSync(password, 10);

    let busniessLocation = ""; // Declare and initialize the busniessLocation variable
    let busniessNumber = ""; // Declare and initialize the busniessNumber variable
    let busniessIndustry = ""; // Declare and initialize the busniessIndustry variable
    let busniessType = ""; // Declare and initialize the busniessType variable
    let user = new userModel({
      authType: "credentials",
      fullName,
      email,
      username,
      busniessType,
      busniessIndustry,
      busniessLocation,
      busniessNumber,
      password: encPass,
      stock: [],
      people: [],
      objects: [],
      paymentInfo: {
        cardNumber: "",
        expiaryDate: "",
        cvv: "",
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
      autoPayment: true,
      theme: "light",
      lowNumber: 0,
      highNumber: 0,
    });

    await user.save();

    return null;
  } catch (error) {
    console.error("Error: ", error);
    return JSON.stringify(error);
  }
}
