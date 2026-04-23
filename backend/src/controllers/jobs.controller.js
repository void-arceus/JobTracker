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

async function UpdateJob(req, res) {
  try {
    const { jobId, data } = req.body;
    if (!jobId || !data || Object.keys(data).length === 0) {
      return res.status(400).json({ message: "Missing Data" });
    }
    const updatedData = {};
    const validUpdates = [
      "companyName",
      "position",
      "appliedOn",
      "status",
      "location",
      "jobType",
      "note",
    ];
    for (let key of validUpdates) {
      if (data[key] !== undefined) {
        updatedData[key] = data[key];
      }
    }

    if (Object.keys(updatedData).length === 0) {
      return res.status(404).json({ message: "Data not provided" });
    }

    const updatedJob = await jobsModel.findOneAndUpdate(
      { _id: jobId, userId: req.user._id },
      { $set: updatedData },
      { new: true },
    );

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    return res
      .status(200)
      .json({ message: "Job Updated Successfully", data: updatedJob });
  } catch (err) {
    console.error(err);
    return res.status(500).json();
  }
}

async function DeleteJob(req, res) {
  try {
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({ message: "Bad Request" });
    }
    const deleteJob = await jobsModel.findByIdAndDelete({ _id: jobId });
    if (!deleteJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    return res.status(200).json({ message: "Job Deleted Successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { AddJob, GetJobs, UpdateJob, DeleteJob };
