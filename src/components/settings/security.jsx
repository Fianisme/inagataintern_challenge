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
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

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
          <div className="relative w-full flex items-center">
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="***********"
              value={securityData.currentPassword}
              onChange={(e) => handleChange("currentPassword", e.target.value)}
              className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] pl-5 pr-12 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3] placeholder-[#718EBF]/50"
            />
            {/* Tombol Mata Intip (Hold to Reveal) */}
            <button
              type="button"
              onMouseDown={() => setShowCurrent(true)}
              onMouseUp={() => setShowCurrent(false)}
              onMouseLeave={() => setShowCurrent(false)}
              onTouchStart={(e) => {
                e.preventDefault();
                setShowCurrent(true);
              }}
              onTouchEnd={() => setShowCurrent(false)}
              className="absolute right-4 text-[#718EBF] hover:text-[#1814F3] transition-colors cursor-pointer select-none p-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {showCurrent ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                  />
                )}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="flex flex-col gap-y-2">
          <label className="text-[15px] font-normal text-[#343C6A]">
            New Password
          </label>
          <div className="relative w-full flex items-center">
            <input
              type={showNew ? "text" : "password"} // Berubah dinamis
              placeholder="***********"
              value={securityData.newPassword}
              onChange={(e) => handleChange("newPassword", e.target.value)}
              className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] pl-5 pr-12 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3] placeholder-[#718EBF]/50"
            />
            {/* Tombol Mata Intip (Hold to Reveal) */}
            <button
              type="button"
              onMouseDown={() => setShowNew(true)}
              onMouseUp={() => setShowNew(false)}
              onMouseLeave={() => setShowNew(false)}
              onTouchStart={(e) => {
                e.preventDefault();
                setShowNew(true);
              }}
              onTouchEnd={() => setShowNew(false)}
              className="absolute right-4 text-[#718EBF] hover:text-[#1814F3] transition-colors cursor-pointer select-none p-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {showNew ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                  />
                )}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="w-full md:w-[190px] h-[50px] bg-[#1814F3] hover:bg-blue-800 text-white font-medium text-[15px] rounded-[15px] transition-colors shadow-sm cursor-pointer"
        >
          Save
        </button>
      </div>
    </form>
  );
}
