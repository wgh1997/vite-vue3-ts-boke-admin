import http from "../http";
import * as T from "./types";
export const getClassify: any = () => {
  return http.get("/classify/");
};
export const postClassify: any = (params: T.Classify) => {
  return http.post("/classify/", params);
};
export const putClassify: any = (params: T.Classify) => {
  return http.put("/classify/", params);
};
export const deleteClassify: any = (params: T.Classify) => {
  return http.delete("/classify/", params);
};
