import { useEffect } from "react";
import { userInfo } from "../services/authService";

const Dashboard = () => {
    useEffect(() => {
      const getuserInfo = async () => {
        const response = await userInfo();
        console.log(response,"response")
      };
      getuserInfo();
    }, []);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard