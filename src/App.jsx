import React, { useState } from "react";
import Sidebar from "./components/common/Sidebar";
import Header from "./components/common/Header";
import Dashboard from "./views/Dashboard";
import Loans from "./views/Loans";
import Settings from "./views/Settings";

export default function App() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  // Map menu item names to header titles
  const menuTitles = {
    Dashboard: "Overview",
    Loans: "Loans",
    Transactions: "Transactions",
    Accounts: "Accounts",
    Investments: "Investments",
    "Credit Cards": "Credit Cards",
    Services: "Services",
    "My Privileges": "My Privileges",
    Setting: "Setting",
  };

  const renderView = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <Dashboard />;
      case "Loans":
        return <Loans />;
      case "Setting":
        return <Settings />;
      default:
        // Fallback or placeholder for other views
        return (
          <div className="p-8 max-w-[1400px] mx-auto text-left">
            <h3 className="text-[22px] font-bold text-[#343C6A] font-sans mb-4">
              {menuTitles[activeMenu] || activeMenu} Page
            </h3>
            <p className="text-[#718EBF] font-medium">
              This page is under development.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex w-full h-screen bg-[#F5F7FA] overflow-hidden font-sans">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <Header title={menuTitles[activeMenu] || activeMenu} />

        {/* Main Content  */}
        <main className="flex-1 overflow-y-auto bg-[#F5F7FA]">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
