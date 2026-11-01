import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  CAPITAL_COMPARISON_ROWS,
  MANDATE_CHRONOLOGY,
  PageRoute,
  STEWARDSHIP_COUNCIL,
  VISUAL_ASSETS,
} from '../data/homesteadData';
import { MandateSection } from '../components/MandateSection';
import { ResilientImage } from '../components/ResilientImage';

interface MandatePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const MandatePage: React.FC<MandatePageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* 1. Dedicated Mandate Monograph Hero */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-[#F8F9F7] border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#4A554E] mb-5">
                  <span>The Homestead Mandate</span>
                  <span aria-hidden="true">·</span>
                  <span>Founding Monograph</span>
                  <span aria-hidden="true">·</span>
                  <span>Ratified 2014</span>
                </div>

                <h1 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-[#111814] max-w-xl">
                  Capital structured for generational stewardship rather than extraction.
                </h1>

                <p className="mt-6 text-base leading-relaxed text-[#4A554E] max-w-[62ch]">
                  Homestead Mandate was established to answer a structural failure in modern finance:
                  essential human systems—primary medicine, living agricultural soil, and rural
                  engineering—require thirty-year patience, yet are routinely financed by five-year
                  speculative vehicles.
                </p>
              </div>

              <div className="mt-9 pt-6 border-t border-[#DFE4DC] flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.Sectors)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors cursor-pointer whitespace-nowrap min-h-[44px]"
                >
                  <span>Explore the Three Sectors</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.Covenant)}
                  className="text-sm font-semibold text-[#111814] hover:text-[#14532D] underline underline-offset-4 transition-colors cursor-pointer whitespace-nowrap min-h-[44px]"
                >
                  Read the Binding Covenant
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <figure className="relative flex-1 rounded-xl overflow-hidden border border-[#DFE4DC] bg-[#EAEFE8] min-h-[300px] lg:min-h-[400px]">
                <ResilientImage
                  src={VISUAL_ASSETS.mandateAtrium}
                  alt="Sunlit timber and limestone institutional atrium overlooking orchards where stewards review regional watershed and clinical maps"
                  fallbackTitle="Chancery Archive & Mapping Hall"
                  className="w-full h-full lg:h-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-5 pt-12 pb-4 text-xs text-white/95 flex flex-wrap items-center justify-between gap-2">
                  <span>Fig. 01 · Chancery Mapping Atrium &amp; Watershed Archive</span>
                  <span className="font-mono tabular-nums text-white/80">Est. 2014</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Founding Thesis & Interactive Cross-Sector Flywheel */}
      <MandateSection />

      {/* 3. Structural Comparison: Homestead Evergreen Model vs. Short-Term Funds */}
      <section className="py-20 md:py-24 bg-[#F8F9F7] border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#4A554E]">
              Institutional Architecture · Fiduciary Design
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
              How permanent stewardship differs from conventional capital.
            </h2>
          </div>

          <div className="mt-10 rounded-xl border border-[#DFE4DC] bg-white p-6 md:p-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#DFE4DC] text-xs text-[#4A554E]">
                  <th className="py-3 pr-6 font-medium w-1/4">Governance Dimension</th>
                  <th className="py-3 px-6 font-semibold text-[#14532D] w-3/8">
                    Homestead Mandate Holding Model
                  </th>
                  <th className="py-3 pl-6 font-medium w-3/8">
                    Conventional Short-Horizon Fund Model
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE4DC]/80 text-sm">
                {CAPITAL_COMPARISON_ROWS.map((row) => (
                  <tr key={row.dimension} className="hover:bg-[#F8F9F7]/60 transition-colors">
                    <td className="py-4 pr-6 font-semibold text-[#111814]">{row.dimension}</td>
                    <td className="py-4 px-6 text-[#111814] font-medium">{row.homesteadModel}</td>
                    <td className="py-4 pl-6 text-[#4A554E]">{row.conventionalModel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Twelve-Year Institutional Chronology (2014–2026) */}
      <section className="py-20 md:py-24 bg-white border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#4A554E]">
              Historical Record · 2014 to Present
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
              Twelve years of deliberate, compounding buildout.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {MANDATE_CHRONOLOGY.map((item) => (
              <article
                key={item.year}
                className="rounded-xl border border-[#DFE4DC] bg-[#F8F9F7] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#4A554E]">
                    <span className="font-mono tabular-nums font-semibold text-[#14532D] text-sm">
                      {item.year}
                    </span>
                    <span>{item.sectorScope}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-[#111814]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#4A554E]">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Managing Stewardship Council */}
      <section className="py-20 md:py-24 bg-[#F8F9F7] border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#DFE4DC]">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#4A554E]">
                Fiduciary &amp; Domain Leadership · Stewardship Council
              </p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
                Led by physicians, agronomists, and systems engineers.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate(PageRoute.Proposal)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors cursor-pointer whitespace-nowrap self-start md:self-auto min-h-[42px]"
            >
              <span>Submit Proposal to the Council</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-7">
            {STEWARDSHIP_COUNCIL.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-[#DFE4DC] bg-white p-7 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#4A554E]">
                  <span className="font-medium text-[#14532D]">{member.discipline}</span>
                  <span className="font-mono tabular-nums">{member.tenure}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#111814]">{member.name}</h3>
                  <p className="text-xs font-medium text-[#4A554E] mt-0.5">{member.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-[#354039] pt-2 border-t border-[#DFE4DC]/80">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
