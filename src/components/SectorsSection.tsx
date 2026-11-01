import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SECTORS_DATA, SectorKey } from '../data/homesteadData';
import { ResilientImage } from './ResilientImage';

interface SectorsSectionProps {
  onSelectSectorPortfolio: (sector: SectorKey) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onSelectSectorPortfolio }) => {
  const [selectedSectorKey, setSelectedSectorKey] = useState<SectorKey>(SectorKey.Health);

  const activeSector =
    SECTORS_DATA.find((s) => s.key === selectedSectorKey) || SECTORS_DATA[0];

  return (
    <section id="sectors" className="py-20 md:py-28 bg-[#F8F9F7] border-b border-[#DFE4DC]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Top Row: Heading + Interactive Sector Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#DFE4DC]">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#4A554E]">
              Core Operating Pillars · Three Foundational Sectors
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
              Disciplined capital across health, agriculture, and technology.
            </h2>
          </div>

          {/* Functional Segmented Control */}
          <div
            role="tablist"
            aria-label="Select operating sector"
            className="inline-flex items-center gap-1 p-1 bg-[#E8ECE6] rounded-lg self-start lg:self-auto"
          >
            {SECTORS_DATA.map((sector) => {
              const isActive = sector.key === selectedSectorKey;
              return (
                <button
                  key={sector.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedSectorKey(sector.key)}
                  className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] ${
                    isActive
                      ? 'bg-white text-[#111814] shadow-xs'
                      : 'text-[#4A554E] hover:text-[#111814]'
                  }`}
                >
                  {sector.index}. {sector.key}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Overview Strip (Zero-Latency Access to All 3 Sectors) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-[#DFE4DC]">
          {SECTORS_DATA.map((sector) => {
            const isActive = sector.key === selectedSectorKey;
            return (
              <button
                key={sector.key}
                type="button"
                onClick={() => setSelectedSectorKey(sector.key)}
                className={`text-left p-5 rounded-xl border transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#14532D]'
                    : 'bg-white/50 border-[#DFE4DC] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-xs text-[#4A554E]">
                  <span>
                    {sector.index}. {sector.title}
                  </span>
                  <span className="font-mono tabular-nums">{sector.capitalShare}</span>
                </div>
                <p className="mt-2 font-serif text-lg font-semibold text-[#111814]">
                  {sector.subtitle}
                </p>
                <div className="mt-3 text-xs text-[#14532D] font-medium">
                  {isActive ? 'Currently inspecting below' : 'Inspect sector mandate'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Sector Showcase (Asymmetric 12-Col Bento Layout) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left 5 Columns: 4:3 Editorial Documentary Visual + Primary Metric */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <div className="rounded-xl overflow-hidden border border-[#DFE4DC] bg-[#EAEFE8] aspect-[4/3]">
                <ResilientImage
                  src={activeSector.image}
                  alt={activeSector.imageAlt}
                  fallbackTitle={activeSector.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2.5 text-xs font-serif italic text-[#4A554E]">
                {activeSector.figureCaption}
              </p>
            </div>

            {/* Audited Outcome Box */}
            <div className="p-6 rounded-xl bg-white border border-[#DFE4DC]">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono tabular-nums text-3xl font-medium text-[#14532D]">
                  {activeSector.primaryMetricValue}
                </span>
                <span className="text-xs text-[#4A554E] font-mono tabular-nums">
                  {activeSector.holdingHorizon}
                </span>
              </div>
              <div className="mt-2 text-sm font-semibold text-[#111814]">
                {activeSector.primaryMetricLabel}
              </div>
              <p className="mt-1 text-xs text-[#4A554E] leading-relaxed">
                {activeSector.primaryMetricContext}
              </p>
            </div>
          </div>

          {/* Right 7 Columns: Mandate Thesis, Numbered Capabilities & Ethical Guardrail */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#DFE4DC] p-7 md:p-9 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A554E]">
                <span>Pillar {activeSector.index}</span>
                <span aria-hidden="true">·</span>
                <span>{activeSector.capitalShare}</span>
                <span aria-hidden="true">·</span>
                <span>{activeSector.holdingHorizon}</span>
              </div>

              <h3 className="mt-3 font-serif text-2xl md:text-3xl font-semibold text-[#111814]">
                {activeSector.index}. {activeSector.title} — {activeSector.subtitle}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[#354039] max-w-[65ch]">
                {activeSector.summary}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#4A554E] max-w-[65ch]">
                {activeSector.thesis}
              </p>

              {/* Operating Capabilities List */}
              <div className="mt-8 pt-6 border-t border-[#DFE4DC]">
                <h4 className="text-xs font-semibold text-[#111814]">
                  Core Operating Capabilities
                </h4>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5">
                  {activeSector.capabilities.map((cap, idx) => (
                    <div key={cap.name} className="space-y-1.5">
                      <div className="text-xs font-mono tabular-nums text-[#4A554E]">
                        {activeSector.index}.{idx + 1}
                      </div>
                      <div className="text-sm font-semibold text-[#111814]">{cap.name}</div>
                      <p className="text-xs leading-relaxed text-[#4A554E]">{cap.outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ethical Guardrail & Direct Portfolio Action */}
            <div className="mt-8 pt-6 border-t border-[#DFE4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-md">
                <div className="text-xs font-semibold text-[#111814]">
                  Enforceable Ethical Boundary
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[#4A554E]">
                  {activeSector.ethicalBoundary}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectSectorPortfolio(activeSector.key)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#111814] bg-[#F8F9F7] border border-[#DFE4DC] rounded-lg hover:border-[#14532D] hover:text-[#14532D] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px]"
              >
                <span>View {activeSector.key} Enterprises</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
