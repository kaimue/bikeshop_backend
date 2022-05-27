import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  if (req.headers.authorization) {
    const {
      headers: { authorization },
    } = req;

    const token = authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(403).send(err.message);
    }
  } else {
    res.status(403).send("You need to be logged in to see this page");
  }
};
