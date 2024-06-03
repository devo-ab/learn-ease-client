import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import ErrorElement from "../ErrorElement/ErrorElement";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import TeachOnLearnEase from "../Pages/TeachOnLearnEase/TeachOnLearnEase";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/teach-on-lear-ease",
        element: <PrivateRoutes><TeachOnLearnEase></TeachOnLearnEase></PrivateRoutes>
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayouts></DashboardLayouts></PrivateRoutes>,
    children: [
      {}
    ]
  }
]);

export default router;
