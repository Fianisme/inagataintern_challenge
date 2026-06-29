import React from 'react';

export default function ExpenseStatistics() {
  return (
    <div className="bg-white p-6 rounded-[25px] border border-[#DFEAF2] h-[322px] flex items-center justify-center shadow-xs">
      <svg width="250" height="250" viewBox="0 0 250 250">
        {/* Segment 1: Others (35%) */}
        <g transform="translate(6, -3)">
          <path 
            d="M 125 125 L 125 25 A 100 100 0 0 1 205.9 183.8 Z" 
            fill="#1814F3" 
            className="transition-transform duration-200 hover:scale-105 origin-[125px_125px] cursor-pointer"
          />
          <text x="165" y="90" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" className="font-sans">
            35%
          </text>
          <text x="165" y="104" fill="white" fontSize="10" fontWeight="normal" textAnchor="middle" className="font-sans opacity-90">
            Others
          </text>
        </g>

        {/* Segment 2: Bill Expense (15%) */}
        <g transform="translate(3, 7)">
          <path 
            d="M 125 125 L 205.9 183.8 A 100 100 0 0 1 125 225 Z" 
            fill="#FC7900" 
            className="transition-transform duration-200 hover:scale-105 origin-[125px_125px] cursor-pointer"
          />
          <text x="158" y="170" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" className="font-sans">
            15%
          </text>
          <text x="158" y="182" fill="white" fontSize="10" fontWeight="normal" textAnchor="middle" className="font-sans opacity-90">
            Bills
          </text>
        </g>

        {/* Segment 3: Entertainment (30%) */}
        <g transform="translate(-6, 4)">
          <path 
            d="M 125 125 L 125 225 A 100 100 0 0 1 29.9 94.1 Z" 
            fill="#343C6A" 
            className="transition-transform duration-200 hover:scale-105 origin-[125px_125px] cursor-pointer"
          />
          <text x="75" y="155" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" className="font-sans">
            30%
          </text>
          <text x="75" y="167" fill="white" fontSize="9" fontWeight="normal" textAnchor="middle" className="font-sans opacity-90">
            Entertainment
          </text>
        </g>

        {/* Segment 4: Investment (20%) */}
        <g transform="translate(-4, -6)">
          <path 
            d="M 125 125 L 29.9 94.1 A 100 100 0 0 1 125 25 Z" 
            fill="#FA00FF" 
            className="transition-transform duration-200 hover:scale-105 origin-[125px_125px] cursor-pointer"
          />
          <text x="78" y="72" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" className="font-sans">
            20%
          </text>
          <text x="78" y="84" fill="white" fontSize="9" fontWeight="normal" textAnchor="middle" className="font-sans opacity-90">
            Investment
          </text>
        </g>
      </svg>
    </div>
  );
}
