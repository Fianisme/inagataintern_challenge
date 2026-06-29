import React, { useState } from 'react';
import Sidebar from './components/common/Sidebar'; // Sesuaikan dengan nama komponen sidebarmu
import Header from './components/common/Header';   // Sesuaikan dengan nama komponen headermu
import Dashboard from './views/Dashboard'; 
import Loans from './views/Loans';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  // Map menu item names to header titles
  const menuTitles = {
    Dashboard: 'Overview',
    Loans: 'Loans',
    Transactions: 'Transactions',
    Accounts: 'Accounts',
    Investments: 'Investments',
    'Credit Cards': 'Credit Cards',
    Services: 'Services',
    'My Privileges': 'My Privileges',
    Setting: 'Setting'
  };

  const renderView = () => {
    switch (activeMenu) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Loans':
        return <Loans />;
      default:
        // Fallback or placeholder for other views
        return (
          <div className="p-8 max-w-[1400px] mx-auto text-left">
            <h3 className="text-[22px] font-bold text-[#343C6A] font-sans mb-4">
              {menuTitles[activeMenu] || activeMenu} Page
            </h3>
            <p className="text-[#718EBF] font-medium">This page is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex w-full h-screen bg-[#F5F7FA] overflow-hidden font-sans">
      
      {/* 1. Manggil Sidebar Komponen Asli Kamu */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* AREA KANAN */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* 2. Manggil Header Komponen Asli Kamu */}
        <Header title={menuTitles[activeMenu] || activeMenu} />

        {/* 3. Manggil View Dashboard/Loans yang Isinya Grid Kartu */}
        <main className="flex-1 overflow-y-auto bg-[#F5F7FA]">
          {renderView()}
        </main>

      </div>
    </div>
  );
}