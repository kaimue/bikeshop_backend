import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  products: Array,
  shippingCosts: Number,
  totalPrice: Number,
  userId: String,
});

const orderModel = model("Order", orderSchema);

export default orderModel;
