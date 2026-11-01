import React, { useState } from 'react';
import { SYNERGY_BRIDGES } from '../data/homesteadData';

export const MandateSection: React.FC = () => {
  const [activeBridgeId, setActiveBridgeId] = useState<string>(SYNERGY_BRIDGES[0].id);

  const activeBridge =
    SYNERGY_BRIDGES.find((b) => b.id === activeBridgeId) || SYNERGY_BRIDGES[0];

  return (
    <section id="mandate" className="py-20 md:py-28 bg-white border-b border-[#DFE4DC]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-medium text-[#4A554E]">
            Institutional Thesis · Generational Stewardship
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
            Why enduring legacy requires three interlocking foundations.
          </h2>
        </div>

        {/* Asymmetric 2-Column Editorial & Interactive Architecture */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 7 Columns: Editorial Essay & Hairline Pull Quote */}
          <div className="lg:col-span-7 space-y-6 text-base leading-[1.75] text-[#354039] max-w-[68ch]">
            <p className="first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#14532D]">
              Durable civilization rests on physical realities that quarterly venture cycles
              routinely neglect: whether communities have clean diagnostics and primary care,
              whether regional soils gain fertility with each harvest, and whether the machines and
              records connecting them can be repaired and trusted locally.
            </p>

            <p>
              Isolated investments frequently fail because they treat symptoms in one sector created
              by extraction in another. Clinics cannot reverse metabolic illness if surrounding food
              sheds produce nutrient-depleted commodities. Regenerative growers cannot prosper if
              post-harvest cold chains fail or proprietary equipment locks them out of repairs.
            </p>

            {/* Hairline-Framed Institutional Pull Quote (No left bar) */}
            <blockquote className="my-10 py-8 border-y border-[#DFE4DC]">
              <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-[#111814]">
                “An enterprise is ethical not because of its philanthropy after profits are made,
                but because of how its daily operations treat patients, living soil, and working
                stewards while earning an honest return.”
              </p>
              <footer className="mt-4 text-xs text-[#4A554E]">
                <span>Founding Charter of Homestead Mandate</span>
                <span aria-hidden="true"> · </span>
                <span>Article I, Ratified 2014</span>
              </footer>
            </blockquote>

            <p>
              Homestead Mandate operates as a permanent holding company. Rather than raising
              short-lived funds that compel enterprise sales every five years, we compound operating
              cash flow back into regional clinics, transition farmland leases, and open-schematic
              engineering workshops built to serve communities fifty years from today.
            </p>
          </div>

          {/* Right 5 Columns: Interactive Cross-Sector Flywheel Explorer */}
          <div className="lg:col-span-5 rounded-xl border border-[#DFE4DC] bg-[#F8F9F7] p-6 md:p-8">
            <div className="pb-5 border-b border-[#DFE4DC]">
              <p className="text-xs font-medium text-[#4A554E]">
                Interactive Architecture · Cross-Sector Links
              </p>
              <h3 className="mt-1.5 font-serif text-xl font-semibold text-[#111814]">
                Operational Synergy Ledger
              </h3>
              <p className="mt-2 text-sm text-[#4A554E] leading-relaxed">
                Select an operational bridge below to inspect how our Health, Agricultural, and
                Technology enterprises reinforce one another in practice.
              </p>
            </div>

            {/* Interactive Selector Tabs */}
            <div
              role="tablist"
              aria-label="Cross-sector operational bridges"
              className="mt-5 flex flex-col gap-2"
            >
              {SYNERGY_BRIDGES.map((bridge, idx) => {
                const isSelected = bridge.id === activeBridge.id;
                return (
                  <button
                    key={bridge.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveBridgeId(bridge.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg border transition-colors duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#14532D] text-[#111814]'
                        : 'bg-transparent border-[#DFE4DC] text-[#4A554E] hover:bg-white/70 hover:text-[#111814]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold truncate">
                        0{idx + 1}. {bridge.title}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-[#4A554E]">{bridge.sectorsInvolved}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Bridge Detail Surface */}
            <div className="mt-6 pt-6 border-t border-[#DFE4DC] space-y-4">
              <div>
                <div className="text-xs font-medium text-[#4A554E]">
                  Active Bridge · {activeBridge.sectorsInvolved}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#111814]">
                  {activeBridge.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFE4DC]/80">
                <div className="text-xs font-semibold text-[#111814]">Mechanism in Practice</div>
                <p className="mt-1 text-xs leading-relaxed text-[#4A554E]">
                  {activeBridge.operationalMechanism}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFE4DC]/80">
                <div className="text-xs font-semibold text-[#14532D]">Audited Field Outcome</div>
                <p className="mt-1 font-mono tabular-nums text-xs leading-relaxed text-[#111814]">
                  {activeBridge.quantifiedProof}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
