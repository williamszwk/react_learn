import Login from "./pages/Login/index";
import Admin from "./pages/Admin/admin";

export default [
  {
    path: "/",
    exact: true,
    component: Login,
  },
  {
    path: "/admin",
    component: Admin,
  },
  
];
