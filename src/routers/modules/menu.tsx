import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { RouteObject } from "@/routers/interface";
import { LayoutIndex } from "../constant";

const menuRouter: Array<RouteObject> = [
    {
        element: <LayoutIndex />,
        path: "/menu1",
        meta: {
          title: "菜单嵌套",
          key: "menu1",
        },
        children: [
          {
            path: "/menu1/menu1-1",
            meta: {
              title: "菜单1",
              key: "menu1-1",
            },
            element: lazyLoad(React.lazy(() => import("@/views/about/index"))),
            children: [
              {
                path: "/menu1/menu1-1/menu1-1-1",
                meta: {
                  title: "菜单1-1",
                  key: "menu1-1-1",
                },
                element: lazyLoad(React.lazy(() => import("@/views/about/index"))),
              },
            ],
          },
          {
            path: "/menu1/menu1-2",
            meta: {
              title: "菜单2",
              key: "menu1-2",
              requiresAuth: true,
            },
            element: lazyLoad(React.lazy(() => import("@/views/about/index"))),
          },
        ],
      },
];

export default menuRouter;
