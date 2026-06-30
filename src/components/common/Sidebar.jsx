import React, { useState } from "react";

function Sidebar({
  activeMenu: propActiveMenu,
  setActiveMenu: propSetActiveMenu,
  sidebarOpen,
  setSidebarOpen,
}) {
  const [localActiveMenu, setLocalActiveMenu] = useState("Dashboard");

  const activeMenu =
    propActiveMenu !== undefined ? propActiveMenu : localActiveMenu;
  const setActiveMenu =
    propSetActiveMenu !== undefined ? propSetActiveMenu : setLocalActiveMenu;

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
    <>
      {/* Backdrop — mobile drawer overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 tablet:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed tablet:static top-0 bottom-0 left-0 z-40
        w-[250px] min-w-[250px] h-screen bg-white border-r border-[#E6EFF5] flex flex-col
        transition-transform duration-300 ease-in-out tablet:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Logo Utama Bankku (Aman, Tidak Berubah) */}
        <div className="h-20 tablet:h-24 flex items-center justify-between px-6 tablet:px-8">
          <img
            src="/images/sidebar/Logo.svg"
            alt="Bankku Logo"
            className="h-[32px] tablet:h-[36px] w-auto"
          />
          <button
            className="tablet:hidden text-[#B1B1B1] hover:text-[#343C6A] cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 py-2 flex flex-col gap-0.5 overflow-y-auto relative">
          {/* Sliding active indicator */}
          {activeIndex !== -1 && (
            <div
              className="absolute left-0 top-0 w-[6px] bg-[#1814F3] rounded-r-md transition-transform duration-300 ease-in-out pointer-events-none"
              style={{
                height: "50px",
                transform: `translateY(${activeIndex * 52 + 8}px)`,
              }}
            />
          )}

          {menuItems.map((item) => {
            const isActive = activeMenu === item.name;
            return (
              <div
                key={item.name}
                onClick={() => {
                  setActiveMenu(item.name);
                  if (setSidebarOpen) setSidebarOpen(false);
                }}
                className={`group flex items-center gap-4 h-[50px] px-8 cursor-pointer relative transition-all duration-200 ${
                  isActive
                    ? "text-[#1814F3]"
                    : "text-[#B1B1B1] hover:text-[#343C6A]"
                }`}
              >
                {/* Icon Per Menu */}
                <div
                  className={`flex-shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"}`}
                >
                  <img
                    src={
                      isActive
                        ? `/images/sidebar/Pageshover/${item.iconName}`
                        : `/images/sidebar/Pages/${item.iconName}`
                    }
                    alt={item.name}
                    className="w-5 h-5 object-contain transition-all duration-300 sidebar-icon-hover"
                  />
                </div>

                {/* Label Menu */}
                <span
                  className={`text-[15px] tracking-wide ${isActive ? "font-bold" : "font-medium group-hover:font-semibold"}`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
