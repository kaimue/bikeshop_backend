import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  products: Array,
  shippingCosts: Number,
  totalPrice: Number,
});

const order = model("Order", orderSchema);

export default order;
