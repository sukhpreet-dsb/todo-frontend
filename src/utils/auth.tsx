import { redirect } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { refreshToken } from "../services/authService";

export const checkAuth = async () => {
  const accessToken = useAuthStore.getState().accessToken;
  if (!accessToken) {
    // #NOTE: check the refreshToken api,
    const response = await refreshToken();
    // get the new accessToken and save it. based on that response. do the redirecting
    useAuthStore.setState({
      accessToken: response?.data?.data?.accessToken,
    });
    if (response?.data ? !response?.data.success : !response.success) {
      throw redirect("/sign-in");
    }
  }
  return null;
};

export const redirectIfAuthenticated = async () => {
  const accessToken = useAuthStore.getState().accessToken;
  if (!accessToken) {
    // #NOTE: check the refreshToken api,
    const response = await refreshToken();
    // get the new accessToken and save it. based on that response. do the redirecting
    useAuthStore.setState({
      accessToken: response?.data?.data?.accessToken,
    });
    if(response?.data?.success){
      throw redirect("/dashboard")
    }
  }
  return null;
};
