import api from "../api/api";
import { SignInData, SignUpData } from "../types/authtype";

export const signUp = async (data: SignUpData) => {
  try {
    const response = await api.post("/auth/sign-up", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const signIn = async (data: SignInData) => {
  try {
    const response = await api.post("/auth/sign-in", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const forgotPassword = async (data: string) => {
  try {
    const response = await api.post("/auth/forgot-password", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const resetPassword = async (
  newPassword: string,
  token: string | undefined
) => {
  try {
    const response = await api.post("/auth/reset-password", {
      newPassword,
      token,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const userInfo = async () => {
  try {
    const response = await api.get("/auth/me");
    return response?.data;
  } catch (error) {
    return error.response.data;
  }
};

export const refreshToken = async () => {
  try {
    const response = await api.post("/auth/refresh-token");
    return response;
  } catch (error) {
    return error.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response;
  } catch (error) {
    return error.response.data;
  }
};
