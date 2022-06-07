import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const orderSchema = new Schema({
  products: Array,
  shippingCosts: 4.99,
  userId: { type: Schema.Types.ObjectId, ref: "Customer" },
  isShipped: { type: Boolean, default: false },
});

const orderModel = model("Order", orderSchema);

export default orderModel;
