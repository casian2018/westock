"use server";

import connectDB from "@/app/dbConfig/db";
import { userModel } from "@/app/dbConfig/models";
import { User } from "@/app/types/types";

import CryptoJS from "crypto-js";

export default async function savePaymentInfo(
  user: User,
  paymentInfo: {
    cardNumber: string;
    expiaryDate: string;
    cvv: string;
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }
) {
  connectDB();

  try {
    let newUser = user;
    newUser.paymentInfo = {
      cardNumber: CryptoJS.AES.encrypt(
        paymentInfo.cardNumber,
        process.env.CRYPTOJS_SECRET || ""
      ).toString(),
      expiaryDate: CryptoJS.AES.encrypt(
        paymentInfo.expiaryDate,
        process.env.CRYPTOJS_SECRET || ""
      ).toString(),
      cvv: CryptoJS.AES.encrypt(
        paymentInfo.cvv,
        process.env.CRYPTOJS_SECRET || ""
      ).toString(),
      firstName: CryptoJS.AES.encrypt(
        paymentInfo.firstName,
        process.env.CRYPTOJS_SECRET || ""
      ).toString(),
      lastName: CryptoJS.AES.encrypt(
        paymentInfo.lastName,
        process.env.CRYPTOJS_SECRET || ""
      ).toString(),
      street: CryptoJS.AES.encrypt(
        paymentInfo.street,
        process.env.CRYPTOJS_SECRET || ""
      ).toString(),
      city: CryptoJS.AES.encrypt(
        paymentInfo.city,
        process.env.CRYPTOJS_SECRET || ""
      ).toString(),
      state: CryptoJS.AES.encrypt(
        paymentInfo.state,
        process.env.CRYPTOJS_SECRET || ""
      ).toString(),
      zip: CryptoJS.AES.encrypt(
        paymentInfo.zip,
        process.env.CRYPTOJS_SECRET || ""
      ).toString(),
      country: CryptoJS.AES.encrypt(
        paymentInfo.country,
        process.env.CRYPTOJS_SECRET || ""
      ).toString(),
    };

    const usr = await userModel.findOneAndReplace({ _id: user._id }, newUser);
  } catch (error) {
    console.error("Error: ", error);
  }
}
