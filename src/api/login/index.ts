import http from "../http";
import * as T from "./types";

// const loginApi: T.ILoginApi = {
//         login(params) {
//                 return http.post('/login', params)
//         }

// }
export const postLogin: any = (params: T.ILoginApi) => {
  return http.post("users/login", params);
};
// export default loginApi
