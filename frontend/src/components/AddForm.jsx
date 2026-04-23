import { useState } from "react";

function AddForm() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObj = Object.fromEntries(formData.entries());

    if (
      !dataObj.companyName ||
      !dataObj.position ||
      !dataObj.location ||
      !dataObj.appliedOn ||
      !dataObj.jobType
    ) {
      alert("Data Missing");
      return;
    }

    clearInputFields();
  }

  function clearInputFields() {
    setTimeout(() => {
      setCompany("");
      setPosition("");
      setLocation("");
      setJob("");
      setDate("");
      setNote("");
    }, 500);
  }

  return (
    <section className="h-screen w-full p-2 bg-slate-800 text-slate-100 pb-14 lg:pt-16 overflow-auto">
      <div className="w-full">
        <div className="w-full border-slate-400 rounded-2xl p-2 flex flex-col items-start gap-6">
          <h1 className="text-2xl md:text-4xl text-slate-200 font-semibold">
            Add Job
          </h1>
          <form
            onSubmit={handleFormSubmit}
            className="w-full max-w-3xl grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div className="w-full">
              <input
                name="companyName"
                placeholder="Company Name"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                required
                className="w-full bg-slate-700 border border-slate-600 p-3.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
              />
            </div>
            <div className="w-full">
              <input
                name="position"
                value={position}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
                placeholder="Position"
                required
                className="w-full bg-slate-700 border border-slate-600 p-3.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
              />
            </div>
            <div className="w-full">
              <input
                name="location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                placeholder="Location"
                required
                className="w-full bg-slate-700 border border-slate-600 p-3.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
              />
            </div>
            <div className="w-full">
              <input
                name="jobType"
                value={job}
                onChange={(e) => {
                  setJob(e.target.value);
                }}
                placeholder="Job Type"
                required
                className="w-full bg-slate-700 border border-slate-600 p-3.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row md:items-center items-start gap-2">
              <label className="text-base font-medium">Applied on:</label>
              <input
                name="appliedOn"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                type="date"
                required
                className="w-full bg-slate-700 border border-slate-600 p-3.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
              />
            </div>
            <div className="w-full">
              <textarea
                name="note"
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
                placeholder="Note: (40 Chars max)"
                className="w-full bg-slate-700 border border-slate-600 p-3.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300 resize-none"
              />
            </div>
            <div className="w-full flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  clearInputFields();
                }}
                className="w-full p-3 rounded-xl border-2 border-slate-400 hover:cursor-pointer hover:bg-slate-700"
              >
                Clear
              </button>
              <button
                type="submit"
                className="w-full  bg-violet-500 rounded-xl p-3.5 cursor-pointer hover:bg-violet-600"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default AddForm;
