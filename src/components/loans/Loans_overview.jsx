import React from 'react';

export default function LoansOverview() {
  const loanData = [
    { id: '01.', amount: '$100,000', left: '$40,500', duration: '8 Months', rate: '12%', installment: '$2,000 / month', isActive: true },
    { id: '02.', amount: '$500,000', left: '$250,000', duration: '36 Months', rate: '10%', installment: '$8,000 / month', isActive: false },
    { id: '03.', amount: '$900,000', left: '$40,500', duration: '12 Months', rate: '12%', installment: '$5,000 / month', isActive: false },
    { id: '04.', amount: '$50,000', left: '$40,500', duration: '25 Months', rate: '5%', installment: '$2,000 / month', isActive: false },
    { id: '05.', amount: '$50,000', left: '$40,500', duration: '5 Months', rate: '16%', installment: '$10,000 / month', isActive: false },
    { id: '06.', amount: '$80,000', left: '$25,500', duration: '14 Months', rate: '8%', installment: '$2,000 / month', isActive: false },
    { id: '07.', amount: '$12,000', left: '$5,500', duration: '9 Months', rate: '13%', installment: '$500 / month', isActive: false },
    { id: '08.', amount: '$160,000', left: '$100,800', duration: '3 Months', rate: '12%', installment: '$900 / month', isActive: false }
  ];

  return (
    <div className="bg-white rounded-[25px] border border-[#DFEAF2] shadow-xs p-6 overflow-x-auto">
      {/* ponytail: standard native HTML table for responsive alignment and formatting */}
      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="border-b border-[#E6EFF5]">
            <th className="pb-4 text-[#718EBF] font-semibold text-[15px] font-sans">SL No</th>
            <th className="pb-4 text-[#718EBF] font-semibold text-[15px] font-sans">Loan Money</th>
            <th className="pb-4 text-[#718EBF] font-semibold text-[15px] font-sans">Left to repay</th>
            <th className="pb-4 text-[#718EBF] font-semibold text-[15px] font-sans">Duration</th>
            <th className="pb-4 text-[#718EBF] font-semibold text-[15px] font-sans">Interest rate</th>
            <th className="pb-4 text-[#718EBF] font-semibold text-[15px] font-sans">Installment</th>
            <th className="pb-4 text-[#718EBF] font-semibold text-[15px] font-sans text-right">Repay</th>
          </tr>
        </thead>
        <tbody>
          {loanData.map((item) => (
            <tr key={item.id} className="border-b border-[#E6EFF5] hover:bg-[#F5F7FA]/30 transition-colors last:border-0">
              <td className="py-5 text-[#343C6A] font-medium text-[15px] font-sans">{item.id}</td>
              <td className="py-5 text-[#343C6A] font-medium text-[15px] font-sans">{item.amount}</td>
              <td className="py-5 text-[#343C6A] font-medium text-[15px] font-sans">{item.left}</td>
              <td className="py-5 text-[#343C6A] font-medium text-[15px] font-sans">{item.duration}</td>
              <td className="py-5 text-[#343C6A] font-medium text-[15px] font-sans">{item.rate}</td>
              <td className="py-5 text-[#343C6A] font-medium text-[15px] font-sans">{item.installment}</td>
              <td className="py-5 text-right">
                <button 
                  className={`px-6 py-1.5 rounded-full border text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                    item.isActive 
                      ? 'border-[#1814F3] text-[#1814F3] hover:bg-[#1814F3] hover:text-white' 
                      : 'border-[#343C6A] text-[#343C6A] hover:border-[#1814F3] hover:text-[#1814F3]'
                  }`}
                >
                  Repay
                </button>
              </td>
            </tr>
          ))}
          {/* Total Row */}
          <tr className="font-bold text-[#FE5C73]">
            <td className="py-5 text-[15px] font-sans">Total</td>
            <td className="py-5 text-[15px] font-sans">$125,0000</td>
            <td className="py-5 text-[15px] font-sans">$750,000</td>
            <td className="py-5"></td>
            <td className="py-5"></td>
            <td className="py-5 text-[15px] font-sans">$50,000 / month</td>
            <td className="py-5 text-right"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
