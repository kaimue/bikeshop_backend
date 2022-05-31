import express from "express";
import {
  getRandomProducts,
  getProducts,
  searchProducts,
  getProductById,
  getProductsByCategorie,
} from "../controllers/products.js";

const router = express.Router();

router.route("/products").get(getProducts);

router.route("/categorie").get(getProductsByCategorie);

router.route("/products/byId").get(getProductById);

router.route("/randomProducts").get(getRandomProducts);

router.route("/products/search").get(searchProducts);

export default router;
