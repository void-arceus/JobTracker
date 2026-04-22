function AddForm() {
  return (
    <section className="min-h-screen w-full p-2 bg-slate-800 text-slate-100 pb-14 lg:pt-16">
      <div className="w-full">
        <div className="w-full border-slate-400 rounded-2xl p-2 flex flex-col items-start gap-6">
          <h1 className="text-2xl md:text-4xl text-slate-200 font-semibold">
            Add Job
          </h1>
          <form className="w-full max-w-3xl grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="w-full">
              <input
                placeholder="Company Name"
                required
                className="w-full bg-slate-700 border border-slate-600 p-2.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
              />
            </div>
            <div className="w-full">
              <input
                placeholder="Position"
                required
                className="w-full bg-slate-700 border border-slate-600 p-2.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
              />
            </div>
            <div className="w-full">
              <input
                placeholder="Location"
                required
                className="w-full bg-slate-700 border border-slate-600 p-2.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
              />
            </div>
            <div className="w-full">
              <input
                placeholder="Job Type"
                required
                className="w-full bg-slate-700 border border-slate-600 p-2.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row md:items-center items-start gap-2">
              <label className="text-base font-medium">Applied on:</label>
              <input
                type="date"
                required
                className="w-full bg-slate-700 border border-slate-600 p-2.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
              />
            </div>
            <div className="w-full">
              <textarea
                placeholder="Note: (40 Chars max)"
                className="w-full bg-slate-700 border border-slate-600 p-2.5 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300 resize-none"
              />
            </div>
            <div className="w-full flex items-center gap-4">
              <button className="w-full p-2 rounded-xl border-2 border-slate-400 hover:cursor-pointer hover:bg-slate-700">
                Clear
              </button>
              <button className="w-full  bg-violet-500 rounded-xl p-2.5 cursor-pointer hover:bg-violet-600">
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
