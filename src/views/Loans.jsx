import React from 'react';
import LoansStats from '../components/loans/Loans_stats';
import LoansOverview from '../components/loans/Loans_overview';

export default function Loans() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto">
      {/* Top Stats Overview Cards */}
      <LoansStats />

      {/* Active Loans Table Section */}
      <div className="space-y-4">
        <h3 className="text-[22px] font-bold text-[#343C6A] font-sans">
          Active Loans Overview
        </h3>
        <LoansOverview />
      </div>
    </div>
  );
}
