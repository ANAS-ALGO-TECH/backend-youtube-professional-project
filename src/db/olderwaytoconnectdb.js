//* we write this code directly in the index file, in IIFE. Inside IIFE, we will use
//* "async" call back function and try/catch

//! I don't recommend this code, as index file Will gets massy

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERROR: " + error);
      throw error;
    });

    app.listen(`${process.env.PORT}`, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
})();
