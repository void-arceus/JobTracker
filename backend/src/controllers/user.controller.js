const userModel = require("../models/user.model");

async function UpdateUserProfile(req, res) {
  try {
    const { data } = req.body;
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ message: "No date provided" });
    }
    const validUpdates = ["username", "email", "role", "about", "location"];
    const updatedData = {};
    for (let key of validUpdates) {
      if (data[key] !== undefined) {
        updatedData[key] = data[key];
      }
    }
    const updateProfile = await userModel.findOneAndUpdate(
      { _id: req.user._id },
      { $set: updatedData },
      { new: true },
    );
    if (!updateProfile) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "Profile Updated Successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { UpdateUserProfile };
