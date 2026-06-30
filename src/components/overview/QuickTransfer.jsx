import React, { useState } from "react";

export default function QuickTransfer() {
  const [amount, setAmount] = useState("525.50");

  const transferUsers = [
    {
      name: "Livia Bator",
      role: "CEO",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      name: "Randy Press",
      role: "Director",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      name: "Workman",
      role: "Designer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    },
  ];

  return (
    // FIX CONTAINER: Sesuaikan prefix tablet dan desktop agar sinkron sejajar h-[322px] seperti di Dashboard
    <div
      className="bg-white rounded-[25px] border border-[#DFEAF2] shadow-sm flex flex-col justify-between
                p-5 min-h-[260px] 
                tablet:p-6 tablet:h-[322px] tablet:min-h-0
                desktop:p-7 desktop:h-[322px]"
    >
      {/* User avatars row */}
      <div className="flex items-center justify-between mt-2 tablet:mt-4 desktop:gap-4">
        <div className="flex-1 flex justify-between items-center mr-2">
          {transferUsers.map((user) => (
            <div
              key={user.name}
              className="flex flex-col items-center cursor-pointer group flex-shrink-0 w-20 tablet:w-22 desktop:w-24"
            >
              <div className="w-[50px] h-[50px] tablet:w-[60px] tablet:h-[60px] desktop:w-[70px] desktop:h-[70px] flex-shrink-0 rounded-full overflow-hidden mb-2 desktop:mb-3 border-2 border-transparent group-hover:border-[#1814F3]/20 transition-all duration-300">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <h5 className="text-[11px] desktop:text-[13px] font-bold text-[#343C6A] text-center truncate w-full px-1">
                {user.name}
              </h5>
              <p className="text-[9px] desktop:text-[11px] text-[#718EBF] mt-0.5 font-medium truncate w-full text-center">
                {user.role}
              </p>
            </div>
          ))}
        </div>

        {/* Arrow button */}
        <button className="w-[40px] h-[40px] tablet:w-[45px] tablet:h-[45px] desktop:w-[50px] desktop:h-[50px] flex-shrink-0 bg-white hover:bg-[#F5F7FA] text-[#718EBF] hover:text-[#343C6A] rounded-full flex items-center justify-center shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-[#E6EFF5] transition-all cursor-pointer">
          <svg
            className="w-5 h-5 desktop:w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Write Amount */}
      <div className="flex flex-col desktop:flex-row items-start desktop:items-center gap-2 tablet:gap-2.5 desktop:gap-4 mt-4 tablet:mt-2">
        <span className="text-[12px] desktop:text-[13px] font-semibold text-[#718EBF] whitespace-nowrap">
          Write Amount
        </span>

        <div className="w-full desktop:flex-1 bg-[#F5F7FA] rounded-full flex items-center overflow-hidden h-[46px] desktop:h-[50px] relative">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent text-[#343C6A] font-bold text-[13px] desktop:text-[14px] pl-5 pr-[110px] desktop:pr-[130px] w-full h-full outline-none"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-[#1814F3] hover:bg-[#0F35BF] text-white px-5 desktop:px-7 rounded-full flex items-center justify-center gap-2 font-bold text-[13px] desktop:text-[14px] transition-all duration-200 shadow-md cursor-pointer h-full min-w-[100px] desktop:min-w-[120px]">
            <span>Send</span>
            <svg
              className="w-4 h-4 desktop:w-5 desktop:h-5 transform rotate-[-20deg]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
