import express from "express";
import { getProducts, getSingleProduct } from "../controllers/products.js";

const router = express.Router();

router.route("/products").get(getProducts);

router.route("/products/:title").get(getSingleProduct);

export default router;
