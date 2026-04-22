const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", authController.RegisterUser);
router.post("/login", authController.LoginUser);
router.post("/logout", authController.LogoutUser);

module.exports = router;
