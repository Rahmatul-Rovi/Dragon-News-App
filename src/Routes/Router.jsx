import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

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
      element: <CategoryNews></CategoryNews>,
      loader: () => fetch("/news.json"),
    },
  ],
  },
   {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
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