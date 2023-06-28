import { CACHE } from "../../network/common";
import config from "../config";
import { APP_NAME } from "../constants";

export const getAccessToken = () => {
  return CACHE.getItem("vf-accessToken");
};

export const getStoreName = (module: string) => {
  return `${module.toLowerCase()}-${APP_NAME.toLowerCase()}-${config.ENV.toLowerCase()}`;
};
