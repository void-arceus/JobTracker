const express = require("express");
const jobsController = require("../controllers/jobs.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

const router = express.Router();

router.post("/addJob", authMiddleware.authUser, jobsController.AddJob);
router.get("/getJobs", authMiddleware.authUser, jobsController.GetJobs);

module.exports = router;
