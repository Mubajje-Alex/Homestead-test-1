import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageRoute, SECTORS_DATA, SectorKey } from '../data/homesteadData';
import { ResilientImage } from '../components/ResilientImage';

interface SectorsPageProps {
  initialFocusSector: 'All' | SectorKey;
  onNavigateToSectorEnterprises: (sector: SectorKey) => void;
  onNavigateToProposalWithSector: (sector: SectorKey) => void;
}

export const SectorsPage: React.FC<SectorsPageProps> = ({
  initialFocusSector,
  onNavigateToSectorEnterprises,
  onNavigateToProposalWithSector,
}) => {
  const [viewFilter, setViewFilter] = useState<'All' | SectorKey>(initialFocusSector);

  useEffect(() => {
    setViewFilter(initialFocusSector);
  }, [initialFocusSector]);

  const displayedSectors =
    viewFilter === 'All'
      ? SECTORS_DATA
      : SECTORS_DATA.filter((s) => s.key === viewFilter);

  const filterButtons: { label: string; value: 'All' | SectorKey }[] = [
    { label: 'All Three Sectors', value: 'All' },
    { label: '01. Health', value: SectorKey.Health },
    { label: '02. Agriculture', value: SectorKey.Agriculture },
    { label: '03. Technology', value: SectorKey.Technology },
  ];

  return (
    <div>
      {/* 1. Sectors Page Header & Interactive Sector Switcher */}
      <section className="pt-10 pb-14 md:pt-16 md:pb-20 bg-[#F8F9F7] border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#4A554E] mb-4">
                <span>Mandate Operating Blueprints</span>
                <span aria-hidden="true">·</span>
                <span>$480M Permanent Capital</span>
                <span aria-hidden="true">·</span>
                <span>Three Foundational Sectors</span>
              </div>
              <h1 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-[#111814]">
                Health, Agriculture, and Technology operating mandates.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[#4A554E] max-w-[64ch]">
                Each Homestead sector operates under dedicated domain stewards, long-horizon holding
                periods, and explicit ethical boundaries defining both what we build and what we
                permanently refuse to monetize.
              </p>
            </div>

            {/* Functional Segmented Filter */}
            <div
              role="tablist"
              aria-label="Filter sector blueprints"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#E8ECE6] rounded-lg self-start lg:self-auto"
            >
              {filterButtons.map((btn) => {
                const active = viewFilter === btn.value;
                return (
                  <button
                    key={btn.label}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setViewFilter(btn.value)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] ${
                      active
                        ? 'bg-white text-[#111814] shadow-xs'
                        : 'text-[#4A554E] hover:text-[#111814]'
                    }`}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full-Depth Sector Monographs */}
      <section className="py-16 md:py-24 bg-white border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6 space-y-20">
          {displayedSectors.map((sector) => (
            <article
              key={sector.key}
              className="pb-20 last:pb-0 border-b border-[#DFE4DC] last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
                {/* Left 5 Columns: Documentary Photograph & Audited Benchmarks */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                  <div>
                    <div className="rounded-xl overflow-hidden border border-[#DFE4DC] bg-[#EAEFE8] aspect-[4/3]">
                      <ResilientImage
                        src={sector.image}
                        alt={sector.imageAlt}
                        fallbackTitle={sector.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2.5 text-xs font-serif italic text-[#4A554E]">
                      {sector.figureCaption}
                    </p>
                  </div>

                  {/* 3-Metric Audited Strip */}
                  <div className="rounded-xl border border-[#DFE4DC] bg-[#F8F9F7] p-6 space-y-4">
                    <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-[#DFE4DC]">
                      <span className="text-xs font-semibold text-[#111814]">
                        Five-Year Sector Benchmarks
                      </span>
                      <span className="text-xs font-mono tabular-nums text-[#14532D]">
                        {sector.committedCapital}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {sector.benchmarks.map((bm) => (
                        <div key={bm.label}>
                          <div className="font-mono tabular-nums text-lg md:text-xl font-medium text-[#111814]">
                            {bm.value}
                          </div>
                          <div className="mt-1 text-xs text-[#4A554E] leading-snug">{bm.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right 7 Columns: Complete Mandate Blueprint */}
                <div className="lg:col-span-7 rounded-xl border border-[#DFE4DC] bg-[#F8F9F7] p-7 md:p-9 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A554E]">
                      <span className="font-medium text-[#14532D]">Pillar {sector.index}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sector.capitalShare}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sector.holdingHorizon}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sector.regionalHubs}</span>
                    </div>

                    <h2 className="mt-3 font-serif text-2xl md:text-3xl font-semibold text-[#111814]">
                      {sector.index}. {sector.title} — {sector.subtitle}
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-[#354039] max-w-[65ch]">
                      {sector.summary}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[#4A554E] max-w-[65ch]">
                      {sector.thesis}
                    </p>

                    {/* Numbered Operating Capabilities */}
                    <div className="mt-8 pt-6 border-t border-[#DFE4DC]">
                      <h3 className="text-xs font-semibold text-[#111814]">
                        Operating Infrastructure &amp; Capabilities
                      </h3>
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5">
                        {sector.capabilities.map((cap, idx) => (
                          <div
                            key={cap.name}
                            className="bg-white p-4 rounded-lg border border-[#DFE4DC] space-y-1.5"
                          >
                            <div className="text-xs font-mono tabular-nums text-[#4A554E]">
                              {sector.index}.{idx + 1}
                            </div>
                            <div className="text-sm font-semibold text-[#111814]">{cap.name}</div>
                            <p className="text-xs leading-relaxed text-[#4A554E]">{cap.outcome}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enforceable Ethical Boundary & Direct Actions */}
                  <div className="mt-8 pt-6 border-t border-[#DFE4DC] space-y-5">
                    <div>
                      <div className="text-xs font-semibold text-[#111814]">
                        Enforceable Ethical Boundary (Prohibited Practices)
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-[#4A554E]">
                        {sector.ethicalBoundary}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <button
                        type="button"
                        onClick={() => onNavigateToSectorEnterprises(sector.key)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors cursor-pointer whitespace-nowrap min-h-[40px]"
                      >
                        <span>Inspect {sector.key} Enterprises</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigateToProposalWithSector(sector.key)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#111814] bg-white border border-[#DFE4DC] rounded-lg hover:border-[#14532D] hover:text-[#14532D] transition-colors cursor-pointer whitespace-nowrap min-h-[40px]"
                      >
                        <span>Propose {sector.key} Partnership</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Cross-Sector Resource & Infrastructure Matrix */}
      <section className="py-20 md:py-24 bg-[#F8F9F7] border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#4A554E]">
              Inter-Company Operations · Shared Physical Backbone
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[#111814]">
              How each sector supplies and stabilizes the others.
            </h2>
          </div>

          <div className="mt-10 rounded-xl border border-[#DFE4DC] bg-white p-6 md:p-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#DFE4DC] text-xs text-[#4A554E]">
                  <th className="py-3 pr-6 font-medium">Originating Sector</th>
                  <th className="py-3 px-6 font-medium">Delivered Physical or Technical Asset</th>
                  <th className="py-3 px-6 font-medium">Receiving Mandate Sector</th>
                  <th className="py-3 pl-6 font-medium text-right">Audited Operational Effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE4DC]/80 text-sm">
                <tr>
                  <td className="py-4 pr-6 font-semibold text-[#111814]">02. Agriculture</td>
                  <td className="py-4 px-6 text-[#354039]">
                    High-mineral pulses, heritage whole grains &amp; cold-pressed culinary oils
                  </td>
                  <td className="py-4 px-6 font-medium text-[#14532D]">01. Health Clinics</td>
                  <td className="py-4 pl-6 font-mono tabular-nums text-xs text-right text-[#111814]">
                    +31% maternal metabolic &amp; iron recovery
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-semibold text-[#111814]">03. Technology</td>
                  <td className="py-4 px-6 text-[#354039]">
                    Open-schematic LoRaWAN soil probes &amp; phase-change cold-room controllers
                  </td>
                  <td className="py-4 px-6 font-medium text-[#14532D]">02. Agriculture Co-ops</td>
                  <td className="py-4 pl-6 font-mono tabular-nums text-xs text-right text-[#111814]">
                    -41% perishable post-harvest spoilage
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-semibold text-[#111814]">03. Technology</td>
                  <td className="py-4 px-6 text-[#354039]">
                    Offline-first clinical imaging ledgers &amp; biologic solar battery balancers
                  </td>
                  <td className="py-4 px-6 font-medium text-[#14532D]">01. Health Networks</td>
                  <td className="py-4 pl-6 font-mono tabular-nums text-xs text-right text-[#111814]">
                    99.94% clinical &amp; vaccine cold-chain uptime
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
