// Feb 07-11, 2025

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
//
import connectDB from "./config/db.js";

const app = express();

// dotenv config
dotenv.config();

// database
connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => res.send("Project set-up done👍🏼"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
