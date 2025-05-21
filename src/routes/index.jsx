import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
