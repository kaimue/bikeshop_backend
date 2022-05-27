import productModel from "../models/product.js";

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json(products);
  } catch (error) {
    res.status(500).send("Error getting products");
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const {
      params: { title },
    } = req;
    const product = await productModel.findOne({ title: title });
    res.json(product);
  } catch (error) {
    res.status(500).send("Error getting products");
  }
};

const postProduct = async (req, res, next) => {
  try {
    const {
      body: { title, description },
    } = req;
    console.log(title, description);
    const product = await productModel.create({ title, description });
    res.send("New product got created");
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const {
      body: { id },
    } = req;
    const product = await productModel.deleteOne({ _id: id });
    res.send("Product got deleted");
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};

export { getProducts, getSingleProduct, postProduct, deleteProduct };
