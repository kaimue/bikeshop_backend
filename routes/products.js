import express from "express";
import { getProducts, getProductByTitle } from "../controllers/products.js";

const router = express.Router();

router.route("/products").get(getProducts);

router.route("/products/search").get(getProductByTitle);

export default router;
