import MainLayout from "../layouts/main/MainLayout";
import Home from "../pages/Home/Home";

export default [
  {
    title: "Home",
    description: "",
    path: "/",
    layout: MainLayout,
    component: Home,
    exact: true,
  },
];
