import React, { useState } from 'react';

function Sidebar({ activeMenu: propActiveMenu, setActiveMenu: propSetActiveMenu }) {
  const [localActiveMenu, setLocalActiveMenu] = useState('Dashboard');

  const activeMenu = propActiveMenu !== undefined ? propActiveMenu : localActiveMenu;
  const setActiveMenu = propSetActiveMenu !== undefined ? propSetActiveMenu : setLocalActiveMenu;

  // ponytail: simplified menuItems by specifying iconName instead of massive SVG elements
  const menuItems = [
    { name: 'Dashboard', iconName: 'dashboard.svg' },
    { name: 'Transactions', iconName: 'transaction.svg' },
    { name: 'Accounts', iconName: 'account.svg' },
    { name: 'Investments', iconName: 'Investments.svg' },
    { name: 'Credit Cards', iconName: 'CreditCards.svg' },
    { name: 'Loans', iconName: 'loans.svg' },
    { name: 'Services', iconName: 'Services.svg' },
    { name: 'My Privileges', iconName: 'Privileges.svg' },
    { name: 'Setting', iconName: 'settings.svg' }
  ];

  return (
    <aside className="w-[250px] min-w-[250px] h-screen bg-white border-r border-[#E6EFF5] flex flex-col z-20 transition-all duration-300">
      {/* Brand Header */}
      <div className="h-24 flex items-center px-8">
        {/* ponytail: replaced custom SVG and text markup with Logo.svg asset */}
        <img src="/images/sidebar/Logo.svg" alt="Bankku Logo" className="h-[36px] w-auto" />
      </div>

      {/* Menu List */}
      <nav className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = activeMenu === item.name;
          return (
            <div
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`group flex items-center gap-4 py-4 px-8 cursor-pointer relative transition-all duration-200 ${
                isActive 
                  ? 'text-[#1814F3]' 
                  : 'text-[#B1B1B1] hover:text-[#343C6A]'
              }`}
            >
              {/* Left border indicator bar */}
              <div 
                className={`absolute left-0 top-0 bottom-0 w-[6px] bg-[#1814F3] rounded-r-md transition-transform duration-300 ${
                  isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-50'
                }`}
              />
              
              {/* Icon */}
              {/* ponytail: replaced custom SVG elements with img assets from public/images/sidebar */}
              <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                <img 
                  src={isActive ? `/images/sidebar/Pageshover/${item.iconName}` : `/images/sidebar/Pages/${item.iconName}`} 
                  alt={item.name} 
                  className={`w-6 h-6 object-contain transition-all duration-300 ${isActive ? '' : 'sidebar-icon-hover'}`} 
                />
              </div>

              {/* Text */}
              <span className={`text-[16px] tracking-wide ${isActive ? 'font-bold' : 'font-medium group-hover:font-semibold'}`}>
                {item.name}
              </span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;

