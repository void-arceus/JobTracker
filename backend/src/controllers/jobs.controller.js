const jobsModel = require("../models/jobs.model");

async function AddJob(req, res) {
  try {
    const {
      companyName,
      position,
      appliedOn,
      status,
      location,
      jobType,
      note = "n/a",
    } = req.body;
    if (
      !companyName ||
      !position ||
      !appliedOn ||
      !status ||
      !location ||
      !jobType
    ) {
      return res.status(401).json({ message: "Missing Credentials" });
    }
    const newJob = await jobsModel.create({
      userId: req.user._id,
      companyName: companyName,
      position: position,
      appliedOn: appliedOn,
      status: status,
      location: location,
      jobType: jobType,
      note: note,
    });
    return res
      .status(201)
      .json({ message: "Job Added Successfully!", data: newJob });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function GetJobs(req, res) {
  try {
    const jobs = await jobsModel.find({ userId: req.user._id });
    return res
      .status(200)
      .json({ message: "Data fetched successfully", data: jobs });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { AddJob, GetJobs };
