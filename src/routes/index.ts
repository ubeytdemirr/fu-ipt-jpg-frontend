import MainLayout from "../layouts/main/MainLayout";
import Home from "../pages/Home/Home";

const routes = [
  {
    title: "Home",
    description: "",
    path: "/",
    layout: MainLayout,
    component: Home,
    exact: true,
  },
]
export default routes;
