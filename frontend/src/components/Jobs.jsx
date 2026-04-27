import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { getUserJobs } from "../api/jobs.api.js";
import Spinner from "../Animations/Spinner";
import { useToast } from "../context/ToastContext";

function Jobs() {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    getJobs();
  }, []);

  function handleJobsChange(id) {
    setJobData((prev) => prev.filter((job) => job._id !== id));
  }

  async function getJobs() {
    try {
      setIsLoading(true);
      const jobs = await getUserJobs();
      setJobData(jobs);
    } catch (err) {
      setIsLoading(false);
      showToast("Something went wrong", "error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="w-full p-4 lg:pt-20 flex flex-col gap-6">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner isLoading={isLoading} />
        </div>
      ) : (
        <div className={`h-full w-full flex flex-col items-start gap-6`}>
          <div className="w-full flex items-center justify-between">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
              Your Jobs
            </h1>
          </div>
          {/* filter div */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-gray-300 px-4 py-2 rounded-xl w-fit">
            <div className="w-full flex items-center gap-3">
              <p className="text-sm text-gray-700 font-medium">Filter:</p>
              <select className="bg-white/30 backdrop-blur-md border border-gray-300 text-gray-900 px-3 py-2 rounded-lg cursor-pointer outline-none focus:ring-2 focus:ring-violet-500 transition">
                <option value="all">All</option>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="rejected">Rejected</option>
                <option value="offer">Offer</option>
              </select>
            </div>
          </div>
          {jobData.length > 0 ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-200">
              {jobData.map((job) => (
                <JobCard
                  key={job._id}
                  job={job}
                  handleJobsChange={handleJobsChange}
                />
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center mt-10 text-gray-700 gap-2">
              <p className="text-lg font-medium">No jobs added yet</p>
              <p className="text-sm">Start tracking your applications 🚀</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Jobs;
