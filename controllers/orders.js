import orderModel from "../models/order.js";
import { ErrorResponse } from "../utils/errorResponse.js";

const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    if (!orders) throw new ErrorResponse("No orders found!");
    res.json(orders);
  } catch (error) {
    next(error);
  }
};
