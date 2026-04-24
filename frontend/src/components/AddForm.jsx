import { useState } from "react";
import { addNewJob, getUserJobs, updateJob } from "../api/jobs.api.js";
import { useNav } from "../context/NavContext";
import { useSpinner } from "../context/SpinnerContext";
import Spinner from "../Animations/Spinner";

function AddForm() {
  const {
    jobEditing,
    handleJobEditing,
    handleCurrTabChange,
    jobToUpdate,
    handleJobToUpdate,
  } = useNav();
  const { showSpinner } = useSpinner();

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
      alert("Data Missing");
      return;
    }
    try {
      showSpinner(true);
      if (jobEditing) {
        dataObj._id = jobToUpdate._id;
        const res = await updateJob(dataObj);
        handleJobEditing(false);
        handleJobToUpdate({});
      } else {
        const res = await addNewJob(dataObj);
      }
      getUserJobs();
      clearInputFields();
      handleCurrTabChange("jobs");
    } catch (err) {
      showSpinner(false);
      console.error(err);
    } finally {
      showSpinner(false);
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
    }, 500);
  }

  function handleCancelJobEdit() {
    clearInputFields();
    handleJobEditing(false);
    handleJobToUpdate({});
    handleCurrTabChange("jobs");
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
            className="w-full max-w-3xl flex flex-col items-start gap-6"
          >
            <div className="w-full max-w-3xl grid grid-cols-1 gap-4 md:grid-cols-2">
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
              <div className="flex items-center gap-3">
                <label className="text-md font-medium">Status:</label>
                <select
                  name="status"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  className="border w-full p-3.5 px-4 bg-slate-700 rounded-lg text-md font-medium border-slate-600 cursor-pointer"
                >
                  <option value="applied">Applied</option>
                  <option value="interview">Interview</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                </select>
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
            </div>
            <div className="w-full flex items-center gap-4">
              <button
                type="button"
                onClick={
                  jobEditing
                    ? handleCancelJobEdit
                    : () => {
                        clearInputFields();
                      }
                }
                className="w-full p-3 rounded-xl border-2 border-slate-400 hover:cursor-pointer hover:bg-slate-700"
              >
                {jobEditing ? "Cancel" : "Clear"}
              </button>
              <button
                type="submit"
                className="w-full  bg-violet-500 rounded-xl p-3.5 cursor-pointer hover:bg-violet-600 flex items-center justify-center"
              >
                <Spinner />
                {jobEditing ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default AddForm;
