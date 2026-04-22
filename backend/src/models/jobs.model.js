const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    companyName: { type: String, required: true },
    position: { type: String, required: true },
    appliedOn: { type: String, required: true },
    status: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    note: { type: String },
  },
  { timestamps: true },
);

const jobsModel = mongoose.model("Jobs", jobsSchema);

module.exports = jobsModel;
