import http from "../http";
import * as T from "./types";
export const getGetbock: any = () => {
  return http.get("/alles/getbock");
};
export const postGetbock: any = (params: T.FormState) => {
  return http.post("/alles/getbock", params);
};
export const putGetbock: any = (params: T.FormState) => {
  return http.put("/alles/getbock", params);
};
export const deleteGetbock: any = (params: T.Classify) => {
  return http.delete("/alles/getbock", params);
};
