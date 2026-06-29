import React from 'react';
import Cards from '../components/Cards';
import RecentTransactions from '../components/RecentTransactions';
import WeeklyActivity from '../components/WeeklyActivity';
import ExpenseStatistics from '../components/ExpenseStatistics';
import QuickTransfer from '../components/QuickTransfer';
import BalanceHistory from '../components/BalanceHistory';

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto">
      
      {/* ROW 1: My Cards & Recent Transaction */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 columns: My Cards */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[22px] font-bold text-[#343C6A]">My Cards</h3>
            <button className="text-[17px] font-bold text-[#343C6A] hover:text-[#1814F3] transition-colors cursor-pointer">
              See All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {/* Dark Blue Mastercard */}
            <Cards 
              balance="$5,756" 
              cardHolder="Eddy Cusuma" 
              validThru="12/22" 
              cardNumber="3778 **** **** 1234" 
              isDark={true} 
            />
            {/* White Mastercard */}
            <Cards 
              balance="$5,756" 
              cardHolder="Eddy Cusuma" 
              validThru="12/22" 
              cardNumber="3778 **** **** 1234" 
              isDark={false} 
            />
          </div>
        </div>

        {/* Right 1 column: Recent Transaction */}
        <div className="space-y-4">
          <h3 className="text-[22px] font-bold text-[#343C6A]">Recent Transaction</h3>
          <RecentTransactions />
        </div>

      </div>

      {/* ROW 2: Weekly Activity & Expense Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 columns: Weekly Activity (Bar Chart) */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-[22px] font-bold text-[#343C6A]">Weekly Activity</h3>
          <WeeklyActivity />
        </div>

        {/* Right 1 column: Expense Statistics (Exploded Pie Chart) */}
        <div className="space-y-4">
          <h3 className="text-[22px] font-bold text-[#343C6A]">Expense Statistics</h3>
          <ExpenseStatistics />
        </div>

      </div>

      {/* ROW 3: Quick Transfer & Balance History */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left 2 columns of Row 3: Quick Transfer */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-[22px] font-bold text-[#343C6A]">Quick Transfer</h3>
          <QuickTransfer />
        </div>

        {/* Right 3 columns of Row 3: Balance History */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-[22px] font-bold text-[#343C6A]">Balance History</h3>
          <BalanceHistory />
        </div>

      </div>

    </div>
  );
}
