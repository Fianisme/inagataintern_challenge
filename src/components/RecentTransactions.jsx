import React from 'react';

function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      title: "Deposit from my Card",
      date: "28 January 2021",
      amount: -850,
      iconBg: "bg-[#FFF5D9]",
      iconColor: "text-[#FFBB38]",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
      iconBg: "bg-[#E7EDFF]",
      iconColor: "text-[#396AFF]",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 21h3.4a1 1 0 001-.8L13 10h3.5c2.5 0 4.5-2 4.5-4.5S19 1 16.5 1H6a1 1 0 00-1 1l-3 18a1 1 0 001 1h4zm1-18h8.5C18 3 19 4 19 5.5S18 8 16.5 8H12a1 1 0 00-1 .8L9.5 17H7.8L9.8 5H8z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: 5400,
      iconBg: "bg-[#DCFCE7]",
      iconColor: "text-[#16DBCC]",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  return (
    <div className="bg-white p-6 rounded-[25px] border border-[#DFEAF2] h-[270px] flex flex-col justify-between shadow-xs">
      <div className="space-y-[15px] overflow-y-auto pr-1 scrollbar-thin">
        {transactions.map((item) => (
          <div key={item.id} className="flex items-center justify-between hover:bg-[#F5F7FA]/40 p-1.5 rounded-xl transition-all duration-200">
            {/* Left: Icon & Text */}
            <div className="flex items-center gap-4.5">
              <div className={`w-[50px] h-[50px] ${item.iconBg} ${item.iconColor} rounded-full flex items-center justify-center`}>
                {item.icon}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-[15px] text-[#343C6A]">{item.title}</h4>
                <p className="text-[12px] text-[#718EBF] mt-0.5">{item.date}</p>
              </div>
            </div>
            {/* Right: Amount */}
            <span className={`font-bold text-[16px] ${item.amount < 0 ? 'text-[#FF4B4A]' : 'text-[#41D4A8]'}`}>
              {item.amount < 0 
                ? `-$${Math.abs(item.amount)}` 
                : `+$${item.amount.toLocaleString()}`
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTransactions;