function JobCard({ jobData }) {
  return jobData.map((data) => (
    <div
      key={data.id}
      className="min-h-85 w-full text-slate-100 border border-slate-400 bg-slate-700 rounded-xl flex flex-col items-start gap-2"
    >
      {/* card header */}
      <div className="w-full flex items-center justify-start gap-4 p-4 border-b border-gray-400">
        <div className="w-10">
          <p className="h-10 w-10 bg-blue-400 rounded-full flex items-center justify-center text-xl text-slate-100 font-bold">
            {data.companyName[0]}
          </p>
        </div>
        <div className="w-full">
          <h1 className="text-base font-medium text-white">{data.position}</h1>
          <h2 className="text-xs font-normal text-slate-100">
            {data.companyName}
          </h2>
        </div>
      </div>
      {/* hero section */}
      <div className="w-full p-4 flex items-center justify-between">
        <div className="w-1/2 flex flex-col gap-2 items-start">
          <div className="w-full flex items-center gap-2">
            <img src="/location.png" alt="location-logo" className="h-5" />
            <p>{data.location}</p>
          </div>
          <div className="w-full flex items-center gap-2">
            <img src="briefcase.png" alt="type-logo" className="h-5" />
            <p>{data.jobType}</p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4 items-start">
          <div className="w-full flex items-center gap-2">
            <img src="/calendar.png" alt="calendar-logo" className="h-5" />
            <p>{data.appliedOn}</p>
          </div>
          <div className="w-full text-center">
            <p
              className={`max-w-40 ${data.status.toLowerCase() === "applied" ? "bg-yellow-400 text-yellow-800" : data.status.toLowerCase() === "interview" ? "bg-blue-400 text-blue-800" : data.status.toLowerCase() === "rejected" ? "bg-red-400 text-red-800" : data.status.toLowerCase() === "offer" ? "bg-green-400 text-green-800" : ""} text-blue-100 p-1 rounded-lg font-medium`}
            >
              {data.status}
            </p>
          </div>
        </div>
      </div>
      {/* note */}
      <div className="w-full px-4 font-medium text-base">Note: {data.note}</div>
      {/* footer */}
      <div className="w-full flex items-center justify-start gap-4 p-4">
        <button className="p-1 px-4 bg-green-500 rounded-lg font-medium text-slate-100 cursor-pointer shadow-md hover:shadow-lg  transform hover:-translate-y-1 ease-in-out duration-300">
          Edit
        </button>
        <button className="p-1 px-4 bg-red-500 rounded-lg font-medium text-slate-100 cursor-pointer shadow-md hover:shadow-md transform hover:-translate-y-1 ease-in-out duration-300">
          Delete
        </button>
      </div>
    </div>
  ));
}

export default JobCard;
