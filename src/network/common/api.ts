import axios, { AxiosRequestConfig } from "axios";
import config from "../../common/config";
import { getAccessToken } from "../../common/utils";

const BASE_URL = config.API_URL;

const base = (options: AxiosRequestConfig) => {
  const token = getAccessToken();
  return axios({
    baseURL: BASE_URL,
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
    ...options,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const get = (url: string) => base({ method: "get", url });
const post = (url: string, data: any) => base({ method: "post", url, data });
const patch = (url: string, data: any) => base({ method: "patch", url, data });
const put = (url: string, data: any) => base({ method: "put", url, data });
const del = (url: string) => base({ method: "delete", url });

export const API = { get, post, patch, put, del };
