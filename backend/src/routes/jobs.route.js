const express = require("express");
const jobsController = require("../controllers/jobs.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

const router = express.Router();

router.post("/addJob", authMiddleware.authUser, jobsController.AddJob);
router.get("/getJobs", authMiddleware.authUser, jobsController.GetJobs);
router.patch("/updateJob", authMiddleware.authUser, jobsController.UpdateJob);
router.delete(
  "/deleteJob/:id",
  authMiddleware.authUser,
  jobsController.DeleteJob,
);

module.exports = router;
