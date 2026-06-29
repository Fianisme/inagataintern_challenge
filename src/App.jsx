import React from 'react';
import Sidebar from './components/common/Sidebar'; // Sesuaikan dengan nama komponen sidebarmu
import Header from './components/common/Header';   // Sesuaikan dengan nama komponen headermu
import Dashboard from './views/Dashboard'; 

export default function App() {
  return (
    <div className="flex w-full h-screen bg-[#F5F7FA] overflow-hidden font-sans">
      
      {/* 1. Manggil Sidebar Komponen Asli Kamu */}
      <Sidebar />

      {/* AREA KANAN */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* 2. Manggil Header Komponen Asli Kamu */}
        <Header />

        {/* 3. Manggil View Dashboard yang Isinya Grid Kartu */}
        <main className="flex-1 overflow-y-auto bg-[#F5F7FA]">
          <Dashboard />
        </main>

      </div>
    </div>
  );
}