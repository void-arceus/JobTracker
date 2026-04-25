import { useState } from "react";
import { addNewJob, getUserJobs, updateJob } from "../api/jobs.api.js";
import { useNav } from "../context/NavContext";
import { useToast } from "../context/ToastContext";
import Spinner from "../Animations/Spinner";

function AddForm() {
  const {
    jobEditing,
    handleJobEditing,
    handleCurrTabChange,
    jobToUpdate,
    handleJobToUpdate,
  } = useNav();

  const [company, setCompany] = useState(
    jobEditing ? jobToUpdate.companyName : "",
  );
  const [position, setPosition] = useState(
    jobEditing ? jobToUpdate.position : "",
  );
  const [location, setLocation] = useState(
    jobEditing ? jobToUpdate.location : "",
  );
  const [job, setJob] = useState(jobEditing ? jobToUpdate.jobType : "");
  const [date, setDate] = useState(jobEditing ? jobToUpdate.appliedOn : "");
  const [note, setNote] = useState(jobEditing ? jobToUpdate.about : "");
  const [status, setStatus] = useState(
    jobEditing ? jobToUpdate.status : "applied",
  );
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObj = Object.fromEntries(formData.entries());
    if (
      !dataObj.companyName ||
      !dataObj.position ||
      !dataObj.location ||
      !dataObj.appliedOn ||
      !dataObj.jobType ||
      !dataObj.status
    ) {
      showToast("Data Missing", "error");
      return;
    }
    try {
      setIsLoading(true);
      if (jobEditing) {
        dataObj._id = jobToUpdate._id;
        await updateJob(dataObj);
        handleJobEditing(false);
        handleJobToUpdate({});
        showToast("Job Updated Successfully", "success");
      } else {
        await addNewJob(dataObj);
        showToast("Job Added Successfully", "success");
      }
      getUserJobs();
      clearInputFields();
      handleCurrTabChange("jobs");
    } catch (err) {
      setIsLoading(false);
      showToast("Something went wrong", "error");
    } finally {
      setIsLoading(false);
    }
  }

  function clearInputFields() {
    setTimeout(() => {
      setCompany("");
      setPosition("");
      setLocation("");
      setJob("");
      setDate("");
      setNote("");
    }, 300);
  }

  function handleCancelJobEdit() {
    clearInputFields();
    handleJobEditing(false);
    handleJobToUpdate({});
    handleCurrTabChange("jobs");
  }

  return (
    <section className="min-h-screen w-full px-2 pt-4 pb-16 lg:px-0 lg:pt-24">
      <div className="h-auto max-w-3xl mx-auto bg-white/15 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
        <h1 className="text-2xl text-gray-800 font-bold text-center">
          Add Job
        </h1>
        <form
          onSubmit={handleFormSubmit}
          className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Company Name</label>
            <input
              name="companyName"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              required
              placeholder="Company Name"
              className="bg-white/30 border border-white/20 text-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none transition duration-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Position </label>
            <input
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              type="text"
              required
              placeholder="Position"
              className="bg-white/30 border border-white/20 text-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none transition duration-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Location</label>
            <input
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              required
              placeholder="Location"
              className="bg-white/30 border border-white/20 text-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none transition duration-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">JobType </label>
            <input
              name="jobType"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              type="text"
              required
              placeholder="Job Type"
              className="bg-white/30 border border-white/20 text-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none transition duration-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Applied On </label>
            <input
              name="appliedOn"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              required
              placeholder="Applied On"
              className="bg-white/30 border border-white/20 text-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none transition duration-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-700">Status </label>
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              placeholder="Position"
              className="bg-white/30 border border-white/20 text-gray-900 p-3.5 rounded-lg focus:ring-2 focus:ring-violet-500 cursor-pointer outline-none transition duration-300"
            >
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 col-span-full">
            <label className="text-xs text-gray-700">Note </label>
            <textarea
              name="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              type="text"
              placeholder="Add a note...(Optional)"
              className="bg-white/30 border border-white/20 text-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none transition duration-300"
            />
          </div>
          <div className="col-span-full flex justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                jobEditing ? handleCancelJobEdit() : clearInputFields();
              }}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 text-gray-800 rounded-lg cursor-pointer"
            >
              {jobEditing ? "Cancel" : "Clear"}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md shadow-purple-500/30 cursor-pointer flex items-center justify-center"
            >
              <Spinner isLoading={isLoading} />
              {jobEditing ? "Update Job" : "Add Job"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default AddForm;
