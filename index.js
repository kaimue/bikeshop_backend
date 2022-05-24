import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const connection = `mongodb+srv://KaiMue:${process.env.PW}@cluster0.2guyz.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connection);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Connected to Mongoose."));

app.use(express.json());

app.listen(`${process.env.PORT}`, () => console.log("server is running"));
