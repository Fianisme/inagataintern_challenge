import React, { useState } from "react";

function Cards({ balance, cardHolder, validThru, cardNumber, isDark }) {
  // Tambahkan state untuk mendeteksi apakah kartu sedang terbalik atau tidak
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    /* Container untuk kartu yang support efek 3D */
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="w-[415px] h-[270px] bg-transparent cursor-pointer group [perspective:1000px] select-none"
    >
      {/* Animasi flip kartu */}
      <div
        className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Frontcard */}
        <div
          className={`absolute inset-0 w-full h-full rounded-[25px] flex flex-col justify-between overflow-hidden text-left border [backface-visibility:hidden] ${
            isDark
              ? "bg-gradient-to-br from-[#2D60FF] to-[#0F35BF] border-transparent text-white"
              : "bg-white border-[#DFEAF2] text-[#343C6A]"
          }`}
        >
          <div className="p-6 pb-4 flex flex-col justify-between flex-1">
            <div className="flex justify-between items-start">
              <div>
                <p
                  className={`text-[15px] font-normal ${isDark ? "text-white/70" : "text-[#718EBF]"}`}
                >
                  Balance
                </p>
                <p className="text-[25px] font-semibold mt-1 font-sans">
                  {balance}
                </p>
              </div>

              <div className="w-[54px] h-[50px] flex items-center justify-center">
                <img
                  src={
                    isDark
                      ? "/images/cards/Chip_Card_Active.svg"
                      : "/images/cards/Chip_Card_Passive.svg"
                  }
                  alt="Card Chip"
                  className="w-[54px] h-[50px] object-contain"
                />
              </div>
            </div>

            <div className="flex gap-14">
              <div>
                <p
                  className={`text-[14px] font-normal uppercase tracking-wider ${isDark ? "text-white/70" : "text-[#718EBF]"}`}
                >
                  Card Holder
                </p>
                <p
                  className={`text-[18px] font-semibold mt-1 ${isDark ? "text-white" : "text-[#343C6A]"}`}
                >
                  {cardHolder}
                </p>
              </div>
              <div>
                <p
                  className={`text-[14px] font-normal uppercase tracking-wider ${isDark ? "text-white/70" : "text-[#718EBF]"}`}
                >
                  Valid Thru
                </p>
                <p
                  className={`text-[18px] font-semibold mt-1 ${isDark ? "text-white" : "text-[#343C6A]"}`}
                >
                  {validThru}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-between items-center px-6 py-5 ${
              isDark
                ? "bg-gradient-to-b from-white/15 to-white/0 border-t border-white/10"
                : "border-t border-[#DFEAF2]"
            }`}
          >
            <p
              className={`text-[18px] font-medium tracking-wider font-sans ${isDark ? "text-white" : "text-[#343C6A]"}`}
            >
              {cardNumber}
            </p>

            <div className="flex -space-x-5 items-center">
              <div
                className={`w-[45px] h-[45px] rounded-full ${isDark ? "bg-white/50" : "bg-[#9199AF]/50"}`}
              ></div>
              <div
                className={`w-[45px] h-[45px] rounded-full ${isDark ? "bg-white/50" : "bg-[#9199AF]/50"}`}
              ></div>
            </div>
          </div>
        </div>

        {/* Backcard */}
        <div
          className={`absolute inset-0 w-full h-full rounded-[25px] flex flex-col justify-between py-6 text-left border [backface-visibility:hidden] [transform:rotateY(180deg)] ${
            isDark
              ? "bg-gradient-to-br from-[#0F35BF] to-[#2D60FF] border-transparent text-white"
              : "bg-white border-[#DFEAF2] text-[#343C6A] shadow-sm"
          }`}
        >
          <div className="w-full h-[50px] bg-[#1A1A1A] mt-2"></div>

          <div className="px-8 flex items-center gap-x-4">
            <div
              className={`flex-1 h-[40px] rounded-[8px] flex items-center px-4 italic text-[13px] ${
                isDark
                  ? "bg-white/20 text-white/70"
                  : "bg-[#F4F5F7] text-[#718EBF]"
              }`}
            >
              Authorized Signature
            </div>
            <div className="bg-[#1814F3] text-white h-[36px] px-4 flex items-center justify-center rounded-[8px] font-mono font-bold text-[15px] tracking-wider shadow-md">
              952
            </div>
          </div>

          <div className="px-8 flex justify-between items-center text-[11px] opacity-60">
            <span className={!isDark ? "text-[#718EBF]" : ""}>
              Premium Security Card
            </span>
            <img
              src="/images/sidebar/Logo.svg"
              alt="Bankku"
              className={`h-4 ${isDark ? "brightness-0 invert" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
