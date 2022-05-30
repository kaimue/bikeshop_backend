import productModel from "../models/product.js";
import { ErrorResponse } from "../utils/errorResponse.js";

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    if (!products) throw new ErrorResponse("No products found!");
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getProductByTitle = async (req, res) => {
  try {
    const { q } = req.query;
    const product = await productModel.find({
      title: { $regex: q, $options: "$i" },
    });
    if (!product) throw new ErrorResponse("No product found!");
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const postProduct = async (req, res, next) => {
  try {
    if (!req.file) throw new ErrorResponse("Please upload a file!");
    const {
      body: { title, description },
      file: { publicUrl },
    } = req;
    console.log(req);
    const product = await productModel.create({
      title,
      description,
      imgUrl: publicUrl,
    });
    res.send("New product got created");
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { body } = req;
    const product = await productModel.findOneAndUpdate(id, body);
    res.send("The product got updated");
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const {
      body: { id },
    } = req;
    const product = await productModel.deleteOne({ _id: id });
    res.send("Product got deleted");
  } catch (error) {
    next(error);
  }
};

export { getProducts, getProductByTitle, postProduct, deleteProduct };
