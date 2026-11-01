/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { EnterpriseItem, SectorKey } from './data/homesteadData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MandateSection } from './components/MandateSection';
import { SectorsSection } from './components/SectorsSection';
import { EnterprisesSection } from './components/EnterprisesSection';
import { EnterpriseModal } from './components/EnterpriseModal';
import { CovenantSection } from './components/CovenantSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';

export default function App() {
  const [portfolioSectorFilter, setPortfolioSectorFilter] = useState<'All' | SectorKey>('All');
  const [portfolioStageFilter, setPortfolioStageFilter] = useState<
    'All' | 'Foundational Build' | 'Scale & Stewardship'
  >('All');
  const [inspectedEnterprise, setInspectedEnterprise] = useState<EnterpriseItem | null>(null);

  const [inquirySector, setInquirySector] = useState<SectorKey | 'Cross-Sector Initiative'>(
    SectorKey.Health
  );
  const [inquiryEnterpriseName, setInquiryEnterpriseName] = useState<string | null>(null);

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToInquiry = () => {
    scrollToElement('inquiry');
    window.setTimeout(() => {
      const nameInput = document.getElementById('inquiry-name');
      if (nameInput) nameInput.focus({ preventScroll: true });
    }, 350);
  };

  const handleSelectSectorPortfolio = (sector: SectorKey) => {
    setPortfolioSectorFilter(sector);
    setPortfolioStageFilter('All');
    scrollToElement('enterprises');
  };

  const handleInquireForEnterprise = (sector: SectorKey, enterpriseName: string) => {
    setInspectedEnterprise(null);
    setInquirySector(sector);
    setInquiryEnterpriseName(enterpriseName);
    scrollToElement('inquiry');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-[#111814]">
      <Navbar onNavigateToInquiry={handleNavigateToInquiry} />

      <main className="flex-1">
        <HeroSection onNavigateToInquiry={handleNavigateToInquiry} />

        <MandateSection />

        <SectorsSection onSelectSectorPortfolio={handleSelectSectorPortfolio} />

        <EnterprisesSection
          selectedSector={portfolioSectorFilter}
          onSectorChange={setPortfolioSectorFilter}
          selectedStage={portfolioStageFilter}
          onStageChange={setPortfolioStageFilter}
          onInspectEnterprise={setInspectedEnterprise}
        />

        <CovenantSection />

        <InquirySection
          preselectedSector={inquirySector}
          preselectedEnterpriseName={inquiryEnterpriseName}
          onClearPreselectedEnterprise={() => setInquiryEnterpriseName(null)}
        />
      </main>

      <Footer onSelectSectorPortfolio={handleSelectSectorPortfolio} />

      <EnterpriseModal
        enterprise={inspectedEnterprise}
        onClose={() => setInspectedEnterprise(null)}
        onInquireForEnterprise={handleInquireForEnterprise}
      />
    </div>
  );
}
