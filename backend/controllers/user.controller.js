import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
      const { fullname, email, phoneNumber, password } = req.body;
      if (!fullname || !email || !phoneNumber || !password) {
        return res.status(400).json({
          message: "Something is missing",
          success: false,
        });
      }
  
      // Gmail validation
      if (!email.endsWith("@gmail.com")) {
        return res.status(400).json({
          message: "Only @gmail.com email addresses are allowed.",
          success: false,
        });
      }
  
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          message: "User is already exist with this email!",
          success: false,
        });
      }
      const hashedPassoword = await bcrypt.hash(password, 10);
      await User.create({
        fullname,
        email,
        phoneNumber,
        password: hashedPassoword,
      });
  
      return res.status(201).json({
        message: "Account is created Successfully.",
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  //For Login
  export const login = async (req, res) => {
    try {
      const { email, password} = req.body;
      if (!email || !password ) {
        return res.status(400).json({
          message: "Something is missing",
          success: false,
        });
      }
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          message: "Incorrect email or password",
          success: false,
        });
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({
          message: "Incorrect email or password",
          success: false,
        });
      }

      //token data
      const tokenData = {
        userId: user._id,
      };
      const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });
  
      user = {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
      };
  
      return res.status(200)
        .cookie("token", token, {
          maxAge: 1 * 24 * 60 * 60 * 1000,
          httpsOnly: true,
          sameSite: "strict",
        })
        .json({
            message: `Welcome back ${user.fullname}`,
            user,
            success: true,
          });
    } catch (error) {
      console.log(error);
    }
  };
  
  //For Logout
  export const logout = async (req, res) => {
    try {
      return res.status(200).cookie("token", "", { maxAge: 0 }).json({
        message: "Logged out Successfully.",
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
  };