import { LoginData, RegisterData } from "../interfaces/User/UserInterface";
import apiAdapter from "../utils/ApiAdapter";
import url from "../utils/url";

export const registerUser = async (body: RegisterData) => {
  try {
    const apiRegisterUser = apiAdapter(url);
    const res = await apiRegisterUser.post(`/api/users/register`, body);
    return res;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const loginUser = async (body: LoginData) => {
  try {
    const apiLoginUser = apiAdapter(url);
    const res = await apiLoginUser.post(`/api/users/login`, body);
    return res;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const getUsers = async (userId:number|undefined) => {
  try {
    const apiRegisterUser = apiAdapter(url);
    const res = await apiRegisterUser.get(`/api/users/get_users/`+userId);
    return res;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};
