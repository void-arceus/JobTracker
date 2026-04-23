const express = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

const router = express.Router();

router.patch(
  "/updateProfile",
  authMiddleware.authUser,
  userController.UpdateUserProfile,
);

module.exports = router;
