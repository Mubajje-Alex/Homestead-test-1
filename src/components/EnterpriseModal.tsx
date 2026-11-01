import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { EnterpriseItem, SectorKey } from '../data/homesteadData';

interface EnterpriseModalProps {
  enterprise: EnterpriseItem | null;
  onClose: () => void;
  onInquireForEnterprise: (sector: SectorKey, enterpriseName: string) => void;
}

export const EnterpriseModal: React.FC<EnterpriseModalProps> = ({
  enterprise,
  onClose,
  onInquireForEnterprise,
}) => {
  useEffect(() => {
    if (!enterprise) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enterprise, onClose]);

  if (!enterprise) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enterprise-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/55 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-white border border-[#DFE4DC] p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Metadata & Close Button */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#DFE4DC]">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A554E]">
              <span className="font-medium text-[#14532D]">{enterprise.sector} Sector</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">Founded {enterprise.foundedYear}</span>
              <span aria-hidden="true">·</span>
              <span>{enterprise.stage}</span>
            </div>
            <h3
              id="enterprise-modal-title"
              className="mt-2 font-serif text-2xl font-semibold text-[#111814]"
            >
              {enterprise.name}
            </h3>
            <p className="mt-1 text-xs text-[#4A554E]">{enterprise.region}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dossier modal"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#DFE4DC] text-[#4A554E] hover:text-[#111814] hover:bg-[#F8F9F7] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Operating Thesis */}
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-xs font-semibold text-[#111814]">Operating Mandate</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-[#354039]">
              {enterprise.operatingThesis}
            </p>
          </div>

          {/* Governance Definition List */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#DFE4DC]">
            <div>
              <dt className="text-xs text-[#4A554E]">Managing Steward</dt>
              <dd className="mt-1 text-xs font-semibold text-[#111814]">
                {enterprise.governanceLead}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#4A554E]">Practitioner Equity</dt>
              <dd className="mt-1 text-xs font-semibold font-mono tabular-nums text-[#14532D]">
                {enterprise.stewardEquityShare}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#4A554E]">Covenant Clause</dt>
              <dd className="mt-1 text-xs font-semibold text-[#111814]">
                {enterprise.covenantFocus}
              </dd>
            </div>
          </dl>
        </div>

        {/* Audited Outcomes Table */}
        <div className="mt-7 pt-6 border-t border-[#DFE4DC]">
          <h4 className="text-xs font-semibold text-[#111814]">
            Independent Audited Performance Benchmarks
          </h4>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#DFE4DC] text-xs text-[#4A554E]">
                  <th className="py-2.5 pr-4 font-medium">Measured Indicator</th>
                  <th className="py-2.5 px-3 font-medium">Entry Baseline</th>
                  <th className="py-2.5 px-3 font-medium">Audited Result</th>
                  <th className="py-2.5 pl-3 font-medium text-right">Window</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE4DC]/80 text-xs">
                {enterprise.auditedOutcomes.map((row) => (
                  <tr key={row.metric}>
                    <td className="py-3 pr-4 font-medium text-[#111814]">{row.metric}</td>
                    <td className="py-3 px-3 font-mono tabular-nums text-[#4A554E]">
                      {row.baseline}
                    </td>
                    <td className="py-3 px-3 font-mono tabular-nums font-medium text-[#14532D]">
                      {row.current}
                    </td>
                    <td className="py-3 pl-3 font-mono tabular-nums text-[#4A554E] text-right">
                      {row.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-[#DFE4DC] flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#4A554E] hover:text-[#111814] transition-colors cursor-pointer whitespace-nowrap min-h-[40px]"
          >
            Close Dossier
          </button>

          <button
            type="button"
            onClick={() => onInquireForEnterprise(enterprise.sector, enterprise.name)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors cursor-pointer whitespace-nowrap min-h-[40px]"
          >
            <span>Propose Regional Partnership</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
