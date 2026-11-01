/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { EnterpriseItem, PageRoute, SectorKey } from './data/homesteadData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnterpriseModal } from './components/EnterpriseModal';
import { HomePage } from './pages/HomePage';
import { MandatePage } from './pages/MandatePage';
import { SectorsPage } from './pages/SectorsPage';
import { EnterprisesPage } from './pages/EnterprisesPage';
import { CovenantPage } from './pages/CovenantPage';
import { ProposalPage } from './pages/ProposalPage';

function resolvePathToRoute(pathname: string): PageRoute {
  const clean = pathname.replace(/\/+$/, '') || '/';
  switch (clean.toLowerCase()) {
    case '/mandate':
      return PageRoute.Mandate;
    case '/sectors':
      return PageRoute.Sectors;
    case '/enterprises':
      return PageRoute.Enterprises;
    case '/covenant':
      return PageRoute.Covenant;
    case '/proposal':
      return PageRoute.Proposal;
    default:
      return PageRoute.Home;
  }
}

const PAGE_TITLES: Record<PageRoute, string> = {
  [PageRoute.Home]: 'Homestead Mandate — Building Legacy Through Ethical Enterprises',
  [PageRoute.Mandate]: 'The Mandate — Homestead Mandate',
  [PageRoute.Sectors]: 'Health, Agriculture & Technology Sectors — Homestead Mandate',
  [PageRoute.Enterprises]: 'Operating Enterprises — Homestead Mandate',
  [PageRoute.Covenant]: 'The Ethical Covenant & Audit Ledger — Homestead Mandate',
  [PageRoute.Proposal]: 'Submit Enterprise Proposal — Homestead Mandate',
};

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>(() =>
    resolvePathToRoute(window.location.pathname)
  );

  const [focusedSectorOnSectorsPage, setFocusedSectorOnSectorsPage] = useState<'All' | SectorKey>(
    'All'
  );
  const [portfolioSectorFilter, setPortfolioSectorFilter] = useState<'All' | SectorKey>('All');
  const [portfolioStageFilter, setPortfolioStageFilter] = useState<
    'All' | 'Foundational Build' | 'Scale & Stewardship'
  >('All');
  const [inspectedEnterprise, setInspectedEnterprise] = useState<EnterpriseItem | null>(null);

  const [inquirySector, setInquirySector] = useState<SectorKey | 'Cross-Sector Initiative'>(
    SectorKey.Health
  );
  const [inquiryEnterpriseName, setInquiryEnterpriseName] = useState<string | null>(null);

  // Sync browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setActivePage(resolvePathToRoute(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title on route changes
  useEffect(() => {
    document.title = PAGE_TITLES[activePage];
  }, [activePage]);

  const navigateTo = useCallback((route: PageRoute) => {
    if (window.location.pathname !== route) {
      window.history.pushState({}, '', route);
    }
    if (route === PageRoute.Sectors) {
      setFocusedSectorOnSectorsPage('All');
    }
    setActivePage(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateToSectorBlueprint = useCallback((sector: SectorKey) => {
    setFocusedSectorOnSectorsPage(sector);
    if (window.location.pathname !== PageRoute.Sectors) {
      window.history.pushState({}, '', PageRoute.Sectors);
    }
    setActivePage(PageRoute.Sectors);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateToSectorEnterprises = useCallback((sector: SectorKey) => {
    setPortfolioSectorFilter(sector);
    setPortfolioStageFilter('All');
    if (window.location.pathname !== PageRoute.Enterprises) {
      window.history.pushState({}, '', PageRoute.Enterprises);
    }
    setActivePage(PageRoute.Enterprises);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateToProposalWithSector = useCallback((sector: SectorKey) => {
    setInquirySector(sector);
    setInquiryEnterpriseName(null);
    if (window.location.pathname !== PageRoute.Proposal) {
      window.history.pushState({}, '', PageRoute.Proposal);
    }
    setActivePage(PageRoute.Proposal);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleInquireForEnterprise = useCallback(
    (sector: SectorKey, enterpriseName: string) => {
      setInspectedEnterprise(null);
      setInquirySector(sector);
      setInquiryEnterpriseName(enterpriseName);
      if (window.location.pathname !== PageRoute.Proposal) {
        window.history.pushState({}, '', PageRoute.Proposal);
      }
      setActivePage(PageRoute.Proposal);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-[#111814]">
      <Navbar activePage={activePage} onNavigate={navigateTo} />

      <main className="flex-1">
        {activePage === PageRoute.Home && (
          <HomePage
            onNavigate={navigateTo}
            onNavigateToSector={handleNavigateToSectorBlueprint}
            onNavigateToSectorEnterprises={handleNavigateToSectorEnterprises}
            onInspectEnterprise={setInspectedEnterprise}
          />
        )}

        {activePage === PageRoute.Mandate && <MandatePage onNavigate={navigateTo} />}

        {activePage === PageRoute.Sectors && (
          <SectorsPage
            initialFocusSector={focusedSectorOnSectorsPage}
            onNavigateToSectorEnterprises={handleNavigateToSectorEnterprises}
            onNavigateToProposalWithSector={handleNavigateToProposalWithSector}
          />
        )}

        {activePage === PageRoute.Enterprises && (
          <EnterprisesPage
            selectedSector={portfolioSectorFilter}
            onSectorChange={setPortfolioSectorFilter}
            selectedStage={portfolioStageFilter}
            onStageChange={setPortfolioStageFilter}
            onInspectEnterprise={setInspectedEnterprise}
            onNavigate={navigateTo}
          />
        )}

        {activePage === PageRoute.Covenant && <CovenantPage onNavigate={navigateTo} />}

        {activePage === PageRoute.Proposal && (
          <ProposalPage
            preselectedSector={inquirySector}
            preselectedEnterpriseName={inquiryEnterpriseName}
            onClearPreselectedEnterprise={() => setInquiryEnterpriseName(null)}
          />
        )}
      </main>

      <Footer
        onNavigate={navigateTo}
        onNavigateToSector={handleNavigateToSectorBlueprint}
      />

      <EnterpriseModal
        enterprise={inspectedEnterprise}
        onClose={() => setInspectedEnterprise(null)}
        onInquireForEnterprise={handleInquireForEnterprise}
      />
    </div>
  );
}
