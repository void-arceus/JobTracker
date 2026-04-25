import { getUserJobs } from "../api/jobs.api.js";
import { useState, useEffect } from "react";

function Dashboard() {
  const [userJobs, setUserJobs] = useState([]);
  const [jobSummary, setJobSummary] = useState({});

  useEffect(() => {
    getJobs();
  }, []);

  async function getJobs() {
    const res = await getUserJobs();
    setUserJobs(res);
    const obj = {};
    res.forEach((job) => {
      if (obj[job.status] === undefined) {
        obj[job.status] = 1;
      } else {
        obj[job.status]++;
      }
    });
    setJobSummary(obj);
  }
  return (
    <section className="h-screen w-full p-4 pb-16 lg:pt-20 overflow-auto">
      <div className="flex flex-col items-start gap-4">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl text-gray-800 font-semibold">
            Dashboard
          </h1>
        </div>
        <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 transition-all ease-in duration-300">
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-white/15 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">
            <p className="text-sm text-gray-700">Total Applications</p>
            <h2 className="text-3xl font-semibold text-gray-900">
              {userJobs.length}
            </h2>
          </div>
          <div className="bg-white/15 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">
            <p className="text-sm text-gray-700">Applied</p>
            <h2 className="text-2xl font-semibold text-yellow-600">
              {jobSummary.applied || 0}
            </h2>
          </div>
          <div className="bg-white/15 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">
            <p className="text-sm text-gray-700">Interview</p>
            <h2 className="text-2xl font-semibold text-blue-500">
              {jobSummary.interview || 0}
            </h2>
          </div>
          <div className="bg-white/15 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">
            <p className="text-sm text-gray-700">Offer</p>
            <h2 className="text-2xl font-semibold text-green-600">
              {jobSummary.offer || 0}
            </h2>
          </div>
          <div className="bg-white/15 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">
            <p className="text-sm text-gray-700">Rejected</p>
            <h2 className="text-2xl font-semibold text-red-500">
              {jobSummary.rejected || 0}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
