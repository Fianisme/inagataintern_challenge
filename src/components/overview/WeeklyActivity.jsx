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
    <div className="bg-white p-5 tablet:p-6 rounded-[25px] border border-[#DFEAF2]
                    h-full min-h-[260px] tablet:min-h-[322px]
                    flex flex-col justify-between shadow-xs">
      {/* Legend */}
      <div className="flex justify-end gap-4 tablet:gap-6 text-sm mb-4 tablet:mb-5">
        <div className="flex items-center gap-2">
          <span className="w-[12px] h-[12px] tablet:w-[15px] tablet:h-[15px] rounded-full bg-[#16DBCC]" />
          <span className="text-[#718EBF] font-medium text-[12px] tablet:text-[14px]">Deposit</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-[12px] h-[12px] tablet:w-[15px] tablet:h-[15px] rounded-full bg-[#FE5C73]" />
          <span className="text-[#718EBF] font-medium text-[12px] tablet:text-[14px]">Withdraw</span>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 flex items-start w-full">
        {/* Y-Axis */}
        <div className="h-[140px] tablet:h-[160px] flex flex-col justify-between text-right pr-2 tablet:pr-4 text-[#9199AF] text-[11px] tablet:text-[13px] font-sans font-medium select-none w-8 tablet:w-10">
          <span>500</span>
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>

        {/* Bars Area */}
        <div className="flex-1 h-[170px] tablet:h-[190px] relative">
          {/* Grid lines */}
          <div className="absolute inset-0 h-[140px] tablet:h-[160px] flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <div key={idx} className="border-b border-[#F3F3F3] border-dashed w-full h-0" />
            ))}
          </div>

          {/* Bar columns */}
          <div className="absolute inset-0 h-full flex justify-around items-end z-10 px-1 tablet:px-2">
            {weeklyData.map((item) => {
              const withdrawH = (item.withdraw / 500) * 100;
              const depositH  = (item.deposit  / 500) * 100;
              return (
                <div
                  key={item.day}
                  className="flex flex-col items-center h-full justify-end w-auto flex-1 max-w-[60px]"
                >
                  <div className="flex items-end gap-[3px] tablet:gap-3 h-[140px] tablet:h-[160px] w-full justify-center">
                    {/* Withdraw bar (blue) */}
                    <div
                      style={{ height: `${withdrawH}%` }}
                      className="w-[7px] tablet:w-[14px] bg-[#1814F3] rounded-t-[30px] hover:bg-[#0F35BF] transition-all duration-300 cursor-pointer"
                      title={`Withdraw: ${item.withdraw}`}
                    />
                    {/* Deposit bar (cyan) */}
                    <div
                      style={{ height: `${depositH}%` }}
                      className="w-[7px] tablet:w-[14px] bg-[#16DBCC] rounded-t-[30px] hover:bg-[#11D1C4] transition-all duration-300 cursor-pointer"
                      title={`Deposit: ${item.deposit}`}
                    />
                  </div>
                  <span className="text-[#718EBF] text-[11px] tablet:text-[13px] font-sans font-medium mt-2 tablet:mt-3.5 select-none">
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
