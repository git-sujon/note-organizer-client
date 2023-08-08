import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/SignUp";
import MyNotes from "../pages/MyNotes";
import AddNotes from "../pages/AddNotes";
import DashboardLayout from "../components/layout/DashboardLayout";
import App from "../App";
import Home from "../pages/Home";
import EditNote from "../components/EditNote";
import PrivateRoute from "./privateRoute";

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
         element:<PrivateRoute><MyNotes/></PrivateRoute>
      },
      {
         path:'/dashboard/add-notes',
         element:<PrivateRoute><AddNotes/></PrivateRoute>
      },
      {
         path:'/dashboard/:id',
         element:<PrivateRoute><EditNote/></PrivateRoute>
      },
    ]
   },
])

export default router