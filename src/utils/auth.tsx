import { redirect } from "react-router-dom";

export const checkAuth = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  if (!isAuthenticated) {
    throw redirect("/sign-in");
  }
  return null;
};

export const redirectIfAuthenticated = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  if (isAuthenticated) {
    throw redirect("/dashboard");
  }
  return null;
};
