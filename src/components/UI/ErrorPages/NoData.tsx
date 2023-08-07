import { Link } from "react-router-dom";

const NoData = () => {
  return (
    <div className="flex justify-center items-center  text-center min-h-screen   italic">
      <div>
        <p className="text-4xl font-bold mb-10 text-slate-900">No Note Created Yet</p>

        <Link
          to="/dashboard/add-notes"
          className="group relative inline-block text-sm font-medium text-amber-600 focus:outline-none focus:ring active:text-amber-500"
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-amber-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block border border-current bg-white px-8 py-3">
            Add a Note
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NoData;
