import React from 'react';

export default function LoansStats() {
  const stats = [
    {
      title: 'Personal Loans',
      value: '$50,000',
      iconBg: 'bg-[#E7EDFF]',
      icon: (
        /* ponytail: replaced custom SVG code with the loans_user.svg icon asset */
        <img src="/images/icons/loans_user.svg" alt="Personal Loans" className="w-[30px] h-[30px] object-contain" />
      )
    },
    {
      title: 'Corporate Loans',
      value: '$100,000',
      iconBg: 'bg-[#FFF5E9]',
      icon: (
        /* ponytail: replaced custom SVG code with the loans_briefcase.svg icon asset */
        <img src="/images/icons/loans_briefcase.svg" alt="Corporate Loans" className="w-[30px] h-[30px] object-contain" />
      )
    },
    {
      title: 'Business Loans',
      value: '$500,000',
      iconBg: 'bg-[#FFE0EB]',
      icon: (
        /* ponytail: replaced custom SVG code with the loans_graph.svg icon asset */
        <img src="/images/icons/loans_graph.svg" alt="Business Loans" className="w-[30px] h-[30px] object-contain" />
      )
    },
    {
      title: 'Custom Loans',
      value: 'Choose Money',
      iconBg: 'bg-[#E0F9F4]',
      icon: (
        /* ponytail: replaced custom SVG code with the loans_custom.svg icon asset */
        <img src="/images/icons/loans_custom.svg" alt="Custom Loans" className="w-[30px] h-[30px] object-contain" />
      )
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* ponytail: clean standard layout using standard flexbox cards with no unneeded abstractions */}
      {stats.map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-[25px] border border-[#DFEAF2] flex items-center gap-5 shadow-xs">
          {/* Circular Icon Wrapper */}
          <div className={`w-[70px] h-[70px] rounded-full flex items-center justify-center ${item.iconBg}`}>
            {item.icon}
          </div>
          {/* Card Text Content */}
          <div className="text-left">
            <p className="text-[#718EBF] text-[15px] font-sans font-medium">
              {item.title}
            </p>
            <p className="text-[#343C6A] text-[20px] font-semibold mt-1 font-sans">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
