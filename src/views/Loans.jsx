import React from 'react';
import LoansStats from '../components/loans/Loans_stats';
import LoansOverview from '../components/loans/Loans_overview';

export default function Loans() {
  return (
    <div className="py-6 px-4 tablet:py-8 tablet:px-6 desktop:px-8 space-y-6 tablet:space-y-8 max-w-[1400px] mx-auto">

      {/* Stats cards — slideable di mobile, grid di tablet+ */}
      <LoansStats />

      {/* Active Loans Table */}
      <div className="space-y-3 tablet:space-y-4">
        <h3 className="text-[18px] tablet:text-[22px] font-bold text-[#343C6A] font-sans">
          Active Loans Overview
        </h3>
        <LoansOverview />
      </div>

    </div>
  );
}
