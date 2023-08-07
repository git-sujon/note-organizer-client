import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/SignUp";
import MyNotes from "../pages/MyNotes";
import AddNotes from "../pages/AddNotes";
import DashboardLayout from "../components/layout/DashboardLayout";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter([
   {
    path:"/",
    element:<App />,
    children:[
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
    ]
   },
   {
    path:"/dashboard",
    element:<DashboardLayout />,
    children:[
      {
         path:'/dashboard',
         element:<MyNotes/>
      },
      {
         path:'/dashboard/add-notes',
         element:<AddNotes/>
      },
    ]
   },
])

export default router