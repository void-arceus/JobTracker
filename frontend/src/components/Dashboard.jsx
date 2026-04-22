function Dashboard() {
  return (
    <section className="bg-slate-800 min-h-screen w-full p-4 pb-14 lg:pt-18">
      <div className="flex flex-col items-start gap-4">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl text-slate-200 font-semibold">
            Dashboard
          </h1>
        </div>
        <div className="h-fit w-full p-4">
          <div className="bg-slate-700 w-full md:max-w-xl p-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-500 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all ease-in-out duration-300">
            <h1 className="text-4xl text-slate-200 font-bold">18</h1>
            <p className="text-md text-slate-200 font-medium">
              Total Applications
            </p>
          </div>
        </div>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 transition-all ease-in duration-300 p-3">
          <div className="bg-slate-700 w-full p-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-yellow-400 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all ease-in-out duration-300">
            <h1 className="text-4xl text-yellow-400 font-bold">10</h1>
            <p className="text-md text-yellow-300 font-medium">Applied</p>
          </div>
          <div className="bg-slate-700 w-full p-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-blue-500 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all ease-in-out duration-300">
            <h1 className="text-4xl text-blue-400 font-bold">2</h1>
            <p className="text-md text-blue-400 font-medium">Interviews</p>
          </div>
          <div className="bg-slate-700 w-full p-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-red-400 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all ease-in-out duration-300">
            <h1 className="text-4xl text-red-400 font-bold">6</h1>
            <p className="text-md text-red-400 font-medium">Rejected</p>
          </div>
          <div className="bg-slate-700 w-full p-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-green-500 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all ease-in-out duration-300">
            <h1 className="text-4xl text-green-400 font-bold">0</h1>
            <p className="text-md text-green-400 font-medium">Offer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
