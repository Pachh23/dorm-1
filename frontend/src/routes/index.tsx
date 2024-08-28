import { useRoutes, RouteObject } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import MainRoutes from "./MainRoutes";
function ConfigRoutes() {
  const isLoggedIn = localStorage.getItem("isLogin") === "true";
  const role = localStorage.getItem("role") || ""; // ดึงบทบาทจาก localStorage
  let routes: RouteObject[] = [];

  if (isLoggedIn) {
    routes = [AdminRoutes(isLoggedIn,role), MainRoutes()];
  } else {
    routes = [MainRoutes()];
  }
  return useRoutes(routes);
}
export default ConfigRoutes;