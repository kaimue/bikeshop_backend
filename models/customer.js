import mongoose from "mongoose";
const { Schema, model } = mongoose;

const customerSchema = new Schema(
  {
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
    //username: { type: String, require: true },
    //firstName: { type: String, require: true },
    //lastName: { type: String, require: true },
    //userId: { type: String, require: true, unique: true },
    //address: {
    //  city: { type: String, require: true },
    //  zipCode: { type: String, require: true },
    //  street: { type: String, require: true },
    //  houseNumber: { type: String, require: true },
    //},
  },
  { timestamps: true }
);

const customer = model("Customer", customerSchema);

export default customer;
