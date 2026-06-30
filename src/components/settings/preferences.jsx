import React, { useState } from "react";

export default function Preferences() {
  const [preferences, setPreferences] = useState({
    currency: "USD",
    timeZone: "(GMT-12:00) International Date Line West",
    receiveDigitalCurrency: true,
    receiveMerchantOrder: false,
    recommendations: true,
  });

  const [isOpenCurrency, setIsOpenCurrency] = useState(false);
  const [isOpenTimeZone, setIsOpenTimeZone] = useState(false);

  const currencies = ["USD", "IDR", "EUR"];
  const timeZones = [
    "(GMT-12:00) International Date Line West",
    "(GMT+07:00) Jakarta, Bangkok, Hanoi",
  ];

  const handleChange = (field, value) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggle = (field) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Preferensi siap dikirim ke API:", preferences);
    alert("Preferensi berhasil disimpan!");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5 mb-8">
        {/* Currency Dropdown */}
        <div className="flex flex-col gap-y-2 relative">
          <label className="text-[15px] font-normal text-[#343C6A]">
            Currency
          </label>

          <div
            onClick={() => setIsOpenCurrency(!isOpenCurrency)}
            className={`w-full h-[50px] border rounded-[15px] px-5 flex items-center justify-between text-[#718EBF] text-[15px] bg-white cursor-pointer transition-all ${
              isOpenCurrency
                ? "border-[#1814F3] ring-2 ring-[#1814F3]/10"
                : "border-[#DFEAF2]"
            }`}
          >
            <span>{preferences.currency}</span>
            <svg
              className={`h-4 w-4 text-[#718EBF] transition-transform duration-200 ${isOpenCurrency ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {isOpenCurrency && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpenCurrency(false)}
              ></div>

              <div className="absolute top-[85px] left-0 w-full bg-white border border-[#DFEAF2] rounded-[15px] shadow-lg py-2 z-20 transition-all">
                {currencies.map((curr) => (
                  <div
                    key={curr}
                    onClick={() => {
                      handleChange("currency", curr);
                      setIsOpenCurrency(false);
                    }}
                    className={`px-5 py-3 text-[13px] cursor-pointer transition-colors ${
                      preferences.currency === curr
                        ? "bg-[#0070F3]/10 text-[#1814F3] font-medium"
                        : "text-[#718EBF] hover:bg-[#F4F5F7] hover:text-[#343C6A]"
                    }`}
                  >
                    {curr}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Time Zone Dropdown */}
        <div className="flex flex-col gap-y-2 relative">
          <label className="text-[15px] font-normal text-[#343C6A]">
            Time Zone
          </label>

          <div
            onClick={() => setIsOpenTimeZone(!isOpenTimeZone)}
            className={`w-full h-[50px] border rounded-[15px] px-5 flex items-center justify-between text-[#718EBF] text-[15px] bg-white cursor-pointer transition-all ${
              isOpenTimeZone
                ? "border-[#1814F3] ring-2 ring-[#1814F3]/10"
                : "border-[#DFEAF2]"
            }`}
          >
            <span className="truncate pr-4">{preferences.timeZone}</span>
            <svg
              className={`h-4 w-4 text-[#718EBF] flex-shrink-0 transition-transform duration-200 ${isOpenTimeZone ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {isOpenTimeZone && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpenTimeZone(false)}
              ></div>

              <div className="absolute top-[85px] left-0 w-full bg-white border border-[#DFEAF2] rounded-[15px] shadow-lg py-2 z-20 transition-all">
                {timeZones.map((tz) => (
                  <div
                    key={tz}
                    onClick={() => {
                      handleChange("timeZone", tz);
                      setIsOpenTimeZone(false);
                    }}
                    className={`px-5 py-3 text-[13px] cursor-pointer transition-colors ${
                      preferences.timeZone === tz
                        ? "bg-[#1814F3]/10 text-[#1814F3] font-medium"
                        : "text-[#718EBF] hover:bg-[#F4F5F7] hover:text-[#343C6A]"
                    }`}
                  >
                    {tz}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Notification Section */}
      <div className="mb-8">
        <h3 className="text-[16px] font-medium text-[#343C6A] mb-5">
          Notification
        </h3>

        <div className="flex flex-col gap-y-4">
          {/* Toggle 1 */}
          <label className="flex items-center gap-x-4 cursor-pointer select-none">
            <div className="relative">
              <input
                type="checkbox"
                checked={preferences.receiveDigitalCurrency}
                onChange={() => handleToggle("receiveDigitalCurrency")}
                className="sr-only"
              />
              <div
                className={`w-[50px] h-[28px] rounded-full transition-colors duration-200 ${preferences.receiveDigitalCurrency ? "bg-[#16DBCC]" : "bg-[#E7EDF3]"}`}
              ></div>
              <div
                className={`absolute top-[3px] left-[3px] bg-white w-[22px] h-[22px] rounded-full transition-transform duration-200 ${preferences.receiveDigitalCurrency ? "transform translate-x-[22px]" : ""}`}
              ></div>
            </div>
            <span className="text-[15px] text-[#718EBF] font-normal">
              I send or receive digital currency
            </span>
          </label>

          {/* Toggle 2 */}
          <label className="flex items-center gap-x-4 cursor-pointer select-none">
            <div className="relative">
              <input
                type="checkbox"
                checked={preferences.receiveMerchantOrder}
                onChange={() => handleToggle("receiveMerchantOrder")}
                className="sr-only"
              />
              <div
                className={`w-[50px] h-[28px] rounded-full transition-colors duration-200 ${preferences.receiveMerchantOrder ? "bg-[#16DBCC]" : "bg-[#E7EDF3]"}`}
              ></div>
              <div
                className={`absolute top-[3px] left-[3px] bg-white w-[22px] h-[22px] rounded-full transition-transform duration-200 ${preferences.receiveMerchantOrder ? "transform translate-x-[22px]" : ""}`}
              ></div>
            </div>
            <span className="text-[15px] text-[#718EBF] font-normal">
              I receive merchant order
            </span>
          </label>

          {/* Toggle 3 */}
          <label className="flex items-center gap-x-4 cursor-pointer select-none">
            <div className="relative">
              <input
                type="checkbox"
                checked={preferences.recommendations}
                onChange={() => handleToggle("recommendations")}
                className="sr-only"
              />
              <div
                className={`w-[50px] h-[28px] rounded-full transition-colors duration-200 ${preferences.recommendations ? "bg-[#16DBCC]" : "bg-[#E7EDF3]"}`}
              ></div>
              <div
                className={`absolute top-[3px] left-[3px] bg-white w-[22px] h-[22px] rounded-full transition-transform duration-200 ${preferences.recommendations ? "transform translate-x-[22px]" : ""}`}
              ></div>
            </div>
            <span className="text-[15px] text-[#718EBF] font-normal">
              There are recommendation for my account
            </span>
          </label>
        </div>
      </div>

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
