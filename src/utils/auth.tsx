import { LoaderFunctionArgs, redirect } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { refreshToken } from "../services/authService";

export const checkAuth = async () => {
    
    const accessToken = useAuthStore.getState().accessToken
    if (!accessToken) {
      // #NOTE: check the refreshToken api,
      const response = await refreshToken()
      console.log(response,"response")
      // get the new accessToken and save it. based on that response. do the redirecting
      useAuthStore.setState({
        accessToken : response?.data?.data?.accessToken
      })
      if(response?.data ? !response?.data.success : !response.success){
        throw redirect("/sign-in");
      }
    }
    return null;
};

export const redirectIfAuthenticated =async (params:LoaderFunctionArgs<any>) => {
    
    const accessToken = useAuthStore.getState().accessToken
    if (!accessToken) {
      // #NOTE: check the refreshToken api,
      const response = await refreshToken()
    console.log(response,"response")
    // get the new accessToken and save it. based on that response. do the redirecting
    useAuthStore.setState({
      accessToken : response?.data?.data?.accessToken
    })
    if(response?.data ? response?.data.success : response.success){
      throw redirect("/dashboard");
    } else{
      // #TODO: check if it is redirecting from same route
      // return redirect("/sign-in")
      const path =params.request.url.split("http://localhost:5173/")[1]
      if(path && path === "sign-in"){
        return null
      }
      throw redirect("/sign-in")
    }
  }
  return null;
};
