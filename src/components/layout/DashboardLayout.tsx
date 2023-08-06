import { GiHamburgerMenu } from "react-icons/gi";
import {  BiSolidDashboard, BiSolidNotepad, BiLogOutCircle } from "react-icons/bi";
import {FiPaperclip} from "react-icons/fi";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import UserProfile from "../UI/UserProfile";
import { useAppDispatch } from "../../redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../lib/Firebase";
import { setUser } from "../../redux/features/user/userSlice";
import { toast } from "react-hot-toast/headless";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useAppDispatch()
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null))
      toast.success("Sign Out Complete")
    })
  }


  return (
    <div className="font-poppins antialiased">
      <div className="h-full w-screen flex flex-row">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white fixed top-0 left-0 z-10 sm:hidden"
        >
          <GiHamburgerMenu />
        </button>

        {/* Sidebar */}
        <div
          id="sidebar"
          className={`bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0 " : "-translate-x-full"
          } md:translate-x-0 `}
        >
          <div className="space-y-6 md:space-y-10 mt-4">
            <h1 className="font-bold text-sm md:text-xl text-center flex items-center gap-1">
              <BiSolidNotepad />
              Note Organizer
            </h1>

            <div>
              <UserProfile />
            </div>

            <div id="menu" className="flex flex-col space-y-2">
              <Link
                to="/dashboard"
                className="text-lg font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out flex items-center gap-1"
              >
                <BiSolidDashboard />
                <span className="">Dashboard</span>
              </Link>
              <Link
                to="/dashboard/add-notes"
                className="text-lg font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out flex items-center gap-1"
              >
                <FiPaperclip />
                <span className="">Add Notes</span>
              </Link>
              <button
                onClick={()=> handleLogout()}
                className="text-lg font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out flex items-center gap-1"
              >
                <BiLogOutCircle />
                <span className=""> Sign Out</span>
              </button>
              <div className="pt-10">
                <p className="text-lg font-semibold flex items-center gap-1">
                  <MdFormatListBulletedAdd className="text-2xl" /> Catagories
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`flex-grow p-4 ${
            sidebarOpen ? "ml-30 md:ml-60 lg:ml-60" : "w-full"
          }`}
        >
          {/* ... Main content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
