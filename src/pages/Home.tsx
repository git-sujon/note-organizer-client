import { Link } from "react-router-dom";
import { BiLogIn, BiSolidUserAccount } from "react-icons/bi";
const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center gap-5">
      <div className="">
        <Link
          className="group relative inline-block overflow-hidden border border-white px-8 py-3 focus:outline-none focus:ring"
          to="/login"
        >
          <span className="absolute inset-y-0 left-0 w-[2px] bg-white transition-all group-hover:w-full group-active:bg-slate-500"></span>

          <span className="relative text-md font-medium text-white transition-colors group-hover:text-black flex  items-center gap-1">
            <BiLogIn className="text-xl" />
            Login
          </span>
        </Link>
      </div>
      <div className="">
      <Link
          className="group relative inline-block overflow-hidden border border-white px-8 py-3 focus:outline-none focus:ring"
          to="/login"
        >
          <span className="absolute inset-y-0 left-0 w-[2px] bg-white transition-all group-hover:w-full group-active:bg-slate-500"></span>

          <span className="relative text-md font-medium text-white transition-colors group-hover:text-black flex  items-center gap-1">
            <BiSolidUserAccount className="text-xl" />
            Signup
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
