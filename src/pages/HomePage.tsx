import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  COVENANT_ARTICLES,
  ENTERPRISES_DATA,
  EnterpriseItem,
  HERO_METRICS,
  PageRoute,
  SECTORS_DATA,
  SectorKey,
  VISUAL_ASSETS,
} from '../data/homesteadData';
import { ResilientImage } from '../components/ResilientImage';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onNavigateToSector: (sector: SectorKey) => void;
  onNavigateToSectorEnterprises: (sector: SectorKey) => void;
  onInspectEnterprise: (enterprise: EnterpriseItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onNavigateToSector,
  onNavigateToSectorEnterprises,
  onInspectEnterprise,
}) => {
  // Featured 1 flagship enterprise per sector on the overview page
  const featuredEnterprises = [
    ENTERPRISES_DATA.find((e) => e.id === 'veridian-health')!,
    ENTERPRISES_DATA.find((e) => e.id === 'loam-and-lineage')!,
    ENTERPRISES_DATA.find((e) => e.id === 'arbor-field-instruments')!,
  ];

  return (
    <div>
      {/* 1. Institutional Hero & Proof Strip */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#4A554E] mb-5">
                  <span>Permanent Capital Holding</span>
                  <span aria-hidden="true">·</span>
                  <span>Est. 2014</span>
                  <span aria-hidden="true">·</span>
                  <span>Health, Agriculture &amp; Technology</span>
                </div>

                <h1 className="font-serif text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.08] font-semibold tracking-tight text-[#111814] max-w-xl">
                  Building generational legacy through ethical enterprises.
                </h1>

                <p className="mt-6 text-base leading-relaxed text-[#4A554E] max-w-[62ch]">
                  Homestead Mandate founds, capitalizes, and stewards enduring operating companies
                  across preventative health, regenerative agriculture, and repairable field
                  technology. We commit patient capital under an enforceable covenant where human
                  dignity, living topsoil, and honest engineering govern every balance sheet.
                </p>
              </div>

              <div className="mt-9 pt-6 border-t border-[#DFE4DC] flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.Proposal)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
                >
                  <span>Submit Enterprise Proposal</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.Sectors)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111814] hover:text-[#14532D] underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
                >
                  <span>Examine the Three Sectors</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <figure className="relative flex-1 rounded-xl overflow-hidden border border-[#DFE4DC] bg-[#EAEFE8] min-h-[320px] lg:min-h-[440px]">
                <ResilientImage
                  src={VISUAL_ASSETS.heroCampus}
                  alt="Timber and limestone institutional stewardship campus surrounded by terraced regenerative orchards and glasshouses at golden hour"
                  fallbackTitle="Central Stewardship Campus"
                  className="w-full h-full lg:h-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-5 pt-12 pb-4 text-xs text-white/95 flex flex-wrap items-center justify-between gap-2">
                  <span>Fig. 01 · Central Stewardship Campus &amp; Agronomy Glasshouses</span>
                  <span className="font-mono tabular-nums text-white/80">
                    Willamette Stewardship Seat
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-[#DFE4DC] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="font-mono tabular-nums text-3xl md:text-4xl font-medium tracking-tight text-[#111814]">
                  {metric.value}
                </span>
                <span className="mt-2 text-sm font-semibold text-[#111814]">{metric.label}</span>
                <span className="mt-1 text-xs leading-relaxed text-[#4A554E]">{metric.context}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Mandate Summary & Direct Page Link */}
      <section className="py-20 md:py-24 bg-white border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-[#4A554E]">
              Foundational Mandate · Evergreen Structure
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
              Patient capital anchored to physical community resilience.
            </h2>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => onNavigate(PageRoute.Mandate)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#111814] bg-[#F8F9F7] border border-[#DFE4DC] rounded-lg hover:border-[#14532D] hover:text-[#14532D] transition-colors cursor-pointer whitespace-nowrap min-h-[40px]"
              >
                <span>Read the Full Mandate</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base leading-[1.75] text-[#354039] max-w-[66ch]">
            <p>
              Conventional investment funds operate on five-year exit clocks that pressure
              healthcare clinics to shorten appointments, farms to mine topsoil fertility, and
              hardware makers to lock customers into proprietary repair fees.
            </p>
            <blockquote className="py-6 border-y border-[#DFE4DC]">
              <p className="font-serif italic text-xl leading-relaxed text-[#111814]">
                “Legacy is never built by flipping essential community institutions. It is earned by
                compounding trust, soil health, and practitioner ownership across decades.”
              </p>
            </blockquote>
            <p className="text-sm text-[#4A554E]">
              Explore how our evergreen holding trust structures 25-to-30-year partnerships,
              connects cross-sector operations, and eliminates leveraged buyout debt on our
              dedicated Mandate page.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Three Sectors Architectural Preview */}
      <section className="py-20 md:py-24 bg-[#F8F9F7] border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#DFE4DC]">
            <div className="max-w-xl">
              <p className="text-xs font-medium text-[#4A554E]">
                Three Interlocking Pillars · Sector Blueprints
              </p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
                Health, Agriculture, and Technology in concert.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate(PageRoute.Sectors)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#111814] bg-white border border-[#DFE4DC] rounded-lg hover:border-[#14532D] hover:text-[#14532D] transition-colors cursor-pointer whitespace-nowrap self-start sm:self-auto min-h-[40px]"
            >
              <span>Open Full Sectors Blueprint</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SECTORS_DATA.map((sector) => (
              <article
                key={sector.key}
                className="rounded-xl border border-[#DFE4DC] bg-white overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] bg-[#EAEFE8] border-b border-[#DFE4DC]">
                    <ResilientImage
                      src={sector.image}
                      alt={sector.imageAlt}
                      fallbackTitle={sector.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 text-xs text-[#4A554E]">
                      <span>Pillar {sector.index}</span>
                      <span className="font-mono tabular-nums">{sector.capitalShare}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-[#111814]">
                      {sector.index}. {sector.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#14532D]">{sector.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#4A554E]">{sector.summary}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#DFE4DC]/80 space-y-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-mono tabular-nums text-2xl font-medium text-[#111814]">
                      {sector.primaryMetricValue}
                    </span>
                    <span className="text-xs text-[#4A554E]">{sector.primaryMetricLabel}</span>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => onNavigateToSector(sector.key)}
                      className="text-xs font-semibold text-[#14532D] hover:underline underline-offset-4 cursor-pointer whitespace-nowrap"
                    >
                      Inspect {sector.key} Blueprint
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigateToSectorEnterprises(sector.key)}
                      className="text-xs font-medium text-[#4A554E] hover:text-[#111814] cursor-pointer whitespace-nowrap"
                    >
                      View Companies →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Flagship Enterprises Preview */}
      <section className="py-20 md:py-24 bg-white border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#DFE4DC]">
            <div className="max-w-xl">
              <p className="text-xs font-medium text-[#4A554E]">
                Selected Subsidiaries · Practitioner Co-Owned
              </p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
                Representative enterprises across the mandate.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate(PageRoute.Enterprises)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#111814] bg-[#F8F9F7] border border-[#DFE4DC] rounded-lg hover:border-[#14532D] hover:text-[#14532D] transition-colors cursor-pointer whitespace-nowrap self-start sm:self-auto min-h-[40px]"
            >
              <span>Explore All 9 Enterprises</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
            {featuredEnterprises.map((enterprise) => (
              <article
                key={enterprise.id}
                className="rounded-xl border border-[#DFE4DC] bg-[#F8F9F7] p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#4A554E]">
                    <span className="font-medium text-[#14532D]">{enterprise.sector}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">Est. {enterprise.foundedYear}</span>
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
                  <div className="font-mono tabular-nums text-sm font-medium text-[#111814]">
                    {enterprise.headlineMetric}
                  </div>
                  <button
                    type="button"
                    onClick={() => onInspectEnterprise(enterprise)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-[#111814] bg-white border border-[#DFE4DC] rounded-lg hover:border-[#14532D] hover:text-[#14532D] transition-colors cursor-pointer whitespace-nowrap min-h-[40px]"
                  >
                    <span>Inspect Enterprise Dossier</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Covenant & Intake Callout */}
      <section className="py-20 md:py-24 bg-[#F8F9F7] border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-medium text-[#4A554E]">
              Enforceable Governance · Five Binding Charter Articles
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
              Governed by legal deed and annual physical audit.
            </h2>
            <p className="text-base text-[#4A554E] leading-relaxed max-w-[60ch]">
              Every subsidiary incorporates five non-negotiable articles covering permanent capital
              horizons, topsoil and clinical escrow audits, minimum 15% practitioner co-ownership,
              and open repair schematics.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate(PageRoute.Covenant)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#111814] bg-white border border-[#DFE4DC] rounded-lg hover:border-[#14532D] hover:text-[#14532D] transition-colors cursor-pointer whitespace-nowrap min-h-[42px]"
              >
                <span>Examine the Ethical Covenant</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate(PageRoute.Proposal)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors cursor-pointer whitespace-nowrap min-h-[42px]"
              >
                <span>Submit Partnership Proposal</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-[#DFE4DC] bg-white p-6 space-y-3">
            <div className="text-xs font-semibold text-[#111814] pb-2 border-b border-[#DFE4DC]">
              Charter Summary Index
            </div>
            {COVENANT_ARTICLES.map((art) => (
              <div
                key={art.number}
                className="py-2 border-b border-[#DFE4DC]/60 last:border-b-0 flex items-baseline justify-between gap-4 text-xs"
              >
                <span className="font-medium text-[#111814]">
                  {art.number}. {art.title}
                </span>
                <span className="font-mono tabular-nums text-[#14532D] shrink-0">Ratified</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
