import React from 'react';
import { SectorKey } from '../data/homesteadData';
import { InquirySection } from '../components/InquirySection';

interface ProposalPageProps {
  preselectedSector: SectorKey | 'Cross-Sector Initiative';
  preselectedEnterpriseName: string | null;
  onClearPreselectedEnterprise: () => void;
}

export const ProposalPage: React.FC<ProposalPageProps> = ({
  preselectedSector,
  preselectedEnterpriseName,
  onClearPreselectedEnterprise,
}) => {
  const criteria = [
    {
      index: '01',
      sector: 'Health Alignment',
      detail:
        'Primary care, maternal health, rural diagnostics, or essential generic biologics committed to transparent pricing and clinician co-ownership.',
    },
    {
      index: '02',
      sector: 'Agricultural Alignment',
      detail:
        'Working family farmsteads, heritage seed multipliers, or post-harvest cold-chain cooperatives seeking 25–30 year soil-restoring capital.',
    },
    {
      index: '03',
      sector: 'Technology Alignment',
      detail:
        'Repairable instrumentation, rural microgrid power electronics, or local-first clinical software free from surveillance or SaaS lock-in.',
    },
  ];

  return (
    <div>
      {/* Dedicated Intake Page Header & Sector Readiness Strip */}
      <section className="pt-10 pb-14 md:pt-16 md:pb-16 bg-[#F8F9F7] border-b border-[#DFE4DC]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#4A554E] mb-4">
              <span>Chancery Intake Office</span>
              <span aria-hidden="true">·</span>
              <span>Confidential Dossier Review</span>
              <span aria-hidden="true">·</span>
              <span>10-Day Response Commitment</span>
            </div>
            <h1 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-[#111814]">
              Submit an enterprise or succession proposal.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#4A554E]">
              We partner directly with founders, retiring practice or land stewards, and cooperative
              operators ready to build under our permanent-capital charter.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {criteria.map((item) => (
              <div
                key={item.index}
                className="rounded-xl border border-[#DFE4DC] bg-white p-6 space-y-2"
              >
                <div className="text-xs font-mono tabular-nums text-[#14532D] font-semibold">
                  {item.index}. {item.sector}
                </div>
                <p className="text-xs leading-relaxed text-[#4A554E]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validated Proposal Intake Form */}
      <InquirySection
        preselectedSector={preselectedSector}
        preselectedEnterpriseName={preselectedEnterpriseName}
        onClearPreselectedEnterprise={onClearPreselectedEnterprise}
      />
    </div>
  );
};
