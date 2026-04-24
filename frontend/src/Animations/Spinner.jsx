import { useSpinner } from "../context/SpinnerContext";

function Spinner() {
  const { isLoading } = useSpinner();
  return (
    <div>
      <svg
        class={`${isLoading ? "block" : "hidden"} mr-3 size-6 animate-spin rounded-full border-2 border-slate-100 border-t-violet-500 border-r-violet-500`}
        viewBox="0 0 24 24"
      ></svg>
    </div>
  );
}

export default Spinner;
