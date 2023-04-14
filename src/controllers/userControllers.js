import UserModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const register = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, role } =
    req.body;
  try {
    if (!email || !firstName || !lastName || !password || !confirmPassword) {
      return res.status(400).json({
        message: "Please fill all the required fields",
      });
    }
    if (password === !confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }
    const users = await UserModel.findOne({ email });
    if (users) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await hashPassword(password);
    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role || "STUDENT",
    });
    await user.save();
    const accessToken = jwt.sign(
      { userID: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    const refreshToken = jwt.sign(
      { userID: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "3d",
      }
    );
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;

    res.status(200).json({
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
  }
};

const validatePassword = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({
        message: "Please fill all the required fields",
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Email does not exist",
      });
    }
    const validPassword = await validatePassword(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Password is not correct",
      });
    }
    const accessToken = jwt.sign(
      { userID: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    const refreshToken = jwt.sign(
      { userID: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "3d",
      }
    );

    await UserModel.findByIdAndUpdate(user._id);
    res.status(200).json({
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
};
