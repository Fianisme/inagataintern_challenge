import React from "react";

export default function WeeklyActivity() {
  const weeklyData = [
    { day: "Sat", withdraw: 480, deposit: 240 },
    { day: "Sun", withdraw: 340, deposit: 130 },
    { day: "Mon", withdraw: 320, deposit: 230 },
    { day: "Tue", withdraw: 480, deposit: 370 },
    { day: "Wed", withdraw: 150, deposit: 250 },
    { day: "Thu", withdraw: 390, deposit: 220 },
    { day: "Fri", withdraw: 400, deposit: 330 },
  ];

  return (
    <div className="bg-white p-6 rounded-[25px] border border-[#DFEAF2] h-[322px] flex flex-col justify-between shadow-xs">
      {/* Legend Header */}
      <div className="flex justify-end gap-6 text-sm mb-5">
        <div className="flex items-center gap-2.5">
          {/* Deposit Legend Dot */}
          <span className="w-[15px] h-[15px] rounded-full bg-[#16DBCC]"></span>
          <span className="text-[#718EBF] font-medium">Deposit</span>
        </div>
        <div className="flex items-center gap-2.5">
          {/* Withdraw Legend Dot */}
          <span className="w-[15px] h-[15px] rounded-full bg-[#FE5C73]"></span>
          <span className="text-[#718EBF] font-medium">Withdraw</span>
        </div>
      </div>

      {/* Chart Container */}
      <div className="flex-1 flex items-start w-full h-[190px] mt-2">
        {/* Y-Axis Labels */}
        <div className="h-[160px] flex flex-col justify-between text-right pr-4 text-[#9199AF] text-[13px] font-sans font-medium select-none w-10">
          <span>500</span>
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>

        {/* Chart Area */}
        <div className="flex-1 h-[190px] relative">
          {/* Background Grid Lines */}
          <div className="absolute inset-0 h-[160px] flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <div
                key={idx}
                className="border-b border-[#F3F3F3] border-dashed w-full h-0"
              />
            ))}
          </div>

          {/* Columns of Bars */}
          <div className="absolute inset-0 h-full flex justify-around items-end z-10 px-2">
            {weeklyData.map((item) => {
              const withdrawHeightPercent = (item.withdraw / 500) * 100;
              const depositHeightPercent = (item.deposit / 500) * 100;

              return (
                <div
                  key={item.day}
                  className="flex flex-col items-center h-full justify-end w-[60px]"
                >
                  {/* Bars Container */}
                  <div className="flex items-end gap-3 h-[160px] w-full justify-center">
                    {/* Withdraw Bar */}
                    <div
                      style={{ height: `${withdrawHeightPercent}%` }}
                      className="w-[14px] bg-[#1814F3] rounded-t-[30px] hover:bg-[#0F35BF] transition-all duration-300 cursor-pointer"
                      title={`Withdraw: ${item.withdraw}`}
                    />
                    {/* Deposit Bar */}
                    <div
                      style={{ height: `${depositHeightPercent}%` }}
                      className="w-[14px] bg-[#16DBCC] rounded-t-[30px] hover:bg-[#11D1C4] transition-all duration-300 cursor-pointer"
                      title={`Deposit: ${item.deposit}`}
                    />
                  </div>
                  {/* Day Label */}
                  <span className="text-[#718EBF] text-[13px] font-sans font-medium mt-3.5 select-none">
                    {item.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
