import { useState } from "react";
import NavigationSidebar from "../components/dashboard/NavigationSidebar";
import ToolsSidebar from "../components/dashboard/ToolsSidebar";
import MainSection from "../components/dashboard/MainSection";

const DashboardPage = () => {
  const [selectedItem, setSelectedItem] = useState("generate");

  const handleNavigate = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="grid grid-cols-8 w-full h-screen bg-gray-50 text-indigo-900">
      <div className="col-span-1">
        <NavigationSidebar
          selectedItem={selectedItem}
          onNavigate={handleNavigate}
        />
      </div>
      <div className="col-span-5 relative overflow-hidden">
        <MainSection selectedItem={selectedItem} />
      </div>
      <div className="col-span-2">
        <ToolsSidebar />
      </div>
    </div>
  );
};

export default DashboardPage;
