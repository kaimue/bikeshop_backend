import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  description: String,
  price: Number,
  img: {
    data: Buffer,
    contentType: String,
  },
  categorie: String,
});

const product = mongoose.model("product", productSchema);

export default product;
