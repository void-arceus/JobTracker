import { useState } from "react";
import { useNav } from "../context/NavContext";
import { deleteJob } from "../api/jobs.api.js";
import { useToast } from "../context/ToastContext";
import Spinner from "../Animations/Spinner";

function JobCard({ job, handleJobsChange }) {
  const { handleCurrTabChange, handleJobToUpdate, handleJobEditing } = useNav();
  const { showToast } = useToast();

  const [jobIdToDelete, setJobIdToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteJob(id) {
    try {
      setJobIdToDelete(id);
      setIsLoading(true);

      await deleteJob(id);

      showToast("Job Removed Successfully", "success");
      handleJobsChange(id);
    } catch (err) {
      showToast("Something went wrong!", "error");
    } finally {
      setIsLoading(false);
    }
  }

  const statusStyles = {
    applied: "bg-yellow-100 text-yellow-700",
    interview: "bg-blue-100 text-blue-700",
    rejected: "bg-red-100 text-red-700",
    offer: "bg-green-100 text-green-700",
  };

  return (
    <div className="w-full bg-white/15 backdrop-blur-xl border border-white/20 rounded-xl p-5 flex flex-col gap-4 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
      {/* HEADER */}
      <div className="flex items-center gap-4 border-b border-white/20 pb-3">
        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-500 to-indigo-500 text-white font-bold text-lg">
          {job.companyName?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900">
            {job.position}
          </h2>
          <p className="text-sm text-gray-600">{job.companyName}</p>
        </div>
      </div>

      {/* DETAILS */}
      <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
        <p className="flex items-center gap-2">
          <img src="/location.png" className="h-5" /> {job.location}
        </p>
        <p className="flex items-center gap-2">
          <img src="/briefcase.png" className="h-5" />
          {job.jobType}
        </p>
        <p className="flex items-center gap-2">
          <img src="/calendar.png" className="h-5" /> {job.appliedOn}
        </p>

        <p
          className={`w-fit px-3 py-1 rounded-full text-xs font-medium ${
            statusStyles[job.status]
          }`}
        >
          {job.status}
        </p>
      </div>

      {/* NOTE */}
      {job.note && (
        <p className="text-sm text-gray-700">
          <span className="font-medium text-gray-900">Note:</span> {job.note}
        </p>
      )}

      {/* ACTIONS */}
      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={() => {
            handleCurrTabChange("add");
            handleJobEditing(true);
            handleJobToUpdate(job);
          }}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-medium shadow-md shadow-purple-500/30 transition hover:cursor-pointer"
        >
          Edit
        </button>

        <button
          onClick={() => handleDeleteJob(job._id)}
          className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl text-sm font-medium transition hover:cursor-pointer"
        >
          {jobIdToDelete === job._id && isLoading && (
            <Spinner isLoading={isLoading} />
          )}
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;
