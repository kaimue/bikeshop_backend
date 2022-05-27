import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  img: {
    //reference to firebase
  },
  categorie: String,
});

const product = model("Product", productSchema);

export default product;
