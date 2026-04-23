import { useState } from "react";
import JobCard from "./JobCard";

function Jobs() {
  const [jobData, setJobData] = useState([
    {
      id: 1,
      companyName: "Makes360",
      position: "Frontend Developer Intern",
      appliedOn: "20-04-2026",
      status: "Interview",
      location: "Mohali",
      jobType: "Internship",
      note: "will let me know by the end of this week",
    },
    {
      id: 2,
      companyName: "Triedge Solutions",
      position: "MERN Stack Intern",
      appliedOn: "22-04-2026",
      status: "Applied",
      location: "Mohali, Punjab",
      jobType: "Internship",
      note: "n/a",
    },
    {
      id: 3,
      companyName: "Web Track Technologies",
      position: "Web Development Intern",
      appliedOn: "18-04-2026",
      status: "Applied",
      location: "Mohali, Punjab",
      jobType: "Internship",
      note: "n/a",
    },
    {
      id: 4,
      companyName: "WebCom Solution Insosystems Pvt. Ltd.",
      position: "Web Developer Intern",
      appliedOn: "12-04-2026",
      status: "Interview",
      location: "Chandigarh",
      jobType: "Internship",
      note: "n/a",
    },
    {
      id: 5,
      companyName: "WebCom Solution Insosystems Pvt. Ltd.",
      position: "Full Stack Intern",
      appliedOn: "12-04-2026",
      status: "Offer",
      location: "Chandigarh",
      jobType: "Internship",
      note: "n/a",
    },
    {
      id: 6,
      companyName: "Some Company",
      position: "Web Developer Intern",
      appliedOn: "12-04-2026",
      status: "Rejected",
      location: "Chandigarh",
      jobType: "Internship",
      note: "n/a",
    },
    {
      id: 7,
      companyName: "WebCom Solution Insosystems Pvt. Ltd.",
      position: "Full Stack Intern",
      appliedOn: "12-04-2026",
      status: "Offer",
      location: "Chandigarh",
      jobType: "Internship",
      note: "n/a",
    },
    {
      id: 8,
      companyName: "Some Company",
      position: "Web Developer Intern",
      appliedOn: "12-04-2026",
      status: "Rejected",
      location: "Chandigarh",
      jobType: "Internship",
      note: "n/a",
    },
  ]);

  return (
    <section className="h-screen w-full bg-slate-800 p-4 pb-18 lg:pt-18 overflow-auto">
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
              <JobCard jobData={jobData} />
            </div>
          ) : (
            <div className="min-w-full border border-slate-100 flex">
              <h1 className="text-slate-100">No Data Found</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
