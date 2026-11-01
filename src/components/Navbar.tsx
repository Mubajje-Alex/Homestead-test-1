import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigateToInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Mandate', href: '#mandate' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Enterprises', href: '#enterprises' },
    { label: 'Covenant', href: '#covenant' },
  ];

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F9F7]/95 backdrop-blur-sm border-b border-[#DFE4DC]">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-serif text-xl font-semibold tracking-tight text-[#111814] whitespace-nowrap shrink-0"
        >
          Homestead Mandate
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A554E]"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#111814] underline-offset-8 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onNavigateToInquiry}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px]"
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMobileLinkClick}
                className="text-base font-medium text-[#111814] py-2 border-b border-[#DFE4DC]/60 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToInquiry();
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
