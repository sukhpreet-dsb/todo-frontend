import { redirect } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

export const checkAuth = () => {
  const accessToken = useAuthStore.getState().accessToken
  if (!accessToken) {
    throw redirect("/sign-in");
  }
  return null;
};

export const redirectIfAuthenticated = () => {
  const accessToken = useAuthStore.getState().accessToken
  if (accessToken) {
    throw redirect("/dashboard");
  }
  return null;
};
