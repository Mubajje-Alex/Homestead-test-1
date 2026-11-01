import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageRoute, VISUAL_ASSETS } from '../data/homesteadData';
import { CovenantSection } from '../components/CovenantSection';
import { ResilientImage } from '../components/ResilientImage';

interface CovenantPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CovenantPage: React.FC<CovenantPageProps> = ({ onNavigate }) => {
  const auditStages = [
    {
      step: '01',
      title: 'Physical Topsoil & Watershed Coring',
      scope: 'Agricultural Subsidiaries',
      detail:
        'Independent soil laboratories extract 30cm core samples across rotating estate transects each spring. Any net decline in organic carbon or water infiltration triggers mandatory dividend escrow until remediated.',
    },
    {
      step: '02',
      title: 'Unannounced Clinical & Pricing Verification',
      scope: 'Health Subsidiaries',
      detail:
        'External physician panels audit 30-day hospital readmission cohorts, appointment duration logs, essential drug cost-plus ceilings, and confirm zero medical debt collection filings.',
    },
    {
      step: '03',
      title: 'Hardware Teardown & Cryptographic Privacy Audit',
      scope: 'Technology Subsidiaries',
      detail:
        'Independent engineers verify that all field sensors can be disassembled with standard hand tools using public schematics, and confirm zero outbound commercial data telemetry.',
    },
  ];

  return (
    <div>
      {/* 1. Dedicated Covenant & Physical Verification Hero */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-white border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#4A554E] mb-5">
                  <span>The Homestead Covenant</span>
                  <span aria-hidden="true">·</span>
                  <span>Five Binding Corporate Articles</span>
                  <span aria-hidden="true">·</span>
                  <span>Annual Physical Audit</span>
                </div>

                <h1 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-[#111814] max-w-xl">
                  Enforceable legal guardrails protecting soil, patients, and stewards.
                </h1>

                <p className="mt-6 text-base leading-relaxed text-[#4A554E] max-w-[62ch]">
                  Voluntary sustainability pledges routinely dissolve under financial pressure. At
                  Homestead Mandate, ethical commitments are codified directly into each operating
                  company’s corporate charter, backed by supermajority Stewardship Trust veto rights
                  and physical field verification.
                </p>
              </div>

              <div className="mt-9 pt-6 border-t border-[#DFE4DC] flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.Proposal)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors cursor-pointer whitespace-nowrap min-h-[44px]"
                >
                  <span>Apply Under the Covenant</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.Enterprises)}
                  className="text-sm font-semibold text-[#111814] hover:text-[#14532D] underline underline-offset-4 transition-colors cursor-pointer whitespace-nowrap min-h-[44px]"
                >
                  Inspect Audited Subsidiaries
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <figure className="relative flex-1 rounded-xl overflow-hidden border border-[#DFE4DC] bg-[#EAEFE8] min-h-[300px] lg:min-h-[400px]">
                <ResilientImage
                  src={VISUAL_ASSETS.covenantFieldAudit}
                  alt="Agronomist and field engineer examining a dark topsoil carbon core sample in a polyculture field at sunrise with a linen field ledger"
                  fallbackTitle="Annual Spring Topsoil Carbon Audit"
                  className="w-full h-full lg:h-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-5 pt-12 pb-4 text-xs text-white/95 flex flex-wrap items-center justify-between gap-2">
                  <span>Fig. 01 · Annual Spring 30cm Topsoil Carbon Verification</span>
                  <span className="font-mono tabular-nums text-white/80">Article II Escrow Gate</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive 5-Article Charter & Consolidated Downloadable CSV Ledger */}
      <CovenantSection />

      {/* 3. Three-Stage Independent Physical Audit Protocol */}
      <section className="py-20 md:py-24 bg-white border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#4A554E]">
              Verification Methodology · Annual Release of Escrow
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
              How covenant compliance is verified in the field.
            </h2>
            <p className="mt-3 text-base text-[#4A554E] leading-relaxed">
              Financial accounting alone never reveals whether an enterprise is quietly depleting its
              topsoil, rushing vulnerable patients, or locking farmers out of equipment repairs.
              Every subsidiary undergoes three domain-specific physical audits each spring.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {auditStages.map((item) => (
              <article
                key={item.step}
                className="rounded-xl border border-[#DFE4DC] bg-[#F8F9F7] p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#4A554E]">
                    <span className="font-mono tabular-nums font-semibold text-[#14532D]">
                      Stage {item.step}
                    </span>
                    <span>{item.scope}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-[#111814]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#354039]">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
