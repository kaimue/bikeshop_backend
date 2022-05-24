import mongoose from "mongoose";
const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    userId: String,
    address: {
      city: String,
      zipCode: Number,
      street: String,
      houseNumber: String,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("customer", customerSchema);

export default customer;
