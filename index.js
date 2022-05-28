import "dotenv/config";
import db from "./db.js";
import express from "express";
import cors from "cors";
import products from "./routes/products.js";
import admin from "./routes/admin.js";
import user from "./routes/user.js";
import { verifyToken } from "./middlewares/verifyToken.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { ErrorResponse } from "./utils/errorResponse.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", products);
app.use("/admin", admin);
app.use("/user", user);

app.use("*", (req, res, next) => {
  next(new ErrorResponse("Site not found"));
});
app.use(errorHandler);

app.listen(`${process.env.PORT}`, () => console.log("server is running"));
