import React from 'react';

function Header({ title = 'Overview', onMenuClick }) {
  return (
    <header className="bg-white border-b border-[#E6EFF5] z-10 flex flex-col justify-center
                       px-4 tablet:px-6 desktop:px-8
                       py-4 tablet:py-0 tablet:h-24
                       transition-all duration-300">

      {/* Row utama: hamburger | title | avatar (mobile) / full layout (tablet+) */}
      <div className="flex items-center justify-between w-full">

        {/* Hamburger — hanya di bawah tablet */}
        <button
          onClick={onMenuClick}
          className="tablet:hidden text-[#343C6A] hover:text-[#1814F3] transition-colors cursor-pointer mr-3"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-[18px] tablet:text-[28px] font-bold text-[#343C6A] font-sans
                       text-center tablet:text-left flex-1 tablet:flex-initial">
          {title}
        </h2>

        {/* Desktop: search + action buttons + avatar */}
        <div className="hidden tablet:flex items-center gap-4 desktop:gap-6">
          {/* Search */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-[#8BA3CB]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for something"
              className="bg-[#F5F7FA] text-[#343C6A] placeholder-[#8BA3CB] pl-12 pr-6 py-3 rounded-full text-sm outline-none w-[250px] desktop:w-[300px] border border-transparent focus:border-[#1814F3]/20 transition-all font-medium"
            />
          </div>

          {/* Settings icon */}
          <button className="w-[50px] h-[50px] bg-[#F5F7FA] hover:bg-[#E6EFF5] text-[#718EBF] hover:text-[#343C6A] rounded-full flex items-center justify-center transition-all cursor-pointer">
            <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Notification icon */}
          <button className="w-[50px] h-[50px] bg-[#F5F7FA] hover:bg-[#E6EFF5] text-[#FE5C73] rounded-full flex items-center justify-center relative transition-all cursor-pointer">
            <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-3 right-3.5 w-2.5 h-2.5 bg-[#FF4B4A] border-2 border-white rounded-full" />
          </button>

          {/* Avatar */}
          <div className="w-[55px] h-[55px] rounded-full overflow-hidden border-2 border-transparent hover:border-[#1814F3]/20 transition-all cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
              alt="Profile User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile: avatar saja di kanan */}
        <div className="tablet:hidden w-[34px] h-[34px] rounded-full overflow-hidden ml-3">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
            alt="Profile User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Row 2: search bar di mobile (di bawah title row) */}
      <div className="relative mt-3 tablet:hidden w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#8BA3CB]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search for something"
          className="bg-[#F5F7FA] text-[#343C6A] placeholder-[#8BA3CB] pl-10 pr-6 py-2.5 rounded-full text-[13px] outline-none w-full border border-transparent focus:border-[#1814F3]/20 transition-all font-medium"
        />
      </div>
    </header>
  );
}

export default Header;