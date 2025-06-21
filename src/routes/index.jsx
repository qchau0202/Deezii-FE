import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import GenerationSection from "../components/dashboard/GenerationSection";
import MyCreationsSection from "../components/dashboard/MyCreationsSection";
import ChatSection from "../components/dashboard/ChatSection";
import ExploreSection from "../components/dashboard/ExploreSection";
import ImageEditorSection from "../components/dashboard/ImageEditorSection";
import TemplateSection from "../components/dashboard/TemplateSection";
import CollectionsSection from "../components/dashboard/CollectionsSection";
import HelpSection from "../components/dashboard/HelpSection";

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
        children: [
          { index: true, element: <Navigate to="generate" replace /> },
          { path: "generate", element: <GenerationSection /> },
          { path: "mycreations", element: <MyCreationsSection /> },
          { path: "chats", element: <ChatSection /> },
          { path: "explore", element: <ExploreSection /> },
          { path: "edit/:id", element: <ImageEditorSection /> },
          { path: "templates", element: <TemplateSection /> },
          { path: "collections", element: <CollectionsSection /> },
          { path: "help", element: <HelpSection /> },
        ],
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
