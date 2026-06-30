import React, { useState } from "react";

function Cards({ balance, cardHolder, validThru, cardNumber, isDark }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="w-full min-w-[260px] tablet:min-w-0 max-w-[415px] aspect-[29/19]
                 flex-shrink-0 tablet:flex-shrink snap-start
                 bg-transparent cursor-pointer group [perspective:1000px] select-none p-1"
    >
      {/* Flip wrapper */}
      <div
        className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT CARD */}
        <div
          className={`absolute inset-0 w-full h-full rounded-[15px] tablet:rounded-[15px] flex flex-col justify-between overflow-hidden text-left border [backface-visibility:hidden] ${
            isDark
              ? "bg-gradient-to-br from-[#2D60FF] to-[#0F35BF] border-transparent text-white"
              : "bg-white border-[#DFEAF2] text-[#343C6A]"
          }`}
        >
          <div className="p-4 tablet:p-6 pb-2 tablet:pb-4 flex flex-col justify-between flex-1">
            <div className="flex justify-between items-start">
              <div>
                <p
                  className={`text-[9px] tablet:text-[9px] font-normal ${isDark ? "text-white/70" : "text-[#718EBF]"}`}
                >
                  Balance
                </p>
                <p className="text-[14px] tablet:text-[15px] desktop:text-[21px] font-semibold mt-0.5 font-sans">
                  {balance}
                </p>
              </div>
              <div className="w-[35px] h-[32px] tablet:w-[45px] tablet:h-[45px] desktop:w-[54px] desktop:h-[50px] flex items-center justify-center">
                <img
                  src={
                    isDark
                      ? "images/cards/Chip_Card_Active.svg"
                      : "images/cards/Chip_Card_Passive.svg"
                  }
                  alt="Card Chip"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex gap-6 tablet:gap-12 desktop:gap-14">
              <div>
                <p
                  className={`text-[8px] tablet:text-[9px] desktop:text-[12px] font-normal uppercase tracking-wider ${isDark ? "text-white/70" : "text-[#718EBF]"}`}
                >
                  Card Holder
                </p>
                <p
                  className={`text-[11px] tablet:text-[12px] desktop:text-[15px] font-semibold mt-0.5 tablet:mt-1 ${isDark ? "text-white" : "text-[#343C6A]"}`}
                >
                  {cardHolder}
                </p>
              </div>
              <div>
                <p
                  className={`text-[8px] tablet:text-[9px] desktop:text-[12px] font-normal uppercase tracking-wider ${isDark ? "text-white/70" : "text-[#718EBF]"}`}
                >
                  Valid Thru
                </p>
                <p
                  className={`text-[11px] tablet:text-[12px] desktop:text-[15px] font-semibold mt-0.5 tablet:mt-1 ${isDark ? "text-white" : "text-[#343C6A]"}`}
                >
                  {validThru}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-between items-center px-4 tablet:px-6 py-2.5 tablet:pt-3.5 tablet:pb-4.5 ${
              isDark
                ? "bg-gradient-to-b from-white/15 to-white/0 border-t border-white/10"
                : "border-t border-[#DFEAF2]"
            }`}
          >
            <p
              className={`text-[11px] tablet:text-[11px] desktop:text-[15px] font-medium tracking-wider font-sans ${isDark ? "text-white" : "text-[#343C6A]"}`}
            >
              {cardNumber}
            </p>
            <div className="flex -space-x-3 tablet:-space-x-4 desktop:-space-x-5 items-center">
              {/* Mastercard circles */}
              <div
                className={`w-[28px] h-[28px] tablet:w-[30px] tablet:h-[30px] desktop:w-[45px] desktop:h-[45px] rounded-full ${isDark ? "bg-white/50" : "bg-[#9199AF]/50"}`}
              />
              <div
                className={`w-[28px] h-[28px] tablet:w-[30px] tablet:h-[30px] desktop:w-[45px] desktop:h-[45px] rounded-full ${isDark ? "bg-white/50" : "bg-[#9199AF]/50"}`}
              />
            </div>
          </div>
        </div>

        {/* BACK CARD */}
        <div
          className={`absolute inset-0 w-full h-full rounded-[15px] tablet:rounded-[15px] flex flex-col justify-between py-4 tablet:py-6 text-left border [backface-visibility:hidden] [transform:rotateY(180deg)] ${
            isDark
              ? "bg-gradient-to-br from-[#0F35BF] to-[#2D60FF] border-transparent text-white"
              : "bg-white border-[#DFEAF2] text-[#343C6A] shadow-sm"
          }`}
        >
          <div className="w-full h-[30px] tablet:h-[50px] bg-[#1A1A1A] mt-2" />
          <div className="px-4 tablet:px-8 flex items-center gap-x-4">
            <div
              className={`flex-1 h-[28px] tablet:h-[40px] rounded-[6px] tablet:rounded-[5px] flex items-center px-3 tablet:px-4 italic text-[9px] tablet:text-[9px] ${
                isDark
                  ? "bg-white/20 text-white/70"
                  : "bg-[#F4F5F7] text-[#718EBF]"
              }`}
            >
              Authorized Signature
            </div>
            <div className="bg-[#1814F3] text-white h-[24px] tablet:h-[36px] px-3 tablet:px-4 flex items-center justify-center rounded-[6px] tablet:rounded-[8px] font-mono font-bold text-[11px] tablet:text-[13px] tracking-wider shadow-md">
              952
            </div>
          </div>
          <div className="px-4 tablet:px-8 flex justify-between items-center text-[8px] tablet:text-[10px] opacity-60">
            <span className={!isDark ? "text-[#718EBF]" : ""}>
              Premium Security Card
            </span>
            <img
              src="images/sidebar/Logo.svg"
              alt="Bankku"
              className={`h-3 tablet:h-4 ${isDark ? "brightness-0 invert" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
