import React, { useState } from "react";

function Sidebar({
  activeMenu: propActiveMenu,
  setActiveMenu: propSetActiveMenu,
}) {
  const [localActiveMenu, setLocalActiveMenu] = useState("Dashboard");

  const activeMenu =
    propActiveMenu !== undefined ? propActiveMenu : localActiveMenu;
  const setActiveMenu =
    propSetActiveMenu !== undefined ? propSetActiveMenu : setLocalActiveMenu;

  // Definisi menu items dengan nama dan ikon masing-masing
  const menuItems = [
    { name: "Dashboard", iconName: "dashboard.svg" },
    { name: "Transactions", iconName: "transaction.svg" },
    { name: "Accounts", iconName: "account.svg" },
    { name: "Investments", iconName: "Investments.svg" },
    { name: "Credit Cards", iconName: "CreditCards.svg" },
    { name: "Loans", iconName: "loans.svg" },
    { name: "Services", iconName: "Services.svg" },
    { name: "My Privileges", iconName: "Privileges.svg" },
    { name: "Setting", iconName: "settings.svg" },
  ];

  const activeIndex = menuItems.findIndex((item) => item.name === activeMenu);

  return (
    <aside className="w-[250px] min-w-[250px] h-screen bg-white border-r border-[#E6EFF5] flex flex-col z-20 transition-all duration-300">
      {/* Brand Header */}
      <div className="h-24 flex items-center px-8">
        {/* Logo */}
        <img
          src="/images/sidebar/Logo.svg"
          alt="Bankku Logo"
          className="h-[36px] w-auto"
        />
      </div>

      {/* Menu List */}
      <nav className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto relative">
        {/* Active Menu Indicator */}
        {activeIndex !== -1 && (
          <div
            className="absolute left-0 top-0 w-[6px] bg-[#1814F3] rounded-r-md transition-transform duration-300 ease-in-out pointer-events-none"
            style={{
              height: "56px",
              transform: `translateY(${activeIndex * 60 + 16}px)`,
            }}
          />
        )}

        {menuItems.map((item) => {
          const isActive = activeMenu === item.name;
          return (
            <div
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`group flex items-center gap-4 h-[56px] px-8 cursor-pointer relative transition-all duration-200 ${
                isActive
                  ? "text-[#1814F3]"
                  : "text-[#B1B1B1] hover:text-[#343C6A]"
              }`}
            >
              {/* Icon */}
              <div
                className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"}`}
              >
                <img
                  src={
                    isActive
                      ? `/images/sidebar/Pageshover/${item.iconName}`
                      : `/images/sidebar/Pages/${item.iconName}`
                  }
                  alt={item.name}
                  className={`w-6 h-6 object-contain transition-all duration-300 ${isActive ? "" : "sidebar-icon-hover"}`}
                />
              </div>

              {/* Text */}
              <span
                className={`text-[16px] tracking-wide ${isActive ? "font-bold" : "font-medium group-hover:font-semibold"}`}
              >
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
