import React from 'react';

function Cards({ balance, cardHolder, validThru, cardNumber, isDark }) {
  return (
    <div className={`rounded-[25px] h-[270px] w-[415px] flex flex-col justify-between overflow-hidden text-left border transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-[#2D60FF] to-[#0F35BF] border-transparent text-white' 
        : 'bg-white border-[#DFEAF2] text-[#343C6A]'
    }`}>
      
      {/* Konten Atas & Tengah */}
      <div className="p-6 pb-4 flex flex-col justify-between flex-1">
        
        {/* 1. Baris Atas: Balance & Chip Icon */}
        <div className="flex justify-between items-start">
          <div>
            <p className={`text-[15px] font-normal ${isDark ? 'text-white/70' : 'text-[#718EBF]'}`}>
              Balance
            </p>
            <p className="text-[25px] font-semibold mt-1 font-sans">
              {balance}
            </p>
          </div>
          
          {/* SVG Chip yang Akurat */}
          <div className="w-[54px] h-[50px] flex items-center justify-center">
            {/* ponytail: replaced inline SVG chip with active/passive chip image assets */}
            <img 
              src={isDark ? "/images/cards/Chip_Card_Active.svg" : "/images/cards/Chip_Card_Passive.svg"} 
              alt="Card Chip" 
              className="w-[54px] h-[50px] object-contain"
            />
          </div>
        </div>

        {/* 2. Baris Tengah: Card Holder & Valid Thru */}
        <div className="flex gap-14">
          <div>
            <p className={`text-[14px] font-normal uppercase tracking-wider ${isDark ? 'text-white/70' : 'text-[#718EBF]'}`}>
              Card Holder
            </p>
            <p className={`text-[18px] font-semibold mt-1 ${isDark ? 'text-white' : 'text-[#343C6A]'}`}>
              {cardHolder}
            </p>
          </div>
          <div>
            <p className={`text-[14px] font-normal uppercase tracking-wider ${isDark ? 'text-white/70' : 'text-[#718EBF]'}`}>
              Valid Thru
            </p>
            <p className={`text-[18px] font-semibold mt-1 ${isDark ? 'text-white' : 'text-[#343C6A]'}`}>
              {validThru}
            </p>
          </div>
        </div>

      </div>

      {/* 3. Baris Bawah (Footer): Nomor Kartu & Logo Lingkaran */}
      <div className={`flex justify-between items-center px-6 py-5 ${
        isDark 
          ? 'bg-gradient-to-b from-white/15 to-white/0 border-t border-white/10' 
          : 'border-t border-[#DFEAF2]'
      }`}>
        <p className={`text-[18px] font-medium tracking-wider font-sans ${isDark ? 'text-white' : 'text-[#343C6A]'}`}>
          {cardNumber}
        </p>
        
        {/* Lingkaran Logo Overlapping */}
        <div className="flex -space-x-5 items-center">
          <div className={`w-[45px] h-[45px] rounded-full ${isDark ? 'bg-white/50' : 'bg-[#9199AF]/50'}`}></div>
          <div className={`w-[45px] h-[45px] rounded-full ${isDark ? 'bg-white/50' : 'bg-[#9199AF]/50'}`}></div>
        </div>
      </div>

    </div>
  );
}

export default Cards;