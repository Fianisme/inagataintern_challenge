import React from "react";
import Cards from "../components/overview/Cards";
import RecentTransactions from "../components/overview/RecentTransactions";
import WeeklyActivity from "../components/overview/WeeklyActivity";
import ExpenseStatistics from "../components/overview/ExpenseStatistics";
import QuickTransfer from "../components/overview/QuickTransfer";
import BalanceHistory from "../components/overview/BalanceHistory";

export default function Dashboard() {
  return (
    <div className="py-6 px-4 tablet:py-8 tablet:px-6 desktop:px-8 max-w-[1440px] mx-auto overflow-hidden">
      {/* SATU GRID UTAMA UNTUK SEMUA KOMPONEN */}
      <div className="grid grid-cols-1 tablet:grid-cols-12 gap-x-6 tablet:gap-x-8 gap-y-6 tablet:gap-y-[32px]">
        {/* ================= ROW 1 (Dashboard.jsx) ================= */}
        {/* Left: My Cards */}
        <div className="tablet:col-span-8 space-y-3 tablet:space-y-4">
          {/* Tetap seperti kode kamu */}
          <div className="flex justify-between items-center">
            <h3 className="text-[18px] tablet:text-[22px] font-bold text-[#343C6A]">
              My Cards
            </h3>
            <button className="text-[15px] tablet:text-[17px] font-bold text-[#343C6A] hover:text-[#1814F3] transition-colors cursor-pointer">
              See All
            </button>
          </div>
          <div className="flex gap-5 tablet:gap-[30px] overflow-x-auto pb-2 scrollbar-none">
            <div className="min-w-[265px] tablet:min-w-[283px] desktop:flex-1">
              <Cards
                balance="$5,756"
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778 **** **** 1234"
                isDark={true}
              />
            </div>
            <div className="min-w-[265px] tablet:min-w-[283px] desktop:flex-1">
              <Cards
                balance="$5,756"
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778 **** **** 1234"
                isDark={false}
              />
            </div>
          </div>
        </div>

        {/* Right: Recent Transaction */}
        {/* FIX DI SINI: Hapus flex flex-col, kunci tinggi totalnya di tablet agar pas dengan tinggi kartu */}
        <div className="tablet:col-span-4 space-y-3 tablet:space-y-4">
          <h3 className="text-[18px] tablet:text-[22px] font-bold text-[#343C6A]">
            Recent Transaction
          </h3>
          {/* 
    DI SINI KUNCINYA: 
    Di mobile tingginya auto/min-h-230. 
    Di tablet 1024px, tinggi kartu berkisar di 185px-190px.
    Di desktop 1440px, tinggi kartu berkisar di 215px-225px.
  */}
          <div className="w-full tablet:h-[185px] desktop:h-[225px]">
            <RecentTransactions />
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        {/* Left: Weekly Activity */}
        <div className="tablet:col-span-8 space-y-3 tablet:space-y-4">
          <h3 className="text-[18px] tablet:text-[22px] font-bold text-[#343C6A]">
            Weekly Activity
          </h3>
          <div className="w-full h-[250px] tablet:h-[322px]">
            <WeeklyActivity />
          </div>
        </div>

        {/* Right: Expense Statistics */}
        <div className="tablet:col-span-4 space-y-3 tablet:space-y-4">
          <h3 className="text-[18px] tablet:text-[22px] font-bold text-[#343C6A]">
            Expense Statistics
          </h3>
          <div className="w-full h-[250px] tablet:h-[322px]">
            <ExpenseStatistics />
          </div>
        </div>

        {/* ================= ROW 3 ================= */}
        {/* Left: Quick Transfer */}
        <div className="tablet:col-span-5 space-y-3 tablet:space-y-4">
          <h3 className="text-[18px] tablet:text-[22px] font-bold text-[#343C6A]">
            Quick Transfer
          </h3>
          <div className="w-full min-h-[260px] tablet:min-h-[322px]">
            <QuickTransfer />
          </div>
        </div>

        {/* Right: Balance History */}
        <div className="tablet:col-span-7 space-y-3 tablet:space-y-4">
          <h3 className="text-[18px] tablet:text-[22px] font-bold text-[#343C6A]">
            Balance History
          </h3>
          <div className="w-full h-[260px] tablet:h-[322px]">
            <BalanceHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
