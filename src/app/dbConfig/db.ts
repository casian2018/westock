"use server";

import mongoose from "mongoose";

export default async function connectDB() {
  const url = process.env.DB_HOST || "";
  if (!url) {
    console.error("Error: Database URL not found");
    process.exit(1);
  }

  try {
    await mongoose.connect(url);
  } catch (error) {
    console.error("Error: ", error);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;
  dbConnection.once("open", () => {
    console.log("Database connected to: ", url);
  });

  dbConnection.on("error", (error) => {
    console.error("Error: ", error);
  });
}
