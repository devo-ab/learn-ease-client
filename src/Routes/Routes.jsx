import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import ErrorElement from "../ErrorElement/ErrorElement";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import TeachOnLearnEase from "../Pages/TeachOnLearnEase/TeachOnLearnEase";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import PrivateRoutes from "./PrivateRoutes";
import AdminHome from "../Pages/AdminDash/AdminHome";
import TeacherRequ from "../Pages/AdminDash/TeacherRequ";
import Users from "../Pages/AdminDash/Users";
import AllClasses from "../Pages/AdminDash/AllClasses";
import UserProfile from "../Pages/UserProfile";
import AdminRoutes from "./AdminRoutes";
import UserHome from "../Pages/UserDash/UserHome";
import EnrollClasses from "../Pages/UserDash/EnrollClasses";

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
      // admin routes
      {
        path: "admin-home",
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: "teacher-request",
        element: <AdminRoutes><TeacherRequ></TeacherRequ></AdminRoutes>
      },
      {
        path: "users",
        element: <AdminRoutes><Users></Users></AdminRoutes>
      },
      {
        path: "all-classes",
        element: <AdminRoutes><AllClasses></AllClasses></AdminRoutes>
      },
      // admin routes

      // user routes
      {
        path: "user-home",
        element: <PrivateRoutes><UserHome></UserHome></PrivateRoutes>
      },
      {
        path: "enroll-classes",
        element: <PrivateRoutes><EnrollClasses></EnrollClasses></PrivateRoutes>
      },
      // user routes

      // shared routes
      {
        path: "profile",
        element: <UserProfile></UserProfile>
      }
      // shared routes
    ]
  }
]);

export default router;
