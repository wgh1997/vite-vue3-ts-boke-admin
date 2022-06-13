import { Position } from "csstype";
import http from "../http";
import * as T from "./types";
export const postLogin: any = (params: T.ILoginApi) => {
  return http.post("users/login", params);
};
export const getCaptcha: any = () => {
  return http.get("/users/captcha");
};
export const getInfo: any = () => {
  return http.get("/users/info");
};
