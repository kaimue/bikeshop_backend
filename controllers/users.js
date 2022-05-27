import customer from "../models/customer.js";

const login = (req, res, next) => {
  res.send("login");
};

const signup = async (req, res, next) => {
  const {
    body: { email, password },
  } = req;
  console.log(email, password);
};

export { login, signup };
