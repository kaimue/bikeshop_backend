import express from "express";
import imageUploader from "../middlewares/imageUploader.js";
import { postProduct } from "../controllers/products.js";

const router = express.Router();

router.post("/picture-upload", imageUploader.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "Please upload a file" });
  const imgUrl = res.json({ location: req.file.publicUrl });
  postProduct;
});

router.post("/product-upload", imageUploader.single("image"), postProduct);

export default router;
