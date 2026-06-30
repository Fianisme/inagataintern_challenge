import React, { useState } from 'react';

export default function QuickTransfer() {
  const [amount, setAmount] = useState('525.50');

  const transferUsers = [
    {
      name: 'Livia Bator',
      role: 'CEO',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      name: 'Randy Press',
      role: 'Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      name: 'Workman',
      role: 'Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];

  return (
    <div className="bg-white p-7 rounded-[25px] border border-[#DFEAF2] h-[276px] flex flex-col justify-between shadow-xs">
      {/* User Display */}
      <div className="flex items-center justify-between px-2">
        <div className="flex-1 flex justify-around items-center">
          {transferUsers.map((user) => (
            <div key={user.name} className="flex flex-col items-center cursor-pointer group">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden mb-3 border-2 border-transparent group-hover:border-[#1814F3]/20 transition-all duration-300">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" 
                />
              </div>
              <h5 className="text-[15px] font-bold text-[#343C6A] text-center">{user.name}</h5>
              <p className="text-[12px] text-[#718EBF] mt-0.5 font-medium">{user.role}</p>
            </div>
          ))}
        </div>
        
        {/* Transfer Button  */}
        <button className="ml-4 w-[50px] h-[50px] bg-white hover:bg-[#F5F7FA] text-[#718EBF] hover:text-[#343C6A] rounded-full flex items-center justify-center shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-[#E6EFF5] transition-all cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Write Amount Field */}
      <div className="flex items-center gap-4 mt-2">
        <span className="text-[15px] font-semibold text-[#718EBF] whitespace-nowrap">
          Write Amount
        </span>
        
        {/* Input container pill */}
        <div className="flex-1 bg-[#F5F7FA] rounded-full flex items-center overflow-hidden h-[50px] relative">
          <input 
            type="text" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent text-[#343C6A] font-bold text-[16px] pl-6 pr-24 w-full h-full outline-none"
          />
          
          {/* Send Button */}
          <button className="absolute right-0 top-0 bottom-0 bg-[#1814F3] hover:bg-[#0F35BF] text-white px-7 rounded-full flex items-center gap-2.5 font-bold text-[16px] transition-all duration-200 shadow-md cursor-pointer h-full">
            <span>Send</span>
            <svg className="w-5 h-5 transform rotate-[-20deg]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
