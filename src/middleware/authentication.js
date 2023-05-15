import jwt from "jsonwebtoken";
import UserModel from "../models/userModels.js";
import routeRoles from "./routeRoles.js";

const authorizedUser = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      const token = authorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .send({ status: "failed", message: "access denied!" });
      }
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await UserModel.findById(userID).select("-password");
      const userRole = user.role;
      const requiredRoles = routeRoles[req.path];

      if (!requiredRoles || requiredRoles.includes(userRole)) {
        req.user = user;
        return next();
      }
      return res
        .status(403)
        .send({ status: "failed", message: "access denied!" });
    } catch (error) {
      return res
        .status(403)
        .send({ status: "failed", message: "access denied!" });
    }
  } else {
    return res
      .status(401)
      .send({ status: "failed", message: "access denied!" });
  }
};

export { authorizedUser };
