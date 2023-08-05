import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import Home from "../pages/Home";

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
    element:<LoginPage />
   },
])

export default router