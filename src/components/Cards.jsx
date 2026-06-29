import React from 'react';

function Cards({ balance, cardHolder, validThru, cardNumber, isDark }) {
  return (
    <div className={`rounded-[25px] h-[270px] w-[415px] max-w-full flex flex-col justify-between overflow-hidden text-left border transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-[#2D60FF] to-[#0F35BF] border-transparent text-white' 
        : 'bg-white border-[#DFEAF2] text-[#343C6A]'
    }`}>
      
      {/* Konten Atas & Tengah */}
      {/* ponytail: adjusted padding to give card content more prominence and spacing */}
      <div className="p-6 pb-3 flex flex-col justify-between flex-1">
        
        {/* 1. Baris Atas: Balance & Chip Icon */}
        <div className="flex justify-between items-center">
          <div>
            {/* ponytail: scaled up balance typography for premium visual hierarchy */}
            <p className={`text-[12px] md:text-[13px] font-normal tracking-wide ${isDark ? 'text-white/70' : 'text-[#718EBF]'}`}>
              Balance
            </p>
            <p className="text-[20px] md:text-[22px] font-semibold mt-[2px] font-sans">
              {balance}
            </p>
          </div>
          
          {/* SVG Chip yang Akurat */}
          {/* ponytail: scaled chip width and height to match preferred larger card layout proportions */}
          <div className="w-[64px] h-[56px] flex items-center justify-center">
            <img 
              src={isDark ? "/images/cards/Chip_Card_Active.svg" : "/images/cards/Chip_Card_Passive.svg"} 
              alt="Card Chip" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 2. Baris Tengah: Card Holder & Valid Thru */}
        {/* ponytail: adjusted gap and size of names for improved clarity */}
        <div className="flex gap-16 mt-1">
          <div>
            <p className={`text-[11px] md:text-[12px] font-normal uppercase tracking-wider ${isDark ? 'text-white/70' : 'text-[#718EBF]'}`}>
              Card Holder
            </p>
            <p className={`text-[14px] md:text-[15px] font-semibold mt-[4px] font-sans ${isDark ? 'text-white' : 'text-[#343C6A]'}`}>
              {cardHolder}
            </p>
          </div>
          <div>
            <p className={`text-[11px] md:text-[12px] font-normal uppercase tracking-wider ${isDark ? 'text-white/70' : 'text-[#718EBF]'}`}>
              Valid Thru
            </p>
            <p className={`text-[14px] md:text-[15px] font-semibold mt-[4px] font-sans ${isDark ? 'text-white' : 'text-[#343C6A]'}`}>
              {validThru}
            </p>
          </div>
        </div>

      </div>

      {/* 3. Baris Bawah (Footer): Nomor Kartu & Logo Lingkaran */}
      {/* ponytail: set background styles to match dark/light modes from mockups */}
      <div className={`flex justify-between items-center px-6 py-[22px] ${
        isDark 
          ? 'bg-gradient-to-b from-white/15 to-white/0 border-t border-white/10' 
          : 'border-t border-[#DFEAF2] bg-[#F5F7FA]/10'
      }`}>
        {/* ponytail: card number size and letter-spacing scaled up */}
        <p className={`text-[20px] md:text-[22px] font-semibold tracking-[2px] font-sans ${isDark ? 'text-white' : 'text-[#343C6A]'}`}>
          {cardNumber}
        </p>
        
        {/* Lingkaran Logo Overlapping */}
        {/* ponytail: increased circles sizing to fit footer padding layout */}
        <div className="flex -space-x-3.5 items-center">
          <div className={`w-[34px] h-[34px] rounded-full ${isDark ? 'bg-white/50' : 'bg-[#9199AF]/50'}`}></div>
          <div className={`w-[34px] h-[34px] rounded-full ${isDark ? 'bg-white/20' : 'bg-[#9199AF]/20'}`}></div>
        </div>
      </div>

    </div>
  );
}

export default Cards;