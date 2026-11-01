import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  ENTERPRISES_DATA,
  EnterpriseItem,
  PARTNER_TESTIMONIALS,
  SectorKey,
} from '../data/homesteadData';

interface EnterprisesSectionProps {
  selectedSector: 'All' | SectorKey;
  onSectorChange: (sector: 'All' | SectorKey) => void;
  selectedStage: 'All' | 'Foundational Build' | 'Scale & Stewardship';
  onStageChange: (stage: 'All' | 'Foundational Build' | 'Scale & Stewardship') => void;
  onInspectEnterprise: (enterprise: EnterpriseItem) => void;
}

export const EnterprisesSection: React.FC<EnterprisesSectionProps> = ({
  selectedSector,
  onSectorChange,
  selectedStage,
  onStageChange,
  onInspectEnterprise,
}) => {
  const filteredEnterprises = ENTERPRISES_DATA.filter((item) => {
    const matchesSector = selectedSector === 'All' || item.sector === selectedSector;
    const matchesStage = selectedStage === 'All' || item.stage === selectedStage;
    return matchesSector && matchesStage;
  });

  const sectorTabs: ('All' | SectorKey)[] = [
    'All',
    SectorKey.Health,
    SectorKey.Agriculture,
    SectorKey.Technology,
  ];

  const stageTabs: ('All' | 'Foundational Build' | 'Scale & Stewardship')[] = [
    'All',
    'Scale & Stewardship',
    'Foundational Build',
  ];

  return (
    <section id="enterprises" className="py-20 md:py-28 bg-white border-b border-[#DFE4DC]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#DFE4DC]">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#4A554E]">
              Operating Portfolio · Majority-Stewarded Companies
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
              Enterprises built to outlast their founders.
            </h2>
            <p className="mt-3 text-base text-[#4A554E] leading-relaxed">
              Each operating company is governed by practitioner co-ownership, audited ecological or
              clinical benchmarks, and patient permanent capital.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              role="group"
              aria-label="Filter enterprises by sector"
              className="inline-flex items-center gap-1 p-1 bg-[#F1F3EF] rounded-lg"
            >
              {sectorTabs.map((tab) => {
                const active = selectedSector === tab;
                const count =
                  tab === 'All'
                    ? ENTERPRISES_DATA.length
                    : ENTERPRISES_DATA.filter((e) => e.sector === tab).length;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => onSectorChange(tab)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[36px] ${
                      active
                        ? 'bg-white text-[#111814] shadow-xs'
                        : 'text-[#4A554E] hover:text-[#111814]'
                    }`}
                  >
                    {tab === 'All' ? 'All Sectors' : tab} ({count})
                  </button>
                );
              })}
            </div>

            <div
              role="group"
              aria-label="Filter enterprises by operating stage"
              className="inline-flex items-center gap-1 p-1 bg-[#F1F3EF] rounded-lg"
            >
              {stageTabs.map((stage) => {
                const active = selectedStage === stage;
                return (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => onStageChange(stage)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[36px] ${
                      active
                        ? 'bg-white text-[#111814] shadow-xs'
                        : 'text-[#4A554E] hover:text-[#111814]'
                    }`}
                  >
                    {stage === 'All' ? 'All Stages' : stage}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Operating Enterprises Grid */}
        {filteredEnterprises.length === 0 ? (
          <div className="py-16 text-center border-b border-[#DFE4DC]">
            <p className="font-serif text-xl text-[#111814]">
              No enterprises match the current filter combination.
            </p>
            <p className="mt-2 text-sm text-[#4A554E]">
              Reset the sector or operating stage filters to inspect all stewarded companies.
            </p>
            <button
              type="button"
              onClick={() => {
                onSectorChange('All');
                onStageChange('All');
              }}
              className="mt-5 px-4 py-2 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors cursor-pointer whitespace-nowrap"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredEnterprises.map((enterprise) => (
              <article
                key={enterprise.id}
                className="rounded-xl border border-[#DFE4DC] bg-[#F8F9F7] p-7 flex flex-col justify-between hover:border-[#B8C4B6] transition-colors duration-150"
              >
                <div>
                  {/* Clean Unboxed Metadata (Zero Pills) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#4A554E]">
                    <span className="font-medium text-[#14532D]">{enterprise.sector}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">Est. {enterprise.foundedYear}</span>
                    <span aria-hidden="true">·</span>
                    <span>{enterprise.stage}</span>
                  </div>

                  <h3 className="mt-3 font-serif text-xl font-semibold text-[#111814]">
                    {enterprise.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#4A554E]">{enterprise.region}</p>

                  <p className="mt-4 text-sm leading-relaxed text-[#354039]">
                    {enterprise.summary}
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-[#DFE4DC] space-y-4">
                  <div className="space-y-1">
                    <div className="font-mono tabular-nums text-sm font-medium text-[#111814]">
                      {enterprise.headlineMetric}
                    </div>
                    <div className="text-xs text-[#4A554E]">
                      <span>{enterprise.secondaryMetric}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{enterprise.stewardEquityShare}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onInspectEnterprise(enterprise)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-[#111814] bg-white border border-[#DFE4DC] rounded-lg hover:border-[#14532D] hover:text-[#14532D] transition-colors duration-150 whitespace-nowrap cursor-pointer min-h-[40px]"
                  >
                    <span>Inspect Enterprise Dossier</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Adjacent Attributable Partner Testimonials (Claim-to-Proof Adjacency) */}
        <div className="mt-20 pt-14 border-t border-[#DFE4DC]">
          <div className="max-w-xl">
            <p className="text-xs font-medium text-[#4A554E]">
              Field &amp; Clinical Testimony · Working Stewards
            </p>
            <h3 className="mt-2 font-serif text-2xl md:text-3xl font-semibold text-[#111814]">
              Accountability measured by the practitioners on the ground.
            </h3>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARTNER_TESTIMONIALS.map((item) => (
              <figure
                key={item.author}
                className="flex flex-col justify-between p-6 rounded-xl border border-[#DFE4DC] bg-white"
              >
                <div>
                  <div className="text-xs text-[#4A554E] mb-4">
                    <span className="font-medium text-[#14532D]">{item.sector} Sector</span>
                    <span aria-hidden="true"> · </span>
                    <span className="font-mono tabular-nums">{item.outcomeNote}</span>
                  </div>
                  <blockquote className="text-sm leading-relaxed text-[#354039]">
                    “{item.quote}”
                  </blockquote>
                </div>

                <figcaption className="mt-6 pt-4 border-t border-[#DFE4DC]">
                  <div className="text-sm font-semibold text-[#111814]">{item.author}</div>
                  <div className="text-xs text-[#4A554E] mt-0.5">
                    {item.role} · {item.organization}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
