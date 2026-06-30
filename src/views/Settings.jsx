import React, { useState } from "react";
import EditProfile from "../components/settings/editprofile";
import Preferences from "../components/settings/preferences";
import Security from "../components/settings/security";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("edit-profile");

  return (
    <div className="p-6 md:p-10 bg-[#F5F7FA] min-h-screen font-sans">
      {/* Container Utama (Card Putih Besar) */}
      <div className="bg-white rounded-[25px] border border-[#DFEAF2] p-8 md:p-10 w-full max-w-[1110px] mx-auto">
        {/* Navigasi Tab */}
        <div className="flex border-b border-[#F4F5F7] mb-10 gap-x-10 relative">
          {/* Tab 1: Edit Profile */}
          <button
            onClick={() => setActiveTab("edit-profile")}
            className={`pb-3 text-[16px] font-medium transition-colors duration-300 cursor-pointer ${
              activeTab === "edit-profile"
                ? "text-[#1814F3] font-semibold"
                : "text-[#718EBF] hover:text-[#1814F3]"
            }`}
          >
            Edit Profile
          </button>

          {/* Tab 2: Preferences */}
          <button
            onClick={() => setActiveTab("preferences")}
            className={`pb-3 text-[16px] font-medium transition-colors duration-300 cursor-pointer ${
              activeTab === "preferences"
                ? "text-[#1814F3] font-semibold"
                : "text-[#718EBF] hover:text-[#1814F3]"
            }`}
          >
            Preferences
          </button>

          {/* Tab 3: Security */}
          <button
            onClick={() => setActiveTab("security")}
            className={`pb-3 text-[16px] font-medium transition-colors duration-300 cursor-pointer ${
              activeTab === "security"
                ? "text-[#1814F3] font-semibold"
                : "text-[#718EBF] hover:text-[#1814F3]"
            }`}
          >
            Security
          </button>

          {/* Efek underline animasi page aktif */}
          <span
            className={`absolute bottom-0 h-[3px] bg-[#1814F3] rounded-t-full transition-all duration-500 ${
              activeTab === "edit-profile"
                ? "left-0 w-[82px]"
                : activeTab === "preferences"
                  ? "left-[122px] w-[94px]"
                  : "left-[256px] w-[66px]"
            }`}
            style={{
              // efek jelly saat underline pindah tab
              transitionTimingFunction: "cubic-bezier(0.45, -0.5, 0.23, 1.6)",
            }}
          ></span>
        </div>
        {/* Konten Berdasarkan Tab yang Aktif */}
        <div>
          {activeTab === "edit-profile" && <EditProfile />}
          {activeTab === "preferences" && <Preferences />}
          {activeTab === "security" && <Security />}
        </div>
      </div>
    </div>
  );
}
