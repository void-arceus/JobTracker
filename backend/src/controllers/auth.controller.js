const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function RegisterUser(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Missing Credentials" });
    }
    const normalizeEmail = email.toLowerCase();

    // verify unique user
    const isAlreadyUser = await userModel.findOne({ email: normalizeEmail });
    if (isAlreadyUser) {
      return res
        .status(409)
        .json({ message: "This email is already linked to another account." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      username: username,
      email: normalizeEmail,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token);
    return res.status(201).json({
      message: "User Created Successfully!",
      data: user,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
}

async function LoginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res
        .status(401)
        .json({ message: "Missing or Invalid Credentials" });
    }

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token);
    return res.status(200).json({
      message: "Logged In Successfully!",
      data: { username: user.username },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
}

function LogoutUser(req, res) {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout Successfully!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
}

async function GetCurrentUser(req, res) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(404).json({ message: "User not found" });
    }
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    if (!verify) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = await userModel.findOne({ _id: verify.userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User found",
      data: {
        username: user.username,
        email: user.email,
        location: user.location,
        role: user.role,
        about: user.about,
      },
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = { RegisterUser, LoginUser, LogoutUser, GetCurrentUser };
