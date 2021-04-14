import axios from "axios";
import {
  IJsonResponse,
  BASE_URL,
  IResultResponse,
  commonAxiosConfig,
} from "rest/common";

export interface IUser {
  id: number;
  name: string;
  role: string;
  accessToken: string;
}

export interface IUserCreate {
  name: string;
  password: string;
  password2: string;
}

export interface IUserLogin {
  name: string;
  password: string;
}

interface IUserResponse extends IResultResponse {
  user: IUser;
}

const api = {
  me: () => {
    return axios
      .get<null, IJsonResponse<IUserResponse>>(`${BASE_URL}/users/me`, {
        ...commonAxiosConfig,
        headers: {
          userCheck: true,
        },
      })
      .then((res) => {
        return res.data;
      });
  },

  login: (data: IUserLogin) => {
    return axios
      .post<null, IJsonResponse<IUserResponse>>(
        `${BASE_URL}/users/login`,
        data,
        commonAxiosConfig
      )
      .then((res) => {
        return res.data;
      });
  },

  create: (data: IUserCreate) => {
    return axios
      .post<null, IJsonResponse<IUserResponse>>(
        `${BASE_URL}/users/create`,
        data,
        commonAxiosConfig
      )
      .then((res) => {
        return res.data;
      });
  },
};
export default api;
