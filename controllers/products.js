import productModel from "../models/product.js";
import { ErrorResponse } from "../utils/errorResponse.js";

const getProducts = async (req, res, next) => {
  try {
    const products = await productModel.find({});
    if (!products) throw new ErrorResponse("No products found!");
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const searchProducts = async (req, res, next) => {
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

const getProductById = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const product = await productModel.findById({ _id: id });
    if (!product) throw new ErrorResponse("No product found!");
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const getProductsByCategorie = async (req, res, next) => {
  try {
    const {
      params: { categorie },
    } = req;
    const products = await productModel.find({
      categorie: { $regex: categorie, $options: "$i" },
    });
    if (!products) throw new ErrorResponse("No product found!");
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getRandomProducts = async (req, res, next) => {
  try {
    const products = await productModel.aggregate([{ $sample: { size: 2 } }]);
    if (!products) throw new ErrorResponse("No products found!");
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const postProduct = async (req, res, next) => {
  try {
    if (!req.file) throw new ErrorResponse("Please upload a file!");
    const {
      body: { title, description, price, categorie },
      file: { publicUrl },
    } = req;
    const product = await productModel.create({
      title,
      description,
      imgUrl: publicUrl,
      price,
      categorie,
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

export {
  getRandomProducts,
  getProducts,
  getProductsByCategorie,
  searchProducts,
  getProductById,
  postProduct,
  deleteProduct,
  updateProduct,
};
