import NavigationSidebar from "../components/dashboard/NavigationSidebar";
import ToolsSidebar from "../components/dashboard/ToolsSidebar";
import MainSection from "../components/dashboard/MainSection";

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-50 text-indigo-900">
      <NavigationSidebar />
      <MainSection />
      <ToolsSidebar />
    </div>
  );
};

export default DashboardPage;