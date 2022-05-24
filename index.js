import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import multer from "multer";
import { initializeApp } from "firebase/app";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const firebaseConfig = {
  apiKey: "AIzaSyDRwMLzn6EAXcSPLGHSzkqJXJksHKnAf6w",

  authDomain: "bikeshopimagestore.firebaseapp.com",

  projectId: "bikeshopimagestore",

  storageBucket: "bikeshopimagestore.appspot.com",

  messagingSenderId: "779167482350",

  appId: "1:779167482350:web:57b242f7ab348825348eff",
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const imgUpload = multer({ storage: storage });

app.use(cors());

const connection = `${process.env.URL}`;

mongoose.connect(connection);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Connected to Mongoose."));

app.use(express.json());
app.use("/", products);

app.listen(`${process.env.PORT}`, () => console.log("server is running"));
