import express from "express";
import { login, signup, getUser } from "../controllers/users.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.get("/me", verifyToken, getUser);

export default router;
