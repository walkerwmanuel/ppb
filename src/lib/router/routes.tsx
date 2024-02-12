import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";

export const routes: Array<PathRouteProps> = [
  {
    path: "/home",
    element: <Home />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
