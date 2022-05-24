import product from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await product.find({});
    await res.json(products);
  } catch (error) {
    res.status(500).send("Error getting products");
  }
};
