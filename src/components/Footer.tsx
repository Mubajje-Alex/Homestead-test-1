import React from 'react';
import { PageRoute, SectorKey } from '../data/homesteadData';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onNavigateToSector: (sector: SectorKey) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateToSector }) => {
  const handleRouteClick = (e: React.MouseEvent<HTMLAnchorElement>, route: PageRoute) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <footer className="bg-[#F1F3EF] py-16 text-[#4A554E]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#DFE4DC]">
          {/* Institutional Identity & Regional Offices */}
          <div className="md:col-span-5 space-y-3">
            <a
              href={PageRoute.Home}
              onClick={(e) => handleRouteClick(e, PageRoute.Home)}
              className="font-serif text-xl font-semibold tracking-tight text-[#111814] inline-block"
            >
              Homestead Mandate
            </a>
            <p className="text-sm leading-relaxed max-w-sm">
              Building generational legacy through ethical, majority-stewarded operating enterprises
              across preventative health, regenerative agriculture, and repairable field technology.
            </p>
            <p className="pt-2 text-xs text-[#4A554E]">
              <span>Stewardship Seats: Willamette Basin</span>
              <span aria-hidden="true"> · </span>
              <span>Nairobi</span>
              <span aria-hidden="true"> · </span>
              <span>Zurich</span>
            </p>
          </div>

          {/* Sector Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-[#111814]">Mandate Sectors</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSector(SectorKey.Health)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 transition-colors cursor-pointer whitespace-nowrap"
                >
                  01. Health &amp; Clinical Care
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSector(SectorKey.Agriculture)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 transition-colors cursor-pointer whitespace-nowrap"
                >
                  02. Regenerative Agriculture
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSector(SectorKey.Technology)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 transition-colors cursor-pointer whitespace-nowrap"
                >
                  03. Ethical Field Technology
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Pages Mirror */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-[#111814]">Pages</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={PageRoute.Home}
                  onClick={(e) => handleRouteClick(e, PageRoute.Home)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 whitespace-nowrap"
                >
                  Institutional Overview
                </a>
              </li>
              <li>
                <a
                  href={PageRoute.Mandate}
                  onClick={(e) => handleRouteClick(e, PageRoute.Mandate)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 whitespace-nowrap"
                >
                  The Mandate
                </a>
              </li>
              <li>
                <a
                  href={PageRoute.Sectors}
                  onClick={(e) => handleRouteClick(e, PageRoute.Sectors)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 whitespace-nowrap"
                >
                  Three Sectors
                </a>
              </li>
              <li>
                <a
                  href={PageRoute.Enterprises}
                  onClick={(e) => handleRouteClick(e, PageRoute.Enterprises)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 whitespace-nowrap"
                >
                  Operating Enterprises
                </a>
              </li>
              <li>
                <a
                  href={PageRoute.Covenant}
                  onClick={(e) => handleRouteClick(e, PageRoute.Covenant)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 whitespace-nowrap"
                >
                  Ethical Covenant
                </a>
              </li>
              <li>
                <a
                  href={PageRoute.Proposal}
                  onClick={(e) => handleRouteClick(e, PageRoute.Proposal)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 whitespace-nowrap"
                >
                  Submit Proposal
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Correspondence */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-[#111814]">Chancery Office</h3>
            <p className="text-xs leading-relaxed">
              410 Timberline Commons
              <br />
              Corvallis, OR 97330
            </p>
            <p className="text-xs font-mono text-[#111814]">stewards@homesteadmandate.org</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Homestead Mandate Stewardship Trust. All rights reserved.</p>
          <p className="text-[#4A554E]">
            <span>Permanent Capital Charter</span>
            <span aria-hidden="true"> · </span>
            <span>Audited Physical &amp; Clinical Governance</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
