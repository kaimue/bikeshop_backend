import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import products from "./routes/products.js";
import admin from "./routes/admin.js";
import firebaseConfig from "./firebaseConfig.js";

const app = express();

app.use(cors());

const connection = `${process.env.URL}`;

mongoose.connect(connection);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Connected to Mongoose."));

app.use(express.json());
app.use("/", products);
app.use("/admin", admin);

app.listen(`${process.env.PORT}`, () => console.log("server is running"));
