import express from "express";
import { firebaseUpload } from "../controllers/firebaseUpload.js";
import { multerUpload } from "../controllers/multerUpload.js";

const router = express.Router();

router.post("/picture-upload", multerUpload, firebaseUpload);

export default router;
