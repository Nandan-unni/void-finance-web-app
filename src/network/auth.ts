import { API, AUTH } from "./common";

export const signIn = () => AUTH.signIn();
export const authenticate = (data: any) => API.post(`/user`, data);
export const signOut = () => AUTH.signOut();
