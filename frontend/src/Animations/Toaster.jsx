const Toaster = ({ show, message, type }) => {
  const baseStyle =
    "fixed right-4 top-20 z-50 px-4 py-3 rounded-xl shadow-lg backdrop-blur-md border flex items-center gap-2 text-sm font-medium transition-all duration-300";

  const typeStyles = {
    success: "bg-white/20 border-green-300 text-green-700 shadow-green-300/30",
    error: "bg-white/20 border-red-300 text-red-600 shadow-red-300/30",
  };

  return (
    <div
      className={`${baseStyle} ${typeStyles[type] || typeStyles.success} ${
        show
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10 pointer-events-none"
      }`}
    >
      <span>{type === "success" ? "✅" : "❌"}</span>
      <p>{message}</p>
    </div>
  );
};

export default Toaster;
