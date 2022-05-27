import customerModel from "../models/customer.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const found = await customerModel.findOne({ email }).select("+password");
    if (!found) throw new Error("Email not found");

    const match = await bcrypt.compare(password, found.password);

    if (!match) throw new Error("Password incorrect");

    const token = jwt.sign(
      { id: found._id, email: found.email },
      process.env.JWT_SECRET,
      { expiresIn: "168h" }
    );
    res.send("You are logged in");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const signup = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    console.log(email, password);
    const found = await customerModel.findOne({ email: email });
    if (found) throw new Error("User already exists");

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
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { login, signup };
