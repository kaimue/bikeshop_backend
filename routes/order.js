import express from "express";
import { getOrdersByUserId, postOrders } from "../controllers/order.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import router from "./products.js";

router.post("/order", verifyToken, postOrders);

router.get("/:id", verifyToken, getOrdersByUserId);

export default router;
