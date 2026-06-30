import React, { useState } from "react";
import EditProfile from "../components/settings/editprofile";
import Preferences from "../components/settings/preferences";
import Security from "../components/settings/security";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("edit-profile");

  const tabs = [
    { id: "edit-profile", label: "Edit Profile" },
    { id: "preferences",  label: "Preferences" },
    { id: "security",     label: "Security" },
  ];

  return (
    <div className="p-4 tablet:p-6 desktop:p-10 bg-[#F5F7FA] min-h-screen font-sans">
      {/* Card putih utama */}
      <div className="bg-white rounded-[25px] border border-[#DFEAF2]
                      p-4 tablet:p-8 desktop:p-10
                      w-full max-w-[1110px] mx-auto">

        {/* Tab navigation */}
        <div className="flex border-b border-[#F4F5F7] mb-6 tablet:mb-10
                        gap-x-4 tablet:gap-x-10
                        overflow-x-auto scrollbar-none flex-nowrap relative">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-[14px] tablet:text-[16px] font-medium transition-colors duration-300
                          cursor-pointer relative whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id
                  ? "text-[#1814F3] font-semibold"
                  : "text-[#718EBF] hover:text-[#1814F3]"
              }`}
            >
              {tab.label}
              {/* Underline — dibatasi lebar teks via w-full relative ke button */}
              <span
                className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#1814F3] rounded-t-full
                            transition-all duration-300 origin-left ${
                  activeTab === tab.id ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div>
          {activeTab === "edit-profile" && <EditProfile />}
          {activeTab === "preferences"  && <Preferences />}
          {activeTab === "security"     && <Security />}
        </div>
      </div>
    </div>
  );
}
