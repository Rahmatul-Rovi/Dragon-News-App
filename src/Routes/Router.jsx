import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
      path: "",
      element: <Home></Home>
    },
      {
      path: "/category/:id",
      element: <CategoryNews></CategoryNews>
    },
  ],
  },
   {
    path: "/auth",
    element: <h1>Authenticaion Layout</h1>,
  },
   {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
   {
    path: "/*",
    element: <h1>Error-404</h1>,
  },
]);

 <RouterProvider router={router} />
 export default router