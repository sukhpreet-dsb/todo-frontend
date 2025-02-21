import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";

const checkAuth = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  if (!isAuthenticated) {
    throw redirect("/sign-in");
  }
  return null;
};

const redirectIfAuthenticated = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  if (isAuthenticated) {
    throw redirect("/dashboard");
  }
  return null;
};

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
        path: "reset-password",
        element: <ResetPassword />,
        loader: redirectIfAuthenticated,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: checkAuth,
      },
    ],
  },
]);

export default router;
