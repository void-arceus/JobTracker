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
    <section className="bg-slate-800 h-screen w-full p-2 pb-14 lg:pt-18 overflow-auto">
      <div className="flex flex-col items-start gap-4">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl text-slate-200 font-semibold">
            Dashboard
          </h1>
        </div>
        <div className="h-fit w-full p-4">
          <div className="bg-slate-700 w-full md:max-w-xl p-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-500 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all ease-in-out duration-300">
            <h1 className="text-4xl text-slate-200 font-bold">
              {userJobs.length === 0 ? 0 : Number(userJobs.length)}
            </h1>
            <p className="text-md text-slate-200 font-medium">
              Total Applications
            </p>
          </div>
        </div>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 transition-all ease-in duration-300 p-3">
          <div className="bg-slate-700 w-full p-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-yellow-400 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all ease-in-out duration-300">
            <h1 className="text-4xl text-yellow-400 font-bold">
              {jobSummary.applied !== undefined ? jobSummary.applied : 0}
            </h1>
            <p className="text-md text-yellow-300 font-medium">Applied</p>
          </div>
          <div className="bg-slate-700 w-full p-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-blue-500 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all ease-in-out duration-300">
            <h1 className="text-4xl text-blue-400 font-bold">
              {jobSummary.interview !== undefined ? jobSummary.interview : 0}
            </h1>
            <p className="text-md text-blue-400 font-medium">Interviews</p>
          </div>
          <div className="bg-slate-700 w-full p-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-red-400 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all ease-in-out duration-300">
            <h1 className="text-4xl text-red-400 font-bold">
              {jobSummary.rejected !== undefined ? jobSummary.rejected : 0}
            </h1>
            <p className="text-md text-red-400 font-medium">Rejected</p>
          </div>
          <div className="bg-slate-700 w-full p-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-green-500 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all ease-in-out duration-300">
            <h1 className="text-4xl text-green-400 font-bold">
              {jobSummary.offer !== undefined ? jobSummary.offer : 0}
            </h1>
            <p className="text-md text-green-400 font-medium">Offer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
