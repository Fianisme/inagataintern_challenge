import React from "react";

export default function LoansStats() {
  const stats = [
    {
      title: "Personal Loans",
      value: "$50,000",
      iconBg: "bg-[#E7EDFF]",
      icon: (
        <img
          src="images/icons/loans_user.svg"
          alt="Personal Loans"
          className="w-[28px] h-[28px] tablet:w-[30px] tablet:h-[30px] object-contain"
        />
      ),
    },
    {
      title: "Corporate Loans",
      value: "$100,000",
      iconBg: "bg-[#FFF5E9]",
      icon: (
        <img
          src="images/icons/loans_briefcase.svg"
          alt="Corporate Loans"
          className="w-[28px] h-[28px] tablet:w-[30px] tablet:h-[30px] object-contain"
        />
      ),
    },
    {
      title: "Business Loans",
      value: "$500,000",
      iconBg: "bg-[#FFE0EB]",
      icon: (
        <img
          src="images/icons/loans_graph.svg"
          alt="Business Loans"
          className="w-[28px] h-[28px] tablet:w-[30px] tablet:h-[30px] object-contain"
        />
      ),
    },
    {
      title: "Custom Loans",
      value: "Choose Money",
      iconBg: "bg-[#E0F9F4]",
      icon: (
        <img
          src="images/icons/loans_custom.svg"
          alt="Custom Loans"
          className="w-[28px] h-[28px] tablet:w-[30px] tablet:h-[30px] object-contain"
        />
      ),
    },
  ];

  return (
    /*
      Mobile: flex + overflow-x-auto → cards slide horizontal
      Tablet+: grid 2 kolom
      Desktop+: grid 4 kolom
      -mx + px mengkompensasi padding parent agar scroll bisa bleeding ke pinggir layar
    */
    <div
      className="flex tablet:grid tablet:grid-cols-2 desktop:grid-cols-4
                    gap-4 tablet:gap-5 desktop:gap-8
                    overflow-x-auto tablet:overflow-x-visible
                    -mx-4 tablet:mx-0
                    px-4 tablet:px-0
                    snap-x snap-mandatory scrollbar-none pb-2"
    >
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-4 tablet:p-6 rounded-[25px] border border-[#DFEAF2]
                     flex items-center gap-4 tablet:gap-5 shadow-xs
                     flex-shrink-0 tablet:flex-shrink snap-start
                     w-[220px] tablet:w-auto"
        >
          {/* Icon circle */}
          <div
            className={`w-[60px] h-[60px] tablet:w-[70px] tablet:h-[70px] rounded-full flex items-center justify-center flex-shrink-0 ${item.iconBg}`}
          >
            {item.icon}
          </div>
          {/* Text */}
          <div className="text-left min-w-0">
            <p className="text-[#718EBF] text-[12px] tablet:text-[13px] font-sans font-medium truncate">
              {item.title}
            </p>
            <p className="text-[#343C6A] text-[15px] tablet:text-[17px] font-semibold mt-1 font-sans">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
