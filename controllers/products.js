import product from "../models/product.js";

const getProducts = async (req, res) => {
  try {
    const products = await product.find({});
    await res.json(products);
  } catch (error) {
    res.status(500).send("Error getting products");
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const products = await product.find({});
    await res.json(products);
  } catch (error) {
    res.status(500).send("Error getting products");
  }
};

export { getProducts, getSingleProduct };
