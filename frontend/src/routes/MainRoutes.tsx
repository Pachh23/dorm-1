import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import MinimalLayout from "../layout/MinimalLayout";
import Loadable from "../components/third-patry/Loadable";
const MainPages = Loadable(lazy(() => import("../pages/authentication/LoginStudent")));
const LoginAdmin = Loadable(lazy(() => import("../pages/authentication/LoginAdmin")));

// ใช้ Loadable สำหรับการโหลดหน้า Login ของผู้ใช้และ Admin

const MainRoutes = (): RouteObject => {
  return {
    path: "/",
    element: <MinimalLayout />,
    children: [
      {
        path: "/",
        element: <MainPages />,
      },
      {
        path: "/signin-admin",
        element: <LoginAdmin />,
      },
      {
        path: "*",
        element: <MainPages />,
      },
    ],
  };
};



export default MainRoutes;
