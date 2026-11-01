import React from 'react';
import { SectorKey } from '../data/homesteadData';

interface FooterProps {
  onSelectSectorPortfolio: (sector: SectorKey) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSectorPortfolio }) => {
  return (
    <footer className="bg-[#F1F3EF] py-16 text-[#4A554E]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#DFE4DC]">
          {/* Institutional Identity & Regional Offices */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#top"
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
                  onClick={() => onSelectSectorPortfolio(SectorKey.Health)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 transition-colors cursor-pointer"
                >
                  01. Health &amp; Clinical Care
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectSectorPortfolio(SectorKey.Agriculture)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 transition-colors cursor-pointer"
                >
                  02. Regenerative Agriculture
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectSectorPortfolio(SectorKey.Technology)}
                  className="hover:text-[#111814] hover:underline underline-offset-4 transition-colors cursor-pointer"
                >
                  03. Ethical Field Technology
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-[#111814]">Institution</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#mandate" className="hover:text-[#111814] hover:underline underline-offset-4">
                  Founding Thesis
                </a>
              </li>
              <li>
                <a
                  href="#enterprises"
                  className="hover:text-[#111814] hover:underline underline-offset-4"
                >
                  Operating Portfolio
                </a>
              </li>
              <li>
                <a href="#covenant" className="hover:text-[#111814] hover:underline underline-offset-4">
                  Ethical Covenant
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#111814] hover:underline underline-offset-4">
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
