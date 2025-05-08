import { createBrowserRouter, RouteObject } from "react-router-dom";
import {
  Login,
  NotFound,
  Dashboard,

} from "./PageComponents";
import { Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import SuspenseLoading from "../../components/Loading/SuspenseLoading";

// Higher-Order Component for Suspense
const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<SuspenseLoading />}>
    <Component />
  </Suspense>
);

const CreateRoute = (
  path: string,
  Component: React.ComponentType,
  children?: RouteObject[]
): RouteObject => ({
  path,
  element: withSuspense(Component),
  children,
});

// Define the router
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      CreateRoute("/", Dashboard),
    ],
  },
  {
    path: "/login",
    element: withSuspense(Login),
  },
  // {
  //   path: "/register",
  //   element: withSuspense(Register),
  // },
]);
