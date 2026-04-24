import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { getUserJobs } from "../api/jobs.api.js";
import { useSpinner } from "../context/SpinnerContext";
import Spinner from "../Animations/Spinner";

function Jobs() {
  const [jobData, setJobData] = useState([]);
  const { isLoading, showSpinner } = useSpinner();

  useEffect(() => {
    getJobs();
  }, []);

  function handleJobsChange(id) {
    setJobData((prev) => prev.filter((job) => job._id !== id));
  }

  async function getJobs() {
    try {
      showSpinner(true);
      const jobs = await getUserJobs();
      setJobData(jobs);
    } catch (err) {
      showSpinner(false);
      console.error(err);
    } finally {
      showSpinner(false);
    }
  }

  return (
    <section className="h-screen w-full bg-slate-800 p-4 pb-18 lg:pt-18 overflow-auto">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="h-full w-full flex flex-col items-start gap-6">
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
          <div className="w-full pb-10">
            {jobData.length > 0 ? (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
                <JobCard
                  jobData={jobData}
                  handleJobsChange={handleJobsChange}
                />
              </div>
            ) : (
              <div className="min-w-full border border-slate-100 flex">
                <h1 className="text-slate-100">No Data Found</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Jobs;
