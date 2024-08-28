import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "../components/third-patry/Loadable";
import FullLayout from "../layout/FullLayout";
import DormLayout from "../layout/DormLayout";

const MainPages = Loadable(lazy(() => import("../pages/authentication/LoginStudent")));
//const LoginAdmin = Loadable(lazy(() => import("../pages/authentication/LoginAdmin")));
const Dashboard = Loadable(lazy(() => import("../pages/dashboard")));
const Student = Loadable(lazy(() => import("../pages/student")));
const CreateStudent = Loadable(lazy(() => import("../pages/student/create")));
const EditStudent = Loadable(lazy(() => import("../pages/student/edit")));
const Personal = Loadable(lazy(() => import("../pages/personal")));
const PersonalChange = Loadable(lazy(() => import("../pages/personal/change")));

const AdminRoutes = (isLoggedIn : boolean, role: string): RouteObject => {
  return {
    path: "/",
    element: isLoggedIn ? (role === "student" ? <FullLayout /> : < DormLayout/>) : <MainPages />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/student",
        children: [
          {
            path: "/student",
            element: <Student />,
          },
          {
            path: "/student/create",
            element: <CreateStudent />,
          },
          {
            path: "/student/edit/:id",
            element: <EditStudent />,
          },
        ],
      },
      {
        path: "/personal",
        children: [
          {
            path: "/personal",
            element: <Personal />,
          },
          {
            path: "/personal/change",
            element: <PersonalChange />,
          },
        ],
      },
    ],
  };
};

export default AdminRoutes;