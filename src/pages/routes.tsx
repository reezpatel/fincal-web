import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./home";
import { Calculators } from "./calculators";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calculators",
    element: <Calculators />,
  },
]);

export const RouteContainer = () => {
  return <RouterProvider router={router} />;
};
