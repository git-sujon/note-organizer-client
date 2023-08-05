import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import Home from "../pages/Home";
import SignUpPage from "../pages/SignUp";

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
])

export default router