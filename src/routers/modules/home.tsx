import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { RouteObject } from "@/routers/interface";
import { LayoutIndex } from "../constant";

const homeRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: "/home",
        meta: {
          title: "首页",
          key: "home",
        },
        element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
      },
    ],
  },
];

export default homeRouter;
