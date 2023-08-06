import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import Home from "../pages/Home";
import SignUpPage from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import AddNotes from "../pages/AddNotes";
import DashboardLayout from "../components/layout/DashboardLayout";

const router = createBrowserRouter([
   {
    path:"/",
    element:<Home />
   },
   {
    path:"/login",
    element:<LoginPage />
   },
   {
    path:"/signup",
    element:<SignUpPage />
   },
   {
    path:"/dashboard",
    element:<DashboardLayout />,
    children:[
      {
         path:'/dashboard',
         element:<Dashboard/>
      },
      {
         path:'/dashboard/add-notes',
         element:<AddNotes/>
      },
    ]
   },
])

export default router