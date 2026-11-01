import heroCampusImg from '../assets/images/hero_homestead_campus_1793220300340.jpg';
import sectorHealthImg from '../assets/images/sector_health_care_1793220302107.jpg';
import sectorAgricultureImg from '../assets/images/sector_agriculture_fields_1793220303392.jpg';
import sectorTechnologyImg from '../assets/images/sector_technology_studio_1793220304447.jpg';
import covenantLedgerImg from '../assets/images/covenant_stewardship_ledger_1793220305143.jpg';
import mandateAtriumImg from '../assets/images/mandate_archive_atrium_1793557645639.jpg';
import enterprisesHubImg from '../assets/images/enterprises_cooperative_hub_1793557646627.jpg';
import covenantFieldAuditImg from '../assets/images/covenant_field_audit_1793557729328.jpg';

export enum PageRoute {
  Home = '/',
  Mandate = '/mandate',
  Sectors = '/sectors',
  Enterprises = '/enterprises',
  Covenant = '/covenant',
  Proposal = '/proposal',
}

export enum SectorKey {
  Health = 'Health',
  Agriculture = 'Agriculture',
  Technology = 'Technology',
}

export interface SectorDetail {
  key: SectorKey;
  index: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  figureCaption: string;
  summary: string;
  thesis: string;
  ethicalBoundary: string;
  primaryMetricValue: string;
  primaryMetricLabel: string;
  primaryMetricContext: string;
  regionalHubs: string;
  committedCapital: string;
  capabilities: {
    name: string;
    outcome: string;
  }[];
  benchmarks: {
    label: string;
    value: string;
  }[];
  capitalShare: string;
  holdingHorizon: string;
}

export interface EnterpriseItem {
  id: string;
  name: string;
  sector: SectorKey;
  foundedYear: number;
  region: string;
  stage: 'Foundational Build' | 'Scale & Stewardship';
  summary: string;
  headlineMetric: string;
  secondaryMetric: string;
  stewardEquityShare: string;
  governanceLead: string;
  covenantFocus: string;
  operatingThesis: string;
  auditedOutcomes: {
    metric: string;
    baseline: string;
    current: string;
    period: string;
  }[];
}

export interface SynergyBridge {
  id: string;
  title: string;
  sectorsInvolved: string;
  summary: string;
  operationalMechanism: string;
  quantifiedProof: string;
}

export interface CovenantArticle {
  number: string;
  title: string;
  clause: string;
  enforcementMechanism: string;
  auditBenchmark: string;
}

export interface AuditRow {
  sector: SectorKey;
  enterprisesCount: number;
  committedCapitalM: number;
  stewardOwnershipPct: number;
  fiveYearOutcome: string;
  auditStatus: string;
}

export interface PartnerTestimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  sector: SectorKey;
  outcomeNote: string;
}

export interface MandateMilestone {
  year: string;
  title: string;
  sectorScope: string;
  detail: string;
}

export interface CapitalComparisonRow {
  dimension: string;
  homesteadModel: string;
  conventionalModel: string;
}

export interface CouncilMember {
  name: string;
  role: string;
  discipline: string;
  tenure: string;
  bio: string;
}

export const VISUAL_ASSETS = {
  heroCampus: heroCampusImg,
  sectorHealth: sectorHealthImg,
  sectorAgriculture: sectorAgricultureImg,
  sectorTechnology: sectorTechnologyImg,
  covenantLedger: covenantLedgerImg,
  mandateAtrium: mandateAtriumImg,
  enterprisesHub: enterprisesHubImg,
  covenantFieldAudit: covenantFieldAuditImg,
};

export const HERO_METRICS = [
  {
    value: '$480M',
    label: 'Permanent Capital Committed',
    context: 'Zero forced exit windows; 25-year minimum holding mandate',
  },
  {
    value: '14',
    label: 'Operating Enterprises',
    context: 'Majority-stewarded across Health, Agriculture, and Technology',
  },
  {
    value: '68,400 ac',
    label: 'Regenerative Farmland',
    context: '+34% audited topsoil organic carbon over 60 months',
  },
  {
    value: '412,000',
    label: 'Annual Patient Visits',
    context: 'Across 19 fixed-fee preventative and maternal care clinics',
  },
];

export const SYNERGY_BRIDGES: SynergyBridge[] = [
  {
    id: 'soil-to-clinic',
    title: 'Soil-to-Clinic Metabolic Prevention',
    sectorsInvolved: 'Agriculture · Health',
    summary:
      'Preventative medicine begins in living topsoil. Nutrient-dense pulses, grains, and cold-pressed oils grown on Homestead agricultural estates supply clinical nutrition prescriptions in our primary care centers.',
    operationalMechanism:
      'Loam & Lineage Estates contracts directly with Veridian Primary Health kitchens and maternal nutrition programs, bypassing ultra-processed commodity middlemen.',
    quantifiedProof:
      '31% improvement in maternal iron and metabolic markers across 4,800 enrolled patients over 18 months.',
  },
  {
    id: 'repairable-agronomy',
    title: 'Open-Schematic Field & Cold-Chain Telemetry',
    sectorsInvolved: 'Technology · Agriculture',
    summary:
      'Farmers should own both their harvest and the instruments that measure their land. Our engineering studios build repairable solar telemetry that cuts post-harvest spoilage without locking growers into proprietary cloud fees.',
    operationalMechanism:
      'Arbor Field Instruments powers Canopy Cold-Chain Commons storage hubs within 15 miles of farmgates, alerting cooperative stewards before thermal drift occurs.',
    quantifiedProof:
      '41% reduction in perishable post-harvest crop loss across 6 regional cooperative storage hubs.',
  },
  {
    id: 'sovereign-diagnostics',
    title: 'Offline-Resilient Clinical & Supply Infrastructure',
    sectorsInvolved: 'Technology · Health',
    summary:
      'Regional clinics require clinical software and cold-chain monitors that function reliably even when grid power or fiber connectivity fluctuates, with zero monetization of patient health records.',
    operationalMechanism:
      'CivicMed Ledger Systems pairs local-first diagnostic imaging records with Helios solar biologic refrigeration controllers for insulin and maternal vaccines.',
    quantifiedProof:
      '99.94% clinical and cold-storage operational uptime across 64 partner clinics and dispensaries.',
  },
];

export const MANDATE_CHRONOLOGY: MandateMilestone[] = [
  {
    year: '2014',
    title: 'Ratification of the Homestead Charter',
    sectorScope: 'Institutional Governance',
    detail:
      'Established in the Willamette Basin as an evergreen holding trust prohibiting leveraged buyouts, forced asset sales, and extractive resource depletion.',
  },
  {
    year: '2016',
    title: 'Inaugural 30-Year Soil Transition Leases',
    sectorScope: 'Agricultural Sector',
    detail:
      'Launched Loam & Lineage Estates alongside 28 founding family farmsteads to finance multi-year transitions from synthetic monocropping into polyculture grains and pulses.',
  },
  {
    year: '2018',
    title: 'Veridian Preventative Clinical Network',
    sectorScope: 'Health Sector',
    detail:
      'Opened our first four sunlit primary care and midwifery centers operating on transparent household memberships with zero medical debt collection.',
  },
  {
    year: '2019',
    title: 'Open-Schematic Field Hardware Studio',
    sectorScope: 'Technology Sector',
    detail:
      'Founded Arbor Field Instruments in Zurich and Portland to build field-repairable soil and cold-storage telemetry free from vendor SaaS lock-in.',
  },
  {
    year: '2022',
    title: 'Cross-Continental Cold-Chain & Biologics Expansion',
    sectorScope: 'Health · Agriculture',
    detail:
      'Commissioned regional sterile medicine compounding and solar-thermal cooperative harvest cooling hubs across East Africa and the Alpine corridor.',
  },
  {
    year: '2026',
    title: '$480M Permanent Capital & 100% Covenant Verification',
    sectorScope: 'All Three Sectors',
    detail:
      'Reached 14 operating enterprises with 18.4% weighted practitioner equity ownership and unqualified physical audits across soil, clinical, and hardware systems.',
  },
];

export const CAPITAL_COMPARISON_ROWS: CapitalComparisonRow[] = [
  {
    dimension: 'Capital Holding Horizon',
    homesteadModel: 'Permanent evergreen capital (20–30+ year minimum charter)',
    conventionalModel: '3–7 year fund lifecycle forcing premature exit or resale',
  },
  {
    dimension: 'Debt & Leverage Discipline',
    homesteadModel: 'Zero leveraged buyout debt; conservative asset-backed reserves',
    conventionalModel: 'Heavy acquisition debt placed onto operating company balance sheets',
  },
  {
    dimension: 'Practitioner & Worker Equity',
    homesteadModel: 'Mandatory 15–25% non-dilutable equity held by clinicians, growers & engineers',
    conventionalModel: 'Concentrated carry for financial sponsors; minimal frontline ownership',
  },
  {
    dimension: 'Dividend Distribution Gate',
    homesteadModel: '20% cash escrow released only after passing soil & clinical outcome audits',
    conventionalModel: 'Financial covenants only; ecological and patient externalities ignored',
  },
  {
    dimension: 'Technology & Data Rights',
    homesteadModel: 'Published repair schematics; cryptographic patient & farmer data sovereignty',
    conventionalModel: 'Proprietary repair locks, subscription rent-seeking & data monetization',
  },
];

export const STEWARDSHIP_COUNCIL: CouncilMember[] = [
  {
    name: 'Eleanor Vance-Kerr, MD',
    role: 'Chair of Clinical Stewardship',
    discipline: 'Preventative Medicine & Maternal Health',
    tenure: 'Steward since 2015',
    bio: 'Former rural hospital chief of medicine overseeing clinical quality audits, transparent pricing charters, and essential biologics access.',
  },
  {
    name: 'Dr. Thomasenga Mwangi, PhD',
    role: 'Chief Soil & Watershed Auditor',
    discipline: 'Agroecology & Post-Harvest Systems',
    tenure: 'Steward since 2016',
    bio: 'Leads annual 30cm topsoil carbon verification, heritage seed multiplication standards, and cooperative cold-chain governance across two continents.',
  },
  {
    name: 'Lukas Meier, Dipl.-Ing.',
    role: 'Principal Systems & Hardware Steward',
    discipline: 'Embedded Telemetry & Right-to-Repair',
    tenure: 'Steward since 2019',
    bio: 'Industrial electronics architect ensuring every sensor, microgrid controller, and clinical workstation ships with open service schematics.',
  },
  {
    name: 'Claire Deschamps, CFA',
    role: 'Fiduciary Chancellor',
    discipline: 'Permanent Endowment & Steward Trusts',
    tenure: 'Steward since 2014',
    bio: 'Co-author of the 2014 Homestead Covenant, safeguarding subsidiary balance sheets against extractive debt and administering worker equity trusts.',
  },
];

export const SECTORS_DATA: SectorDetail[] = [
  {
    key: SectorKey.Health,
    index: '01',
    title: 'Health Sector',
    subtitle: 'Preventative Clinical Infrastructure & Essential Biologics',
    image: sectorHealthImg,
    imageAlt:
      'Two clinicians reviewing diagnostic imaging inside a sunlit oak and limestone preventative health center overlooking a green courtyard',
    figureCaption: 'Fig. 02 · Veridian Diagnostic & Maternal Care Suite, Regional Health Mandate',
    summary:
      'We build and steward community-anchored primary care networks, maternal health centers, and regional sterile compounding facilities structured around patient recovery rather than billing complexity.',
    thesis:
      'Healthcare enterprises endure when clinician autonomy and transparent pricing replace fee-for-volume fragmentation. Homestead Mandate backs physical care delivery and essential generic medicine manufacturing with patient-first balance sheets.',
    ethicalBoundary:
      'We prohibit surprise medical billing, algorithmic claim denials, debt collection against low-income households, and the sale of de-identified patient records.',
    primaryMetricValue: '-28%',
    primaryMetricLabel: 'Acute Hospital Readmissions',
    primaryMetricContext: 'Measured across 19 preventative clinics from 2022 to 2026',
    regionalHubs: 'Willamette Basin · Intermountain West · East Africa',
    committedCapital: '$182.4M Permanent Allocation',
    capabilities: [
      {
        name: 'Community Primary & Maternal Clinics',
        outcome:
          'Transparent monthly household memberships with same-day diagnostic imaging and midwifery.',
      },
      {
        name: 'Essential Biologics & Compounding',
        outcome:
          'Regional cold-stable manufacturing for insulin, electrolytes, and maternal therapeutics.',
      },
      {
        name: 'Metabolic & Nutritional Prescriptions',
        outcome:
          'Direct clinical integration with regional regenerative farmsteads for chronic disease reversal.',
      },
    ],
    benchmarks: [
      { label: 'Annual Patient Encounters', value: '412,000' },
      { label: 'Clinician Annual Retention', value: '96.4%' },
      { label: 'Essential Drug Cost Reduction', value: '-38%' },
    ],
    capitalShare: '38% of Mandate Capital',
    holdingHorizon: '25+ Year Core Hold',
  },
  {
    key: SectorKey.Agriculture,
    index: '02',
    title: 'Agricultural Sector',
    subtitle: 'Regenerative Agronomy, Seed Sovereignty & Cold-Chain Commons',
    image: sectorAgricultureImg,
    imageAlt:
      'Morning sunlight over diverse polyculture heritage grain and orchard rows with a compact solar soil telemetry station in dark loam soil',
    figureCaption: 'Fig. 03 · Polyculture Heritage Grain & Soil Carbon Plot, Loam & Lineage Estates',
    summary:
      'We partner with generational land stewards and agricultural cooperatives to transition depleted monoculture acreage into biologically rich polyculture estates, backed by regional cold-chain storage.',
    thesis:
      'Living soil is civilization’s primary endowment. Conventional short-term land leases reward chemical extraction; our 30-year stewardship leases reward topsoil formation, watershed retention, and regional food security.',
    ethicalBoundary:
      'We refuse terminator seed licensing, predatory input-credit liens against smallholders, and speculative farmland flipping that displaces working rural families.',
    primaryMetricValue: '+34%',
    primaryMetricLabel: 'Topsoil Organic Carbon',
    primaryMetricContext: 'Verified by independent core sampling across 68,400 stewarded acres',
    regionalHubs: 'Pacific Northwest · Great Plains · Rift Valley',
    committedCapital: '$163.2M Permanent Allocation',
    capabilities: [
      {
        name: 'Generational Land Transition Leases',
        outcome:
          '30-year shared-harvest leases enabling young and retiring farmers to transition without debt distress.',
      },
      {
        name: 'Open-Pollinated & Heritage Seed Banks',
        outcome:
          'Regional multiplication of drought-resilient grains, pulses, and rootstock owned by growers.',
      },
      {
        name: 'Solar-Thermal Cold-Chain Hubs',
        outcome:
          'Farmgate aggregation and cooling infrastructure cutting perishable spoilage by over 40%.',
      },
    ],
    benchmarks: [
      { label: 'Verified Regenerative Land', value: '68,400 ac' },
      { label: 'Post-Harvest Spoilage Cut', value: '-41%' },
      { label: 'Partner Family Farmsteads', value: '180' },
    ],
    capitalShare: '34% of Mandate Capital',
    holdingHorizon: '30+ Year Land & Co-op Hold',
  },
  {
    key: SectorKey.Technology,
    index: '03',
    title: 'Technology Sector',
    subtitle: 'Repairable Field Hardware, Clinical Systems & Sovereign Infrastructure',
    image: sectorTechnologyImg,
    imageAlt:
      'Engineers calibrating brushed-aluminum cold-chain and agricultural telemetry hardware on a solid wood workbench in a sunlit studio',
    figureCaption: 'Fig. 04 · Open-Schematic Cold-Chain & Soil Telemetry Calibration, Arbor Studio',
    summary:
      'We engineer durable physical instrumentation and local-first software that serve clinics, farms, and rural utilities—built with published schematics, repairable enclosures, and zero surveillance business models.',
    thesis:
      'Technology is noble when it extends human competence and physical resilience. We invest exclusively in verifiable engineering—sensors, power controllers, and clinical interoperability—where revenue comes from honest utility.',
    ethicalBoundary:
      'We prohibit planned hardware obsolescence, DRM-locked equipment repairs, behavioral attention harvesting, and third-party data brokerage.',
    primaryMetricValue: '99.94%',
    primaryMetricLabel: 'Field System Uptime',
    primaryMetricContext: 'Across 140 offline-capable clinical and agricultural microgrid sites',
    regionalHubs: 'Zurich · Portland · Nairobi Engineering Labs',
    committedCapital: '$134.4M Permanent Allocation',
    capabilities: [
      {
        name: 'Right-to-Repair Agronomic Telemetry',
        outcome:
          'Modular soil moisture, watershed, and cold-room sensors serviceable with standard hand tools.',
      },
      {
        name: 'Local-First Clinical & Inventory Ledgers',
        outcome:
          'Zero-downtime hospital records and pharmacy stock systems that work online or offline.',
      },
      {
        name: 'Rural Solar & Cold-Storage Controllers',
        outcome:
          'Solid-state microgrid load balancers protecting medical biologics and harvest cold rooms.',
      },
    ],
    benchmarks: [
      { label: 'Modular Field Nodes Active', value: '14,200' },
      { label: 'Mean Local Repair Time', value: '22 min' },
      { label: 'Commercial Data Brokered', value: '0 Bytes' },
    ],
    capitalShare: '28% of Mandate Capital',
    holdingHorizon: '20+ Year Operating Hold',
  },
];

export const ENTERPRISES_DATA: EnterpriseItem[] = [
  {
    id: 'veridian-health',
    name: 'Veridian Primary & Maternal Health',
    sector: SectorKey.Health,
    foundedYear: 2018,
    region: 'Willamette Basin & Intermountain West',
    stage: 'Scale & Stewardship',
    summary:
      'Network of 19 architectural primary care and midwifery clinics operating on transparent household memberships and integrated diagnostic imaging.',
    headlineMetric: '412,000 annual patient visits',
    secondaryMetric: '94.2% maternal care continuity',
    stewardEquityShare: '18% Clinician-Owned',
    governanceLead: 'Dr. Miriam Vance, MD, MPH',
    covenantFocus: 'Fixed transparent pricing; zero medical debt referrals',
    operatingThesis:
      'Veridian replaces rushed 8-minute insurance-coded encounters with 35-minute preventative consultations, on-site ultrasound and lab diagnostics, and whole-food metabolic coaching.',
    auditedOutcomes: [
      {
        metric: 'Preventable 30-Day Hospital Readmissions',
        baseline: '16.4%',
        current: '11.8% (-28%)',
        period: '2022–2026',
      },
      {
        metric: 'Unscheduled Emergency Room Visits per 1,000 Members',
        baseline: '310',
        current: '198 (-36%)',
        period: '2023–2026',
      },
      {
        metric: 'Clinician Annual Retention Rate',
        baseline: '78.0%',
        current: '96.4%',
        period: '2025 Audit',
      },
    ],
  },
  {
    id: 'galenica-biologics',
    name: 'Galenica Essential Biologics',
    sector: SectorKey.Health,
    foundedYear: 2020,
    region: 'East Africa & European Alpine Corridor',
    stage: 'Scale & Stewardship',
    summary:
      'Regional sterile fill-finish and essential medicine manufacturing eliminating rural hospital stockouts for insulin, oxytocin, and sterile electrolytes.',
    headlineMetric: '-38% hospital procurement cost',
    secondaryMetric: '11.4M sterile doses delivered in 2025',
    stewardEquityShare: '15% Technician & Pharmacist Pool',
    governanceLead: 'Henrik Lindqvist, MSc Pharm',
    covenantFocus: 'Cost-plus 12% ceiling on WHO essential medicines list',
    operatingThesis:
      'Long global pharmaceutical supply chains fail rural hospitals first. Galenica places modular, GMP-certified sterile manufacturing closer to regional health networks under capped ethical margins.',
    auditedOutcomes: [
      {
        metric: 'Partner Hospital Essential Medicine Stockout Days',
        baseline: '29 days / yr',
        current: '1.4 days / yr',
        period: '2022–2026',
      },
      {
        metric: 'Average Unit Cost Reduction for Community Clinics',
        baseline: 'Baseline Index 100',
        current: 'Index 62 (-38%)',
        period: '2025 Audit',
      },
      {
        metric: 'Solar & Closed-Loop Water Process Share',
        baseline: '42%',
        current: '89%',
        period: '2025 Audit',
      },
    ],
  },
  {
    id: 'clearwater-diagnostics',
    name: 'Clearwater Rural Diagnostics',
    sector: SectorKey.Health,
    foundedYear: 2023,
    region: 'Appalachia & Northern Plains',
    stage: 'Foundational Build',
    summary:
      'Mobile and small-town diagnostic pathology, digital radiography, and waterborne-pathogen screening laboratories serving county clinics within 24 hours.',
    headlineMetric: '18-hour median lab turnaround',
    secondaryMetric: '31 rural counties served directly',
    stewardEquityShare: '17% Lab Technologist Equity',
    governanceLead: 'Dr. Kwame Mensah-Bonsu, MD',
    covenantFocus: 'Published cash lab tariff; zero out-of-network balance billing',
    operatingThesis:
      'Delayed biopsy and blood-panel turnarounds turn treatable conditions into acute emergencies in rural counties. Clearwater places compact reference labs directly inside regional clinic hubs.',
    auditedOutcomes: [
      {
        metric: 'Diagnostic Pathology Turnaround Time',
        baseline: '5.8 days',
        current: '18 hours (-87%)',
        period: '2024–2026',
      },
      {
        metric: 'Average Diagnostic Panel Patient Out-of-Pocket Cost',
        baseline: '$185',
        current: '$42 (-77%)',
        period: '2025 Audit',
      },
      {
        metric: 'Early Stage Metabolic & Renal Detection Rate',
        baseline: '24%',
        current: '61%',
        period: '2025 Cohort',
      },
    ],
  },
  {
    id: 'loam-and-lineage',
    name: 'Loam & Lineage Estates',
    sector: SectorKey.Agriculture,
    foundedYear: 2016,
    region: 'Pacific Northwest & Great Plains',
    stage: 'Scale & Stewardship',
    summary:
      '68,400 acres of transition-financed polyculture grain, pulse, and agroforestry estates partnering with 180 working family stewards on 30-year leases.',
    headlineMetric: '+34% topsoil organic carbon',
    secondaryMetric: '180 partner family farmsteads',
    stewardEquityShare: '22% Grower Co-Equity Trust',
    governanceLead: 'Caleb Thorne, Chief Agronomist',
    covenantFocus: '30-year non-extractive leases; zero synthetic soil fumigation',
    operatingThesis:
      'Transitioning conventional acreage to regenerative polyculture takes 3 to 5 years of patient agronomic support. Loam & Lineage absorbs transition risk alongside working growers and shares downstream mill premiums.',
    auditedOutcomes: [
      {
        metric: 'Measured Topsoil Organic Matter (0–30cm Core)',
        baseline: '2.6%',
        current: '3.48% (+34%)',
        period: '2021–2026',
      },
      {
        metric: 'Watershed Infiltration Rate (Inches / Hour)',
        baseline: '1.1 in/hr',
        current: '3.4 in/hr',
        period: '2025 Field Audit',
      },
      {
        metric: 'Synthetic Nitrogen Input Dependency',
        baseline: '100% Baseline',
        current: '24% (-76%)',
        period: '2021–2026',
      },
    ],
  },
  {
    id: 'canopy-cold-chain',
    name: 'Canopy Cold-Chain Commons',
    sector: SectorKey.Agriculture,
    foundedYear: 2021,
    region: 'Rift Valley & Mediterranean Basin',
    stage: 'Foundational Build',
    summary:
      'Cooperative solar-thermal cooling, grading, and storage facilities sited within 15 miles of smallholder and mid-sized orchard and vegetable growers.',
    headlineMetric: '-41% perishable harvest spoilage',
    secondaryMetric: '6 regional hubs · 9,200 grower members',
    stewardEquityShare: '25% Grower Cooperative Equity',
    governanceLead: 'Amina Ochieng, Operations Steward',
    covenantFocus: 'Open-access cooperative tariff; zero distress-buy purchasing',
    operatingThesis:
      'Without farmgate cooling, growers are forced to sell perishable harvests within hours at distressed prices. Canopy provides phase-change solar cold rooms that extend shelf life by up to 21 days.',
    auditedOutcomes: [
      {
        metric: 'Post-Harvest Horticultural Spoilage Rate',
        baseline: '34.0%',
        current: '20.1% (-41%)',
        period: '2023–2026',
      },
      {
        metric: 'Realized Net Farmgate Income per Ton',
        baseline: '$410 / ton',
        current: '$562 / ton (+37%)',
        period: '2025 Harvest',
      },
      {
        metric: 'Off-Grid Solar Thermal Autonomy',
        baseline: '72 hours',
        current: '120 hours',
        period: '2025 Engineering Audit',
      },
    ],
  },
  {
    id: 'heritage-seed-millworks',
    name: 'Heritage Seed & Pulse Millworks',
    sector: SectorKey.Agriculture,
    foundedYear: 2019,
    region: 'Palouse Basin & Upper Midwest',
    stage: 'Scale & Stewardship',
    summary:
      'Open-pollinated seed multiplication sanctuaries and stone/roller regional grain mills supplying clinics, schools, and independent bakeries.',
    headlineMetric: '114 non-patented cultivars',
    secondaryMetric: '48,000 tons milled regionally in 2025',
    stewardEquityShare: '20% Miller & Seed-Breeder Trust',
    governanceLead: 'Ingrid Solberg, Master Seed Steward',
    covenantFocus: 'Public-domain seed pledge; farmer right-to-save harvest seed',
    operatingThesis:
      'Uniform hybrid monocultures are vulnerable to drought and fungal shifts. Heritage Seed & Pulse Millworks breeds regionally adapted open-pollinated varieties that farmers legally own and replant freely.',
    auditedOutcomes: [
      {
        metric: 'Drought-Year Yield Stability vs. Commodity Hybrids',
        baseline: 'Baseline 100',
        current: 'Index 129 (+29%)',
        period: '2023 Drought Season',
      },
      {
        metric: 'Mineral Micronutrient Retention (Iron & Zinc)',
        baseline: 'Refined Roller Baseline',
        current: '+46% Bioavailable',
        period: '2025 Nutritional Assay',
      },
      {
        metric: 'Grower Seed Royalty Burden',
        baseline: '$64 / acre Industry Avg',
        current: '$0 Replant Royalty',
        period: 'Permanent Charter',
      },
    ],
  },
  {
    id: 'arbor-field-instruments',
    name: 'Arbor Field Instruments',
    sector: SectorKey.Technology,
    foundedYear: 2019,
    region: 'Zurich & Portland Engineering Studios',
    stage: 'Scale & Stewardship',
    summary:
      'Open-schematic, field-repairable soil telemetry, aquifer monitors, and biologic cold-storage controllers built in recycled aluminum for 15-year lifespans.',
    headlineMetric: '14,200 modular nodes deployed',
    secondaryMetric: '100% published board schematics',
    stewardEquityShare: '16% Employee Engineer Trust',
    governanceLead: 'Lukas Meier, Principal Hardware Architect',
    covenantFocus: 'Full Right-to-Repair; zero mandatory SaaS lock-in',
    operatingThesis:
      'Hardware deployed in muddy fields and rural clinics must be repairable on a local workbench. Arbor publishes circuit schematics and sells replacement sensor cartridges at transparent component margins.',
    auditedOutcomes: [
      {
        metric: '5-Year Field Hardware Survival Rate',
        baseline: '68% Industry Avg',
        current: '97.8%',
        period: '2021–2026',
      },
      {
        metric: 'Mean Time to Field Repair (Local Technician)',
        baseline: '14 days (Factory RMA)',
        current: '22 minutes (Modular Swap)',
        period: '2025 Audit',
      },
      {
        metric: 'Proprietary Telemetry Lock-In Fees',
        baseline: '$480 / yr Industry Avg',
        current: '$0 (Local LoRaWAN)',
        period: 'Permanent Charter',
      },
    ],
  },
  {
    id: 'civicmed-ledger',
    name: 'CivicMed Ledger Systems',
    sector: SectorKey.Technology,
    foundedYear: 2022,
    region: 'Multi-Regional Clinical Infrastructure',
    stage: 'Foundational Build',
    summary:
      'Local-first clinical records, diagnostic imaging archive, and pharmacy inventory software engineered for instant offline continuity and cryptographic patient privacy.',
    headlineMetric: '64 regional clinics & hospitals',
    secondaryMetric: '99.94% offline-capable clinical uptime',
    stewardEquityShare: '15% Engineering & Clinical Advisory Pool',
    governanceLead: 'Nadia Al-Mansoor, Systems Director',
    covenantFocus: 'Cryptographic patient data sovereignty; zero data brokerage',
    operatingThesis:
      'Hospital software should serve clinicians at the bedside rather than insurance middlemen or data brokers. CivicMed synchronizes seamlessly over intermittent links while keeping clinical workstations fast.',
    auditedOutcomes: [
      {
        metric: 'Clinician Administrative Charting Time per Shift',
        baseline: '2.9 hours',
        current: '1.1 hours (-62%)',
        period: '2023–2026',
      },
      {
        metric: 'Unplanned System Downtime During Grid Outages',
        baseline: '18.5 hours / yr',
        current: '0.4 hours / yr (99.94%)',
        period: '2025 Audit',
      },
      {
        metric: 'Third-Party Commercial Data Sharing',
        baseline: 'Prohibited',
        current: '0 Bytes Transferred',
        period: 'Verified 2026 Audit',
      },
    ],
  },
  {
    id: 'helios-microgrid',
    name: 'Helios Microgrid Controllers',
    sector: SectorKey.Technology,
    foundedYear: 2021,
    region: 'Nairobi, Alpine & Rural Western Grids',
    stage: 'Scale & Stewardship',
    summary:
      'Solid-state solar-battery load controllers prioritizing critical clinical refrigeration, surgical lighting, and agricultural cold rooms during grid brownouts.',
    headlineMetric: '140 rural microgrids stabilized',
    secondaryMetric: '15-year warrantied power electronics',
    stewardEquityShare: '17% Field Technician & Engineer Pool',
    governanceLead: 'David Kamau, Chief Power Systems Engineer',
    covenantFocus: 'Non-proprietary battery chemistry support; local technician training',
    operatingThesis:
      'Critical rural clinics and harvest cooling hubs fail when inverter electronics require cloud activation or proprietary battery packs. Helios controllers operate autonomously with any standard LFP or lead-carbon bank.',
    auditedOutcomes: [
      {
        metric: 'Biologic & Vaccine Spoilage Events Due to Power Loss',
        baseline: '7.4 events / yr',
        current: '0.0 events / yr',
        period: '2023–2026',
      },
      {
        metric: 'Diesel Generator Fuel Displacement at Partner Clinics',
        baseline: '100% Baseline',
        current: '14% (-86% diesel burn)',
        period: '2025 Audit',
      },
      {
        metric: 'Certified Regional Technicians Trained & Equipped',
        baseline: '18',
        current: '240 technicians',
        period: '2022–2026',
      },
    ],
  },
];

export const COVENANT_ARTICLES: CovenantArticle[] = [
  {
    number: '01',
    title: 'Permanent Horizon Over Flip Economics',
    clause:
      'Every Homestead Mandate enterprise is capitalized with a minimum 20-to-30-year holding horizon. Leveraged buyouts, debt-funded dividend recapitalizations, and cosmetic pre-sale cost cutting are prohibited in our corporate charter.',
    enforcementMechanism:
      'Supermajority Stewardship Trust veto over any asset divestiture prior to Year 20.',
    auditBenchmark: '0 debt-leveraged recapitalizations since founding in 2014',
  },
  {
    number: '02',
    title: 'Non-Extractive Soil & Clinical Stewardship',
    clause:
      'No agricultural enterprise may distribute cash dividends in any fiscal year where independent soil core audits record net topsoil carbon loss. No health enterprise may link clinician compensation to diagnostic or procedural volume.',
    enforcementMechanism:
      'Mandatory escrow of 20% of operating distributable cash pending annual physical audit.',
    auditBenchmark: '100% of acreage and clinics passed independent 2025 physical audits',
  },
  {
    number: '03',
    title: 'Broad-Based Steward Co-Ownership',
    clause:
      'At least 15% of the voting and dividend-bearing equity in every operating company is held directly by its working nurses, physicians, agronomists, cold-chain operators, and hardware technicians.',
    enforcementMechanism:
      'Non-dilutable Steward Equity Class written into each subsidiary incorporation deed.',
    auditBenchmark: '18.4% weighted average worker & practitioner ownership across portfolio',
  },
  {
    number: '04',
    title: 'Right-to-Repair & Data Sovereignty',
    clause:
      'All field hardware must ship with published repair schematics and standard fasteners. All clinical and agronomic software must operate local-first and never monetize, broker, or train external commercial models on user records.',
    enforcementMechanism:
      'Annual cryptographic and hardware teardown audit published in the Homestead Ledger.',
    auditBenchmark: '100% open field-service documentation; zero third-party data sales',
  },
  {
    number: '05',
    title: 'Proportional Compensation & Whistleblower Sanctuary',
    clause:
      'Total executive compensation within any Homestead subsidiary may not exceed 12 times the median full-time frontline technician, grower, or clinical nurse compensation. Direct anonymous safety and ecological reporting goes straight to the Fiduciary Chancellor.',
    enforcementMechanism:
      'Annual payroll ratio certification required prior to board compensation renewal.',
    auditBenchmark: '8.6x weighted executive-to-median steward pay ratio in 2025',
  },
];

export const AUDIT_LEDGER_ROWS: AuditRow[] = [
  {
    sector: SectorKey.Health,
    enterprisesCount: 5,
    committedCapitalM: 182.4,
    stewardOwnershipPct: 17.2,
    fiveYearOutcome: '-28% hospital readmissions · 412k annual patient visits',
    auditStatus: 'Verified · Q1 2026',
  },
  {
    sector: SectorKey.Agriculture,
    enterprisesCount: 5,
    committedCapitalM: 163.2,
    stewardOwnershipPct: 21.8,
    fiveYearOutcome: '+34% topsoil carbon · -41% cooperative harvest spoilage',
    auditStatus: 'Verified · Q1 2026',
  },
  {
    sector: SectorKey.Technology,
    enterprisesCount: 4,
    committedCapitalM: 134.4,
    stewardOwnershipPct: 16.1,
    fiveYearOutcome: '99.94% rural uptime · 14,200 open-schematic nodes active',
    auditStatus: 'Verified · Q1 2026',
  },
];

export const PARTNER_TESTIMONIALS: PartnerTestimonial[] = [
  {
    quote:
      'Before transitioning our three-generation grain and pulse acreage with Loam & Lineage, annual operating loans forced us into high-input monocropping. Five harvests into a 30-year shared-stewardship lease, our synthetic fertilizer bill is down 74% and our soil holds spring rain through August.',
    author: 'Martin & Clara Halvorsen',
    role: 'Third-Generation Managing Stewards',
    organization: 'Halvorsen Dryland Stewards, Palouse Basin',
    sector: SectorKey.Agriculture,
    outcomeNote: '2,400 acres transitioned · +0.9% soil organic matter gain in 5 years',
  },
  {
    quote:
      'Partnering with Homestead Mandate allowed our physician and midwifery group to open four rural preventative clinics without private-equity billing quotas. Our clinicians spend 35 minutes per patient, and acute emergency referrals among our maternal cohort fell by nearly a third.',
    author: 'Dr. Samuel Osei-Mensah, MD',
    role: 'Chief Medical Officer',
    organization: 'Veridian Regional Clinical Network',
    sector: SectorKey.Health,
    outcomeNote: '4 new clinics launched · 96.4% clinician retention over 4 years',
  },
  {
    quote:
      'When cold-room sensors fail in conventional systems, you wait three weeks for a locked vendor replacement while produce spoils. Arbor’s open-schematic controllers let our local cooperative technician swap a relay cartridge in twenty minutes.',
    author: 'Elena Rostova, PE',
    role: 'Director of Rural Cold-Chain Engineering',
    organization: 'Canopy Cooperative Infrastructure',
    sector: SectorKey.Technology,
    outcomeNote: '22-minute average field repair · Zero harvest loss from telemetry downtime',
  },
];
