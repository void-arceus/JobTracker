function EditProfileForm({ handleShowForm }) {
  return (
    <form className="text-slate-200 max-w-lg w-full flex flex-col items-start gap-4">
      <h2 className="text-lg font-medium text-slate-400">Edit Details</h2>
      <input
        type="text"
        placeholder="name"
        className="w-full bg-slate-700 border border-slate-600 p-3 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
      />
      <input
        type="email"
        placeholder="email"
        className="w-full bg-slate-700 border border-slate-600 p-3 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
      />
      <input
        type="text"
        placeholder="location"
        className="w-full bg-slate-700 border border-slate-600 p-3 rounded-lg ring-0 outline-0 focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
      />
      <input
        type="text"
        placeholder="role"
        className="w-full bg-slate-700 border border-slate-600 p-3 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300"
      />
      <textarea
        type="text"
        placeholder="about"
        className="w-full bg-slate-700 border border-slate-600 p-3 rounded-lg ring-0 outline-0 
                focus:ring-2 focus:ring-violet-500 transition ease-in-out duration-300 resize-none"
      />
      <div className="w-full flex items-center gap-4">
        <button
          type="button"
          onClick={() => handleShowForm()}
          className="w-full text-base font-medium border-2 border-slate-500 p-2.5 rounded-lg hover:cursor-pointer hover:bg-slate-700"
        >
          Cancel
        </button>
        <button
          type="button"
          className="w-full bg-linear-to-r from-violet-500 to-fuchsia-500 p-3 text-base font-medium rounded-lg hover:cursor-pointer shadow-sm shadow-violet-800 hover:shadow-md"
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default EditProfileForm;
