import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageRoute } from '../data/homesteadData';

interface NavbarProps {
  activePage: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Mandate', route: PageRoute.Mandate },
    { label: 'Sectors', route: PageRoute.Sectors },
    { label: 'Enterprises', route: PageRoute.Enterprises },
    { label: 'Covenant', route: PageRoute.Covenant },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: PageRoute) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F9F7]/95 backdrop-blur-sm border-b border-[#DFE4DC]">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href={PageRoute.Home}
          onClick={(e) => handleLinkClick(e, PageRoute.Home)}
          aria-current={activePage === PageRoute.Home ? 'page' : undefined}
          className="font-serif text-xl font-semibold tracking-tight text-[#111814] whitespace-nowrap shrink-0"
        >
          Homestead Mandate
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A554E]"
        >
          {navItems.map((item) => {
            const isActive = activePage === item.route;
            return (
              <a
                key={item.route}
                href={item.route}
                onClick={(e) => handleLinkClick(e, item.route)}
                aria-current={isActive ? 'page' : undefined}
                className={`py-1 transition-colors duration-150 whitespace-nowrap shrink-0 underline-offset-8 ${
                  isActive
                    ? 'text-[#111814] font-semibold underline decoration-[#14532D] decoration-2'
                    : 'hover:text-[#111814] hover:underline'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate(PageRoute.Proposal)}
            aria-current={activePage === PageRoute.Proposal ? 'page' : undefined}
            className={`hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] ${
              activePage === PageRoute.Proposal
                ? 'bg-[#0F3F22] text-white ring-2 ring-[#14532D]/30'
                : 'bg-[#14532D] text-white hover:bg-[#0F3F22]'
            }`}
          >
            Submit Proposal
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#DFE4DC] text-[#111814] hover:bg-[#ECEFEA] transition-colors duration-150 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DFE4DC] bg-[#F8F9F7] px-6 py-5">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            <a
              href={PageRoute.Home}
              onClick={(e) => handleLinkClick(e, PageRoute.Home)}
              className={`text-base py-2 border-b border-[#DFE4DC]/60 whitespace-nowrap ${
                activePage === PageRoute.Home
                  ? 'font-semibold text-[#14532D]'
                  : 'font-medium text-[#111814]'
              }`}
            >
              Overview
            </a>
            {navItems.map((item) => {
              const isActive = activePage === item.route;
              return (
                <a
                  key={item.route}
                  href={item.route}
                  onClick={(e) => handleLinkClick(e, item.route)}
                  className={`text-base py-2 border-b border-[#DFE4DC]/60 whitespace-nowrap ${
                    isActive ? 'font-semibold text-[#14532D]' : 'font-medium text-[#111814]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate(PageRoute.Proposal);
              }}
              className="mt-2 w-full py-3 px-4 text-sm font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors duration-150 whitespace-nowrap cursor-pointer min-h-[44px]"
            >
              Submit Proposal
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
