import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

const authenticateUser = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .send({ status: "failed", message: "Unauthorized User, No Token" });
      }
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await UserModel.findById(userID).select("-password");

      return next();
    } catch (error) {
      return res
        .status(403)
        .send({ status: "failed", message: "Unauthorized User" });
    }
  }
};

const authenticateAdmin = async (req, res, next) => {
  const requester = req.decoded.email;
  const user = await userModel.findOne({ email: requester });
  if (user.role === "ADMIN") {
    next();
  } else {
    res.status(403).send({ message: "forbidden" });
  }
};

export { authenticateUser, authenticateAdmin };
