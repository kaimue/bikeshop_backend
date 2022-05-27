import mongoose from "mongoose";
const { Schema, model } = mongoose;

const customerSchema = new Schema(
  {
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, select: false },
    createdAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
    //username: { type: String, require: true },
    //firstName: { type: String, require: true },
    //lastName: { type: String, require: true },
    userId: { type: String, default: Math.floor(Math.random() * 1000000) },
    //address: {
    //  city: { type: String, require: true },
    //  zipCode: { type: String, require: true },
    //  street: { type: String, require: true },
    //  houseNumber: { type: String, require: true },
    //},
  },
  { timestamps: true }
);

// customerSchema.pre("save", (next) => {
//   email = email.toLowerCase();
//   next();
// });

const customerModel = model("Customer", customerSchema);

export default customerModel;
