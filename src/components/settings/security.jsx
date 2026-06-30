import React, { useState } from "react";

export default function Security() {
  const [securityData, setSecurityData] = useState({
    twoFactor: true,
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (field, value) => {
    setSecurityData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggle = () => {
    setSecurityData((prev) => ({
      ...prev,
      twoFactor: !prev.twoFactor,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Security siap dikirim ke API:", securityData);
    alert("Data keamanan berhasil diperbarui!");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Two-factor Authentication Section */}
      <div className="mb-7">
        <h3 className="text-[16px] font-medium text-[#343C6A] mb-4">
          Two-factor Authentication
        </h3>

        <label className="flex items-center gap-x-4 cursor-pointer select-none">
          <div className="relative">
            <input
              type="checkbox"
              checked={securityData.twoFactor}
              onChange={handleToggle}
              className="sr-only"
            />
            <div
              className={`w-[50px] h-[28px] rounded-full transition-colors duration-200 ${
                securityData.twoFactor ? "bg-[#16DBCC]" : "bg-[#E7EDF3]"
              }`}
            ></div>
            <div
              className={`absolute top-[3px] left-[3px] bg-white w-[22px] h-[22px] rounded-full transition-transform duration-200 ${
                securityData.twoFactor ? "transform translate-x-[22px]" : ""
              }`}
            ></div>
          </div>
          <span className="text-[15px] text-[#718EBF] font-normal">
            Enable or disable two factor authentication
          </span>
        </label>
      </div>

      {/* Change Password Section */}
      <div className="flex flex-col gap-y-5 max-w-[500px] mb-8">
        <h3 className="text-[16px] font-medium text-[#343C6A] mt-2">
          Change Password
        </h3>

        {/* Current Password */}
        <div className="flex flex-col gap-y-2">
          <label className="text-[15px] font-normal text-[#343C6A]">
            Current Password
          </label>
          <input
            type="password"
            placeholder="***********"
            value={securityData.currentPassword}
            onChange={(e) => handleChange("currentPassword", e.target.value)}
            className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3] placeholder-[#718EBF]/50"
          />
        </div>

        {/* New Password */}
        <div className="flex flex-col gap-y-2">
          <label className="text-[15px] font-normal text-[#343C6A]">
            New Password
          </label>
          <input
            type="password"
            placeholder="***********"
            value={securityData.newPassword}
            onChange={(e) => handleChange("newPassword", e.target.value)}
            className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3] placeholder-[#718EBF]/50"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="w-full md:w-[190px] h-[50px] bg-[#1814F3] hover:bg-blue-800 text-white font-medium text-[16px] rounded-[15px] transition-colors shadow-sm cursor-pointer"
        >
          Save
        </button>
      </div>
    </form>
  );
}
