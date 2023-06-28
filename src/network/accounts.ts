import { API } from "./common";

const basePath = "/account";

export const listAccounts = () => {
  return API.get(`${basePath}`);
};

export const createAccount = (data: any) => {
  return API.post(`${basePath}`, data);
};
