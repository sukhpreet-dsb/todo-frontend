import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import { checkAuth, redirectIfAuthenticated } from "./utils/auth";
import Test from "./pages/Test";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
        loader: redirectIfAuthenticated,
      },
      {
        path: "sign-up",
        element: <SignUp />,
        loader: redirectIfAuthenticated,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
        loader: redirectIfAuthenticated,
      },
      // {
      //   path : "test",
      //   element : <Test />,
      //   loader : redirectIfAuthenticated
      // },
      // {
      //   path : "cart",
      //   element : <Cart />,
      //   loader : redirectIfAuthenticated
      // },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: checkAuth,
      },
    ],
  },
]);

export default router;
