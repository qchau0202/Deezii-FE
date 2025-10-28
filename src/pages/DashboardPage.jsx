import NavigationSidebar from "../components/dashboard/NavigationSidebar";
import ToolsSidebar from "../components/dashboard/ToolsSidebar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const DashboardPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavCollapse = () => {
    setNavCollapsed(!navCollapsed);
  };

  // Determine selected item from the URL
  const selectedItem = (() => {
    if (location.pathname.includes("/dashboard/generate")) return "generate";
    if (location.pathname.includes("/dashboard/mycreations"))
      return "myCreations";
    if (location.pathname.includes("/dashboard/chats")) return "chats";
    if (location.pathname.includes("/dashboard/explore")) return "explore";
    if (location.pathname.includes("/dashboard/edit/")) return "imageEditor";
    if (location.pathname.includes("/dashboard/templates")) return "templates";
    if (location.pathname.includes("/dashboard/collections"))
      return "collections";
    if (location.pathname.includes("/dashboard/help")) return "help";
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
      case "templates":
        navigate("/dashboard/templates");
        break;
      case "collections":
        navigate("/dashboard/collections");
        break;
      case "help":
        navigate("/dashboard/help");
        break;
      default:
        navigate("/dashboard/generate");
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-50 text-indigo-900">
      {/* Left Sidebar */}
      <NavigationSidebar
        selectedItem={selectedItem}
        onNavigate={handleNavigate}
        collapsed={navCollapsed}
        onToggleCollapse={toggleNavCollapse}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex">
        <main className="flex-1 min-w-0 min-h-screen overflow-auto">
          <Outlet />
        </main>
        
        {/* Right Sidebar */}
        <aside className="hidden md:block w-80 h-screen sticky top-0 border-l border-gray-100 bg-white">
          <ToolsSidebar
            collapsed={sidebarCollapsed}
            onCollapse={setSidebarCollapsed}
          />
        </aside>
      </div>
    </div>
  );
};

export default DashboardPage;
