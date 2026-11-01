import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Search, X } from 'lucide-react';
import {
  ENTERPRISES_DATA,
  EnterpriseItem,
  PARTNER_TESTIMONIALS,
  PageRoute,
  SectorKey,
  VISUAL_ASSETS,
} from '../data/homesteadData';
import { ResilientImage } from '../components/ResilientImage';

interface EnterprisesPageProps {
  selectedSector: 'All' | SectorKey;
  onSectorChange: (sector: 'All' | SectorKey) => void;
  selectedStage: 'All' | 'Foundational Build' | 'Scale & Stewardship';
  onStageChange: (stage: 'All' | 'Foundational Build' | 'Scale & Stewardship') => void;
  onInspectEnterprise: (enterprise: EnterpriseItem) => void;
  onNavigate: (route: PageRoute) => void;
}

export const EnterprisesPage: React.FC<EnterprisesPageProps> = ({
  selectedSector,
  onSectorChange,
  selectedStage,
  onStageChange,
  onInspectEnterprise,
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayMode, setDisplayMode] = useState<'grid' | 'table'>('grid');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredEnterprises = ENTERPRISES_DATA.filter((item) => {
    const matchesSector = selectedSector === 'All' || item.sector === selectedSector;
    const matchesStage = selectedStage === 'All' || item.stage === selectedStage;
    const matchesQuery =
      !normalizedQuery ||
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.region.toLowerCase().includes(normalizedQuery) ||
      item.summary.toLowerCase().includes(normalizedQuery) ||
      item.covenantFocus.toLowerCase().includes(normalizedQuery);
    return matchesSector && matchesStage && matchesQuery;
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
    <div>
      {/* 1. Dedicated Operating Portfolio Hero */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-20 bg-[#F8F9F7] border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#4A554E] mb-5">
                  <span>Operating Portfolio Directory</span>
                  <span aria-hidden="true">·</span>
                  <span>Majority-Stewarded Subsidiaries</span>
                  <span aria-hidden="true">·</span>
                  <span>18.4% Practitioner Equity</span>
                </div>

                <h1 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-[#111814] max-w-xl">
                  Enterprises engineered and governed to endure.
                </h1>

                <p className="mt-5 text-base leading-relaxed text-[#4A554E] max-w-[62ch]">
                  Inspect our operating subsidiaries across clinical health, regenerative agronomy,
                  and repairable field systems. Every company below maintains non-dilutable worker
                  co-ownership and publishes audited physical outcomes annually.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#DFE4DC] grid grid-cols-3 gap-6">
                <div>
                  <div className="font-mono tabular-nums text-2xl font-medium text-[#111814]">
                    9
                  </div>
                  <div className="mt-1 text-xs text-[#4A554E]">Flagship Operating Dossiers</div>
                </div>
                <div>
                  <div className="font-mono tabular-nums text-2xl font-medium text-[#14532D]">
                    15–25%
                  </div>
                  <div className="mt-1 text-xs text-[#4A554E]">Direct Steward Equity Pool</div>
                </div>
                <div>
                  <div className="font-mono tabular-nums text-2xl font-medium text-[#111814]">
                    0
                  </div>
                  <div className="mt-1 text-xs text-[#4A554E]">Forced Asset Divestitures</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <figure className="relative flex-1 rounded-xl overflow-hidden border border-[#DFE4DC] bg-[#EAEFE8] min-h-[290px] lg:min-h-[380px]">
                <ResilientImage
                  src={VISUAL_ASSETS.enterprisesHub}
                  alt="Modern timber and solar rural cooperative cold-storage distribution hub with growers organizing harvest crates at sunrise"
                  fallbackTitle="Cooperative Cold-Chain & Operating Hub"
                  className="w-full h-full lg:h-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-5 pt-12 pb-4 text-xs text-white/95 flex flex-wrap items-center justify-between gap-2">
                  <span>Fig. 01 · Regional Solar Cold-Storage &amp; Cooperative Logistics Hub</span>
                  <span className="font-mono tabular-nums text-white/80">25% Grower-Owned</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter, Search & View Mode Directory */}
      <section className="py-16 md:py-24 bg-white border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Toolbar */}
          <div className="pb-8 border-b border-[#DFE4DC] space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Sector Filter */}
              <div
                role="group"
                aria-label="Filter enterprises by sector"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F1F3EF] rounded-lg self-start"
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

              {/* Search + View Toggle */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 sm:flex-initial sm:w-64">
                  <Search
                    className="w-4 h-4 text-[#4A554E] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search enterprise or region..."
                    aria-label="Search operating enterprises"
                    className="w-full pl-9 pr-8 py-2 text-xs bg-[#F8F9F7] border border-[#DFE4DC] rounded-lg text-[#111814] placeholder:text-[#6B766F] focus:bg-white focus:border-[#14532D] min-h-[38px]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search query"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#4A554E] hover:text-[#111814] cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div
                  role="group"
                  aria-label="Directory layout mode"
                  className="inline-flex items-center gap-1 p-1 bg-[#F1F3EF] rounded-lg"
                >
                  <button
                    type="button"
                    onClick={() => setDisplayMode('grid')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[34px] ${
                      displayMode === 'grid'
                        ? 'bg-white text-[#111814] shadow-xs'
                        : 'text-[#4A554E] hover:text-[#111814]'
                    }`}
                  >
                    Card View
                  </button>
                  <button
                    type="button"
                    onClick={() => setDisplayMode('table')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[34px] ${
                      displayMode === 'table'
                        ? 'bg-white text-[#111814] shadow-xs'
                        : 'text-[#4A554E] hover:text-[#111814]'
                    }`}
                  >
                    Ledger View
                  </button>
                </div>
              </div>
            </div>

            {/* Stage Secondary Filter Row */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div
                role="group"
                aria-label="Filter enterprises by stage"
                className="inline-flex items-center gap-1 p-1 bg-[#F1F3EF] rounded-lg"
              >
                {stageTabs.map((stage) => {
                  const active = selectedStage === stage;
                  return (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => onStageChange(stage)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[34px] ${
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

              <p className="text-xs text-[#4A554E] font-mono tabular-nums">
                Showing {filteredEnterprises.length} of {ENTERPRISES_DATA.length} operating
                enterprises
              </p>
            </div>
          </div>

          {/* Results Area */}
          {filteredEnterprises.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-serif text-xl text-[#111814]">
                No enterprises match your current search or filter criteria.
              </p>
              <p className="mt-2 text-sm text-[#4A554E]">
                Clear your search query or reset sector filters to view the full portfolio.
              </p>
              <button
                type="button"
                onClick={() => {
                  onSectorChange('All');
                  onStageChange('All');
                  setSearchQuery('');
                }}
                className="mt-5 px-4 py-2 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors cursor-pointer whitespace-nowrap"
              >
                Reset All Filters
              </button>
            </div>
          ) : displayMode === 'grid' ? (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredEnterprises.map((enterprise) => (
                <article
                  key={enterprise.id}
                  className="rounded-xl border border-[#DFE4DC] bg-[#F8F9F7] p-7 flex flex-col justify-between hover:border-[#B8C4B6] transition-colors duration-150"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#4A554E]">
                      <span className="font-medium text-[#14532D]">{enterprise.sector}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">Est. {enterprise.foundedYear}</span>
                      <span aria-hidden="true">·</span>
                      <span>{enterprise.stage}</span>
                    </div>

                    <h2 className="mt-3 font-serif text-xl font-semibold text-[#111814]">
                      {enterprise.name}
                    </h2>

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
          ) : (
            <div className="mt-8 overflow-x-auto rounded-xl border border-[#DFE4DC]">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="border-b border-[#DFE4DC] bg-[#F8F9F7] text-xs text-[#4A554E]">
                    <th className="py-3.5 px-5 font-medium">Enterprise</th>
                    <th className="py-3.5 px-4 font-medium">Sector</th>
                    <th className="py-3.5 px-4 font-medium">Founded</th>
                    <th className="py-3.5 px-4 font-medium">Audited Primary Metric</th>
                    <th className="py-3.5 px-4 font-medium">Steward Equity</th>
                    <th className="py-3.5 px-5 font-medium text-right">Dossier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DFE4DC]/80 text-sm">
                  {filteredEnterprises.map((enterprise) => (
                    <tr
                      key={enterprise.id}
                      className="hover:bg-[#F8F9F7]/70 transition-colors"
                    >
                      <td className="py-4 px-5">
                        <div className="font-semibold text-[#111814]">{enterprise.name}</div>
                        <div className="text-xs text-[#4A554E] mt-0.5">{enterprise.region}</div>
                      </td>
                      <td className="py-4 px-4 text-xs font-medium text-[#14532D] whitespace-nowrap">
                        {enterprise.sector}
                      </td>
                      <td className="py-4 px-4 font-mono tabular-nums text-xs text-[#4A554E]">
                        {enterprise.foundedYear}
                      </td>
                      <td className="py-4 px-4 font-mono tabular-nums text-xs text-[#111814]">
                        {enterprise.headlineMetric}
                      </td>
                      <td className="py-4 px-4 font-mono tabular-nums text-xs text-[#14532D]">
                        {enterprise.stewardEquityShare}
                      </td>
                      <td className="py-4 px-5 text-right">
                        <button
                          type="button"
                          onClick={() => onInspectEnterprise(enterprise)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#111814] hover:text-[#14532D] underline underline-offset-4 cursor-pointer whitespace-nowrap"
                        >
                          <span>Open Dossier</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* 3. Practitioner Testimonies & Founder Callout */}
      <section className="py-20 md:py-24 bg-[#F8F9F7] border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#DFE4DC]">
            <div className="max-w-xl">
              <p className="text-xs font-medium text-[#4A554E]">
                Field &amp; Clinical Testimony · Working Co-Owners
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-[#111814]">
                Measured by the stewards operating inside each company.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate(PageRoute.Proposal)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors cursor-pointer whitespace-nowrap self-start md:self-auto min-h-[42px]"
            >
              <span>Propose a New Enterprise</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
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
      </section>
    </div>
  );
};
