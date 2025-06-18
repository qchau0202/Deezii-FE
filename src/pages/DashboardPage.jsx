import NavigationSidebar from "../components/dashboard/NavigationSidebar";
// import ToolsSidebar from "../components/dashboard/ToolsSidebar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";

const DashboardPage = () => {
  //  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine selected item from the URL
  const selectedItem = (() => {
    if (location.pathname.includes("/dashboard/generate")) return "generate";
    if (location.pathname.includes("/dashboard/mycreations"))
      return "myCreations";
    if (location.pathname.includes("/dashboard/chats")) return "chats";
    if (location.pathname.includes("/dashboard/explore")) return "explore";
    if (location.pathname.includes("/dashboard/edit/")) return "imageEditor";
    return "generate";
  })();

  // Navigation handler for sidebar
  const handleNavigate = (item) => {
    switch (item) {
      case "generate":
        navigate("/dashboard/generate");
        break;
      case "myCreations":
        navigate("/dashboard/mycreations");
        break;
      case "chats":
        navigate("/dashboard/chats");
        break;
      case "explore":
        navigate("/dashboard/explore");
        break;
      default:
        navigate("/dashboard/generate");
    }
  };

  return (
    <div className="grid grid-cols-10 w-full h-screen bg-gray-50 text-indigo-900">
      <div className="col-span-1">
        <NavigationSidebar
          selectedItem={selectedItem}
          onNavigate={handleNavigate}
        />
      </div>
      <div className="col-span-9">
        <Outlet />
      </div>
      {/* <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? "col-span-2" : "col-span-2"
        }`}
      >
        <ToolsSidebar
          collapsed={sidebarCollapsed}
          onCollapse={setSidebarCollapsed}
        />
      </div> */}
    </div>
  );
};

export default DashboardPage;
