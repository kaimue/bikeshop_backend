import express from "express";
import imageUploader from "../middlewares/imageUploader.js";
import {
  postProduct,
  //updateProduct,
  //deleteProduct,
} from "../controllers/products.js";

const router = express.Router();

router.post("/product-upload", imageUploader.single("image"), postProduct);

export default router;
