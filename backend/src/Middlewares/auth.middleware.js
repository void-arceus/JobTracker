const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    if (!verify) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const isUser = await userModel.findOne({ _id: verify.userId });
    if (!isUser) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = isUser;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json("Internal Server Error");
  }
}

module.exports = { authUser };
