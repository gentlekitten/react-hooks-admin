import { Login } from "@/api/interface/index";
import qs from "qs";

import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(`/login`, params);
  return http.post<Login.ResLogin>(`/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
  return http.post<Login.ResLogin>(`/login`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
  return http.post<Login.ResLogin>(`/login`, params, {
    headers: { noLoading: true },
  }); // 控制当前请求不显示 loading
};

// // * 获取按钮权限
// export const getAuthorButtons = () => {
// 	return http.get<Login.ResAuthButtons>( `/auth/buttons`);
// };

// * 获取菜单列表
export const getMenuList = () => {
  return http.get<Menu.MenuOptions[]>(`/menu/list`);
};
