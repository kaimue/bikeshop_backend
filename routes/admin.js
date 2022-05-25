import express from "express";
import { multerUpload } from "../controllers/multerUpload.js";

const router = express.Router();

router.post("/picture-upload", multerUpload.single("image"), (req, res) => {
  console.log(req.file);
});

export default router;
