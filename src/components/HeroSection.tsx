import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_METRICS, VISUAL_ASSETS } from '../data/homesteadData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onNavigateToInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateToInquiry }) => {
  return (
    <section id="top" className="pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#DFE4DC]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Narrative Column */}
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
                onClick={onNavigateToInquiry}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
              >
                <span>Submit Enterprise Proposal</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#sectors"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111814] hover:text-[#14532D] underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <span>Examine the Three Sectors</span>
              </a>
            </div>
          </div>

          {/* Right Architectural Visual Column */}
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
                <span className="font-mono tabular-nums text-white/80">Willamette Stewardship Seat</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Strip Below Hero Split */}
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
  );
};
