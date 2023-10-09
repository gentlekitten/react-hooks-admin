import { Navigate, useRoutes } from "react-router-dom";
import Redirect from "@/components/Redirect";
import { RouteObject } from "@/routers/interface";
import LazyLoad from "@/routers/utils/lazyLoad";
import React from "react";

// * 导入所有router
const metaRouters: any = import.meta.globEager("./modules/*.tsx");

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key]);
  });
});

export const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <Redirect to="/home" />,
  },
  {
    path: "/login",
    element: LazyLoad(React.lazy(() => import("@/views/login/index"))),
  },
  ...routerArray,
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter as any);
  return routes;
};

export default Router;
