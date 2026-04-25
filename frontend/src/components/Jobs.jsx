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
    <section className="h-screen w-full p-4 pb-18 lg:pt-18 overflow-auto">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner isLoading={isLoading} />
        </div>
      ) : (
        <div className={`h-full w-full flex flex-col items-start gap-6`}>
          <div className="w-full text-slate-100 text-3xl font-semibold">
            <h1 className="text-2xl md:text-4xl font-semibold">All Jobs</h1>
          </div>
          {/* filter div */}
          <div className="w-full flex items-center gap-4">
            <h2 className="text-slate-100 text-md  md:text-lg font-medium">
              Filter:
            </h2>
            <div>
              <select className="text-slate-100 p-2 border-2 border-slate-400 rounded-lg cursor-pointer">
                <option value="all">All</option>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="rejected">Rejected</option>
                <option value="offer">Offer</option>
              </select>
            </div>
          </div>
          <div className="h-full w-full pb-10">
            {jobData.length > 0 ? (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
                <JobCard
                  jobData={jobData}
                  handleJobsChange={handleJobsChange}
                />
              </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <h1 className="text-slate-400 text-xl md:text-6xl font-bold">
                  No Data Found
                </h1>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Jobs;
