import React, { useState } from 'react';
import { Download } from 'lucide-react';
import {
  AUDIT_LEDGER_ROWS,
  COVENANT_ARTICLES,
  VISUAL_ASSETS,
} from '../data/homesteadData';
import { ResilientImage } from './ResilientImage';

export const CovenantSection: React.FC = () => {
  const [selectedArticleIdx, setSelectedArticleIdx] = useState<number>(0);
  const [csvDownloaded, setCsvDownloaded] = useState<boolean>(false);

  const handleDownloadCsv = () => {
    const headers = [
      'Sector',
      'Operating Enterprises',
      'Committed Capital ($M)',
      'Practitioner Equity Share (%)',
      'Audited 5-Year Benchmark',
      'Verification Status',
    ];
    const rows = AUDIT_LEDGER_ROWS.map((r) => [
      r.sector,
      String(r.enterprisesCount),
      r.committedCapitalM.toFixed(1),
      `${r.stewardOwnershipPct.toFixed(1)}%`,
      `"${r.fiveYearOutcome}"`,
      `"${r.auditStatus}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'homestead_mandate_2026_stewardship_ledger.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCsvDownloaded(true);
    window.setTimeout(() => setCsvDownloaded(false), 3500);
  };

  return (
    <section id="covenant" className="py-20 md:py-28 bg-[#F8F9F7] border-b border-[#DFE4DC]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Top Split: Governance Narrative & Architectural Boardroom Ledger Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#4A554E]">
                Enforceable Governance · The Homestead Covenant
              </p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814] max-w-xl">
                Ethics written into corporate deeds, not marketing pledges.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4A554E] max-w-[64ch]">
                Good intentions erode when leadership changes unless structural guardrails are bound
                into every subsidiary’s articles of incorporation. Our Stewardship Trust holds
                veto authority over premature exits, soil depletion, data brokerage, and worker
                equity dilution.
              </p>
            </div>

            {/* Interactive 4-Article Covenant Accordion/Selector */}
            <div className="mt-8 space-y-3">
              {COVENANT_ARTICLES.map((article, index) => {
                const isExpanded = selectedArticleIdx === index;
                return (
                  <div
                    key={article.number}
                    className={`rounded-xl border transition-colors duration-150 ${
                      isExpanded
                        ? 'bg-white border-[#14532D]'
                        : 'bg-white/70 border-[#DFE4DC] hover:bg-white'
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => setSelectedArticleIdx(index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-serif text-lg font-semibold text-[#111814]">
                        {article.number}. {article.title}
                      </span>
                      <span className="text-xs font-mono tabular-nums text-[#4A554E] shrink-0">
                        {isExpanded ? 'Active Clause' : 'Inspect'}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-5 pt-1 border-t border-[#DFE4DC]/70 space-y-3">
                        <p className="text-sm leading-relaxed text-[#354039]">{article.clause}</p>
                        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#4A554E]">
                          <span>
                            <strong className="font-semibold text-[#111814]">Enforcement:</strong>{' '}
                            {article.enforcementMechanism}
                          </span>
                          <span className="font-mono tabular-nums text-[#14532D] shrink-0">
                            {article.auditBenchmark}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right 5 Columns: Architectural Stewardship Room Visual */}
          <div className="lg:col-span-5 flex flex-col">
            <figure className="flex-1 flex flex-col justify-between rounded-xl overflow-hidden border border-[#DFE4DC] bg-white">
              <div className="flex-1 min-h-[300px] bg-[#EAEFE8]">
                <ResilientImage
                  src={VISUAL_ASSETS.covenantLedger}
                  alt="Stewardship boardroom with walnut table, linen-bound governance ledgers, and floor-to-ceiling view of working orchards"
                  fallbackTitle="Annual Stewardship Ledger"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="p-5 border-t border-[#DFE4DC] bg-white">
                <div className="text-xs font-serif italic text-[#4A554E]">
                  Fig. 05 · Annual Stewardship Council Review &amp; Physical Soil-Clinical Ledger
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#354039]">
                  Every spring, independent agronomists, clinical auditors, and systems engineers
                  publish unredacted physical performance audits before any subsidiary capital
                  distributions are authorized.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Audited Multi-Sector Stewardship Table */}
        <div className="mt-16 rounded-xl border border-[#DFE4DC] bg-white p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DFE4DC]">
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#111814]">
                2026 Consolidated Sector Stewardship Ledger
              </h3>
              <p className="mt-1 text-xs text-[#4A554E]">
                Audited Permanent Capital Allocation, Practitioner Co-Equity &amp; Five-Year Physical
                Outcomes
              </p>
            </div>

            <button
              type="button"
              onClick={handleDownloadCsv}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-[#111814] bg-[#F8F9F7] border border-[#DFE4DC] rounded-lg hover:border-[#14532D] hover:text-[#14532D] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px]"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{csvDownloaded ? 'Ledger CSV Downloaded' : 'Download CSV'}</span>
            </button>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#DFE4DC] text-xs text-[#4A554E]">
                  <th className="py-3 pr-4 font-medium">Mandate Sector</th>
                  <th className="py-3 px-4 font-medium text-right">Enterprises</th>
                  <th className="py-3 px-4 font-medium text-right">Committed Capital</th>
                  <th className="py-3 px-4 font-medium text-right">Steward Equity</th>
                  <th className="py-3 px-4 font-medium">Five-Year Physical Outcome</th>
                  <th className="py-3 pl-4 font-medium text-right">Audit Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE4DC]/80 text-sm">
                {AUDIT_LEDGER_ROWS.map((row) => (
                  <tr key={row.sector} className="hover:bg-[#F8F9F7]/70 transition-colors">
                    <td className="py-4 pr-4 font-semibold text-[#111814] whitespace-nowrap">
                      {row.sector} Sector
                    </td>
                    <td className="py-4 px-4 font-mono tabular-nums text-right text-[#111814]">
                      {row.enterprisesCount}
                    </td>
                    <td className="py-4 px-4 font-mono tabular-nums text-right text-[#111814]">
                      ${row.committedCapitalM.toFixed(1)}M
                    </td>
                    <td className="py-4 px-4 font-mono tabular-nums text-right text-[#14532D] font-medium">
                      {row.stewardOwnershipPct.toFixed(1)}%
                    </td>
                    <td className="py-4 px-4 text-xs text-[#354039]">{row.fiveYearOutcome}</td>
                    <td className="py-4 pl-4 font-mono tabular-nums text-xs text-right text-[#4A554E] whitespace-nowrap">
                      {row.auditStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-[#111814]/20 text-xs font-semibold text-[#111814]">
                  <td className="pt-4 pr-4">Total / Weighted Mandate</td>
                  <td className="pt-4 px-4 font-mono tabular-nums text-right">14</td>
                  <td className="pt-4 px-4 font-mono tabular-nums text-right">$480.0M</td>
                  <td className="pt-4 px-4 font-mono tabular-nums text-right text-[#14532D]">
                    18.4%
                  </td>
                  <td className="pt-4 px-4 font-normal text-[#4A554E]">
                    100% covenant compliance across all subsidiaries
                  </td>
                  <td className="pt-4 pl-4 font-mono tabular-nums text-right">Unqualified</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
