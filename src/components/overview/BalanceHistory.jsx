import React from 'react';

export default function BalanceHistory() {
  return (
    <div className="bg-white p-7 rounded-[25px] border border-[#DFEAF2] h-[276px] flex flex-col justify-between shadow-xs">
      {/* Balance History Chart Line*/}
      <div className="flex-1 w-full relative">
        <svg className="w-full h-full" viewBox="0 0 650 200" preserveAspectRatio="none">
          <defs>
            {/* Fading area gradient */}
            <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2D60FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#2D60FF" stopOpacity="0.00" />
            </linearGradient>
          </defs>

          {/* Horizontal grid lines for values 0, 200, 400, 600, 800 */}
          {[0, 200, 400, 600, 800].map((val) => {
            const y = 15 + ((800 - val) / 800) * 140;
            return (
              <g key={val}>
                <line x1="45" y1={y} x2="640" y2={y} stroke="#DFEAF2" strokeWidth="1" strokeDasharray="3 3" />
                <text x="15" y={y + 4} fill="#9199AF" fontSize="13" textAnchor="start" className="font-sans font-medium">
                  {val}
                </text>
              </g>
            );
          })}

          {/* Curve coordinates for Jul to Jan (7 data points) */}
          {/* 1. Filled Area Path with Gradient */}
          <path 
            d="M 65,137.5 
               C 110,115, 110,95.5, 155,95.5 
               C 200,95.5, 200,106, 245,106 
               C 290,106, 290,29, 335,29 
               C 380,29, 380,102.5, 425,102.5 
               C 470,102.5, 470,44.7, 515,44.7 
               C 560,44.7, 560,51.7, 605,51.7
               L 605,155 
               L 65,155 Z" 
            fill="url(#balanceGradient)" 
          />

          {/* 2. Blue Line Stroke */}
          <path 
            d="M 65,137.5 
               C 110,115, 110,95.5, 155,95.5 
               C 200,95.5, 200,106, 245,106 
               C 290,106, 290,29, 335,29 
               C 380,29, 380,102.5, 425,102.5 
               C 470,102.5, 470,44.7, 515,44.7 
               C 560,44.7, 560,51.7, 605,51.7" 
            fill="none" 
            stroke="#1814F3" 
            strokeWidth="3.5" 
            strokeLinecap="round"
          />

          {/* X-axis labels under the chart */}
          {[
            { month: 'Jul', x: 65 },
            { month: 'Aug', x: 155 },
            { month: 'Sep', x: 245 },
            { month: 'Oct', x: 335 },
            { month: 'Nov', x: 425 },
            { month: 'Dec', x: 515 },
            { month: 'Jan', x: 605 },
          ].map((item) => (
            <text key={item.month} x={item.x} y="180" fill="#718EBF" fontSize="13" textAnchor="middle" className="font-sans font-medium">
              {item.month}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
