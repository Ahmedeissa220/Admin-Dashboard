import { useState } from "react";
import Header from "./Components/Layout/Header";
import SideBar from "./Components/Layout/SideBar";
import DashBoard from "./Components/Dashboard/Dashboard";

function App() {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div
      className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50
      to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500"
    >
      
      {/* Sidebar */}
      <div className="flex h-screen overflow-hidden">
        <SideBar
          collapsed={sideBarCollapsed}
          onToggleSideBar={() =>
            setSideBarCollapsed(!sideBarCollapsed)
          }
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </div>

      {/* Content */}
      <div
        className={`flex-1 flex flex-col min-h-screen overflow-hidden transition-all duration-300 
        ${sideBarCollapsed ? "md:ml-20" : "md:ml-72"} ml-0`}
      >
        
        <Header
          sideBarCollapsed={sideBarCollapsed}
          onToggleSideBar={() =>
            setSideBarCollapsed(!sideBarCollapsed)
          }
        />

        <main className="flex-1 pt-20 overflow-y-auto bg-transparent">
          <div className="p-4 md:p-6">
            {currentPage === "dashboard" && <DashBoard />}
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;