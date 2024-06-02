import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import ErrorElement from "../ErrorElement/ErrorElement";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import TeachOnLearnEase from "../Pages/TeachOnLearnEase/TeachOnLearnEase";

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
        element: <TeachOnLearnEase></TeachOnLearnEase>
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
]);

export default router;
