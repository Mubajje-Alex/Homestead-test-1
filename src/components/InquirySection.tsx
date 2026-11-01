import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { SectorKey } from '../data/homesteadData';

interface InquirySectionProps {
  preselectedSector: SectorKey | 'Cross-Sector Initiative';
  preselectedEnterpriseName: string | null;
  onClearPreselectedEnterprise: () => void;
}

interface FormValues {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  sector: SectorKey | 'Cross-Sector Initiative';
  pathway: string;
  summary: string;
}

interface FormErrors {
  fullName?: string;
  organization?: string;
  email?: string;
  phone?: string;
  summary?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  preselectedSector,
  preselectedEnterpriseName,
  onClearPreselectedEnterprise,
}) => {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    sector: preselectedSector,
    pathway: 'Operating Enterprise Proposal',
    summary: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    referenceCode: string;
    submittedAt: string;
    snapshot: FormValues;
  } | null>(null);

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      sector: preselectedSector,
      pathway: preselectedEnterpriseName
        ? 'Regional Operating Partnership'
        : prev.pathway,
      summary:
        preselectedEnterpriseName && !prev.summary
          ? `Inquiry regarding regional collaboration with ${preselectedEnterpriseName}: `
          : prev.summary,
    }));
  }, [preselectedSector, preselectedEnterpriseName]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.fullName.trim() || values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!values.organization.trim()) {
      nextErrors.organization = 'Please enter your enterprise, farmstead, or institution name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Please provide a valid email address (e.g. name@organization.org).';
    }
    if (values.phone.trim()) {
      const phonePattern = /^[+\d\s().-]{7,22}$/;
      if (!phonePattern.test(values.phone.trim())) {
        nextErrors.phone = 'Please enter a valid telephone number including area or country code.';
      }
    }
    if (!values.summary.trim() || values.summary.trim().length < 25) {
      nextErrors.summary =
        'Please include at least a brief 1–2 sentence overview of your operating thesis or transition goals.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    setSubmittedReceipt({
      referenceCode: `HM-2026-${randomSuffix}`,
      submittedAt: formattedDate,
      snapshot: { ...values },
    });
  };

  const handleReset = () => {
    setSubmittedReceipt(null);
    onClearPreselectedEnterprise();
    setValues({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      sector: SectorKey.Health,
      pathway: 'Operating Enterprise Proposal',
      summary: '',
    });
    setErrors({});
  };

  return (
    <section id="inquiry" className="py-20 md:py-28 bg-white border-b border-[#DFE4DC]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 5 Columns: Direct Intake Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-medium text-[#4A554E]">
                Stewardship Intake · Direct Proposals
              </p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#111814]">
                Build or transition an enduring enterprise with us.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4A554E]">
                We review proposals directly from physicians, agricultural land stewards, cooperative
                leaders, and systems engineers seeking long-horizon capital without extractive exit
                mandates.
              </p>
            </div>

            <div className="pt-6 border-t border-[#DFE4DC] space-y-5 text-sm">
              <div>
                <h3 className="font-semibold text-[#111814]">01. Founder &amp; Operator Capital</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#4A554E]">
                  Majority or anchor permanent capital for preventative clinics, regional
                  compounding, cold-chain cooperatives, and repairable hardware studios.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#111814]">
                  02. Generational Land &amp; Clinic Succession
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#4A554E]">
                  Succession partnerships for retiring family landowners and independent medical
                  practices committed to preserving local stewardship.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#111814]">
                  03. Review Cadence &amp; Confidentiality
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#4A554E]">
                  Every dossier is read by an operating steward in the relevant sector within{' '}
                  <span className="font-mono tabular-nums text-[#111814]">10 business days</span>.
                  Submitted materials remain strictly confidential.
                </p>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Validated Intake Form or Receipt */}
          <div className="lg:col-span-7 rounded-xl border border-[#DFE4DC] bg-[#F8F9F7] p-6 sm:p-9">
            {submittedReceipt ? (
              <div role="status" aria-live="polite" className="space-y-6">
                <div className="flex items-start gap-3 pb-5 border-b border-[#DFE4DC]">
                  <CheckCircle2
                    className="w-6 h-6 text-[#14532D] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs font-mono tabular-nums text-[#4A554E]">
                      Dossier Reference: {submittedReceipt.referenceCode} ·{' '}
                      {submittedReceipt.submittedAt}
                    </div>
                    <h3 className="mt-1 font-serif text-2xl font-semibold text-[#111814]">
                      Proposal Logged with the Stewardship Committee
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#354039]">
                      Thank you, {submittedReceipt.snapshot.fullName}. Your{' '}
                      {submittedReceipt.snapshot.sector} dossier on behalf of{' '}
                      <span className="font-semibold text-[#111814]">
                        {submittedReceipt.snapshot.organization}
                      </span>{' '}
                      has been routed to our sector managing stewards.
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <dt className="text-[#4A554E]">Confirmation Dispatched To</dt>
                    <dd className="mt-1 font-mono text-[#111814]">
                      {submittedReceipt.snapshot.email}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#4A554E]">Pathway &amp; Sector</dt>
                    <dd className="mt-1 font-semibold text-[#111814]">
                      {submittedReceipt.snapshot.pathway} · {submittedReceipt.snapshot.sector}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-[#4A554E]">Recorded Executive Summary</dt>
                    <dd className="mt-1 text-[#354039] leading-relaxed bg-white p-4 rounded-lg border border-[#DFE4DC]">
                      {submittedReceipt.snapshot.summary}
                    </dd>
                  </div>
                </dl>

                <div className="pt-4 border-t border-[#DFE4DC] flex items-center justify-between gap-4">
                  <span className="text-xs text-[#4A554E]">
                    Expected written response within 10 business days.
                  </span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-semibold text-[#111814] bg-white border border-[#DFE4DC] rounded-lg hover:border-[#14532D] transition-colors cursor-pointer whitespace-nowrap min-h-[40px]"
                  >
                    Submit Another Proposal
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {preselectedEnterpriseName && (
                  <div className="p-3.5 rounded-lg bg-white border border-[#DFE4DC] flex items-center justify-between gap-4 text-xs">
                    <span className="text-[#354039]">
                      Direct partnership context:{' '}
                      <strong className="font-semibold text-[#111814]">
                        {preselectedEnterpriseName}
                      </strong>
                    </span>
                    <button
                      type="button"
                      onClick={onClearPreselectedEnterprise}
                      className="text-[#4A554E] hover:text-[#111814] underline whitespace-nowrap cursor-pointer"
                    >
                      Clear selection
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block text-xs font-semibold text-[#111814] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      value={values.fullName}
                      onChange={(e) => {
                        setValues({ ...values, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="Dr. Helena Vance"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'error-name' : undefined}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CFD6CC] rounded-lg text-[#111814] placeholder:text-[#849088] focus:border-[#14532D] min-h-[42px]"
                    />
                    {errors.fullName && (
                      <p
                        id="error-name"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#991B1B]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-org"
                      className="block text-xs font-semibold text-[#111814] mb-1.5"
                    >
                      Enterprise, Cooperative or Practice *
                    </label>
                    <input
                      id="inquiry-org"
                      type="text"
                      value={values.organization}
                      onChange={(e) => {
                        setValues({ ...values, organization: e.target.value });
                        if (errors.organization) setErrors({ ...errors, organization: undefined });
                      }}
                      placeholder="Cascadia Rural Diagnostics"
                      aria-invalid={Boolean(errors.organization)}
                      aria-describedby={errors.organization ? 'error-org' : undefined}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CFD6CC] rounded-lg text-[#111814] placeholder:text-[#849088] focus:border-[#14532D] min-h-[42px]"
                    />
                    {errors.organization && (
                      <p
                        id="error-org"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#991B1B]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.organization}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block text-xs font-semibold text-[#111814] mb-1.5"
                    >
                      Work or Institutional Email *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={values.email}
                      onChange={(e) => {
                        setValues({ ...values, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="hvance@cascadiaclinics.org"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CFD6CC] rounded-lg text-[#111814] placeholder:text-[#849088] focus:border-[#14532D] min-h-[42px]"
                    />
                    {errors.email && (
                      <p
                        id="error-email"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#991B1B]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-phone"
                      className="block text-xs font-semibold text-[#111814] mb-1.5"
                    >
                      Direct Telephone (Optional)
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      value={values.phone}
                      onChange={(e) => {
                        setValues({ ...values, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="+1 (503) 555-0194"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'error-phone' : undefined}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CFD6CC] rounded-lg text-[#111814] placeholder:text-[#849088] focus:border-[#14532D] min-h-[42px]"
                    />
                    {errors.phone && (
                      <p
                        id="error-phone"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#991B1B]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-sector"
                      className="block text-xs font-semibold text-[#111814] mb-1.5"
                    >
                      Primary Mandate Sector
                    </label>
                    <select
                      id="inquiry-sector"
                      value={values.sector}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          sector: e.target.value as SectorKey | 'Cross-Sector Initiative',
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CFD6CC] rounded-lg text-[#111814] focus:border-[#14532D] min-h-[42px]"
                    >
                      <option value={SectorKey.Health}>Health Sector</option>
                      <option value={SectorKey.Agriculture}>Agricultural Sector</option>
                      <option value={SectorKey.Technology}>Technology Sector</option>
                      <option value="Cross-Sector Initiative">Cross-Sector Initiative</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-pathway"
                      className="block text-xs font-semibold text-[#111814] mb-1.5"
                    >
                      Partnership Pathway
                    </label>
                    <select
                      id="inquiry-pathway"
                      value={values.pathway}
                      onChange={(e) => setValues({ ...values, pathway: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CFD6CC] rounded-lg text-[#111814] focus:border-[#14532D] min-h-[42px]"
                    >
                      <option value="Operating Enterprise Proposal">
                        Operating Enterprise Proposal
                      </option>
                      <option value="Land or Practice Succession">
                        Land or Practice Succession
                      </option>
                      <option value="Regional Operating Partnership">
                        Regional Operating Partnership
                      </option>
                      <option value="Permanent Capital Co-Stewardship">
                        Permanent Capital Co-Stewardship
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-summary"
                    className="block text-xs font-semibold text-[#111814] mb-1.5"
                  >
                    Operating Thesis &amp; Legacy Objectives *
                  </label>
                  <textarea
                    id="inquiry-summary"
                    rows={4}
                    value={values.summary}
                    onChange={(e) => {
                      setValues({ ...values, summary: e.target.value });
                      if (errors.summary) setErrors({ ...errors, summary: undefined });
                    }}
                    placeholder="Describe the physical community need, current operating scale or acreage, and how permanent non-extractive stewardship fits your long-term goals..."
                    aria-invalid={Boolean(errors.summary)}
                    aria-describedby={errors.summary ? 'error-summary' : undefined}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CFD6CC] rounded-lg text-[#111814] placeholder:text-[#849088] focus:border-[#14532D]"
                  />
                  {errors.summary && (
                    <p
                      id="error-summary"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-[#991B1B]"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.summary}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#4A554E]">
                    Protected under the Homestead Confidentiality Covenant. Zero third-party sharing.
                  </p>
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#0F3F22] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
                  >
                    Submit Proposal Dossier
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
