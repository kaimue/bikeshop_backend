import customerModel from "../models/customer.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ErrorResponse } from "../utils/errorResponse.js";

const getUser = async (req, res) => {
  try {
    const customer = await customerModel.find({});
    res.json(customer);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const found = await customerModel.findOne({ email }).select("+password");
    if (!found) throw new ErrorResponse("Email not found");

    const match = await bcrypt.compare(password, found.password);

    if (!match) throw new ErrorResponse("Password incorrect", 401);

    const token = jwt.sign(
      { id: found._id, email: found.email },
      process.env.JWT_SECRET,
      { expiresIn: "168h" }
    );
    res.send(token);
  } catch (error) {
    next(error);
  }
};

const signup = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    console.log(email, password);
    const found = await customerModel.findOne({ email: email });
    if (found) throw new ErrorResponse("User already exists");

    const hash = await bcrypt.hash(password, 5);

    const customer = await customerModel.create({
      email: email,
      password: hash,
    });

    const token = jwt.sign(
      { id: customer._id, email: email },
      process.env.JWT_SECRET,
      { expiresIn: "168s" }
    );
    res.send("New user got created");
  } catch (error) {
    next(error);
  }
};

export { login, signup, getUser };
