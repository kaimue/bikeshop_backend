import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  products: Array,
  shippingCosts: Number,
  totalPrice: Number,
});

const user = mongoose.model("product", productSchema);

export default products;
