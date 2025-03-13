import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const API_BASE_URL = "http://localhost:4000";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials : true
});

api.interceptors.request.use(
  (config) => {
    const state = useAuthStore.getState();
    const token = state.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// api.interceptors.response.use(
//   (response) => response,
//     // (response) => response.data?.data ? {
//     //   ...response,
//     //   data:response.data.data
//     // } : response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const state = useAuthStore.getState();
//         const refreshtoken = state.refreshToken;
//         if (!refreshtoken) {
//           // logout function
//           useAuthStore.getState().logout();
//           return Promise.reject(error);
//         }

//         // Manually refresh token
//         const response = await axios.post(
//           `${API_BASE_URL}/auth/refresh-token`,
//           {
//             refreshtoken,
//           }
//         );
//         const { accessToken } = response.data.data;
//         // const { token, refreshtoken: newRefreshToken } = response.data.data;

//         // Store new credentials
//         useAuthStore.getState().setAccessToken(accessToken);
//         const token = useAuthStore.getState().accessToken
//         // Update Authorization header and retry the request
//         originalRequest.headers.Authorization = `Bearer ${token}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         // logout function
//         useAuthStore.getState().logout();
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
