import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
  products: Array,
  shippingCosts: Number,
  totalPrice: Number,
});

const user = mongoose.model("order", orderSchema);

export default order;
