export interface CompanyInfo {
  name: string;
  tagline: string;
  brandConcept: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    suite?: string;
  };
  hours: string;
  dispatchHours: string;
  corpId: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  unit?: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  specCode: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  ctaLabel: string;
  badge?: string;
}

export interface FlatRoofSystem {
  id: string;
  name: string;
  chemistry: string;
  astm: string;
  durability: string;
  durabilityDesc: string;
  chemicalResistance: string;
  chemicalDesc: string;
  sri: string;
  sriDesc: string;
  attachment: string[];
  serviceLife: string;
  serviceLifeDesc: string;
  maintenance: string;
}

export interface FlatRoofStage {
  step: string;
  category: string;
  title: string;
  description: string;
  protocolTitle: string;
  protocolDesc: string;
}

export interface CapitalStrategyOption {
  category: string;
  title: string;
  bestSuitedFor: string;
  typicalScope: string;
  facilityDisruption: string;
  capexImpact: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  propertyType: string;
  roofSystem: string;
  size: string;
  timeline: string;
  warranty: string;
  challenge: string;
  approach: string;
  results: string[];
  image: string;
  imageAlt: string;
  complianceRating?: string;
  auditBadge?: string;
}

export interface IndustryItem {
  id: string;
  code: string;
  title: string;
  description: string;
  optimalMatch: string;
  keyNeeds: string[];
  image?: string;
}

export interface WhyProCoreFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface SafetyProtocol {
  title: string;
  description: string;
  metric?: string;
  statusBadge?: string;
  iconName: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  category: string;
  description: string;
  status: string;
  verificationCode?: string;
}

export interface MaintenancePlan {
  id: string;
  name: string;
  tagline: string;
  recommendedFor: string;
  inspectionFrequency: string;
  features: string[];
  deliverables: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  location: string;
  projectType: string;
  squareFootage: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const SITE_CONFIG: CompanyInfo = {
  name: "ProCore Commercial Roofing",
  tagline: "Commercial & Industrial Roofing Services | Nationwide Enterprise Capabilities",
  brandConcept: "Built for Performance. Managed for the Long Term.",
  phone: "(555) 804-CORE",
  phoneRaw: "+15558042673",
  email: "info@procoreroofing.com",
  address: {
    street: "8400 Industrial Parkway",
    suite: "Suite 400",
    city: "Dallas",
    state: "TX",
    zip: "75247",
  },
  hours: "Monday – Friday: 7:00 AM – 6:00 PM CST",
  dispatchHours: "24/7 Nationwide Emergency Field Command",
  corpId: "PC-8842-US",
  primaryCta: "Request a Commercial Quote",
  secondaryCta: "Talk to a Commercial Roofing Specialist",
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Commercial Roofing", href: "/commercial-roofing" },
  { label: "Flat Roofing", href: "/flat-roofing" },
  { label: "Roof Coatings", href: "/roof-coatings" },
  { label: "Maintenance", href: "/maintenance" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries-served" },
  { label: "Safety & Certs", href: "/certifications" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const TRUST_METRICS: Metric[] = [
  {
    value: "20+",
    unit: "Years Active",
    label: "Dedicated Commercial Mastery",
    description: "Over two decades engineered strictly for low-slope enterprise commercial enclosures.",
  },
  {
    value: "500+",
    unit: "Major Specs",
    label: "Commercial Facilities Completed",
    description: "Delivered on schedule, under strict compliance with zero lost-time incidents.",
  },
  {
    value: "10M+",
    unit: "Square Feet",
    label: "Asset Square Footage Managed",
    description: "Continuous weatherproofing oversight spanning multi-state logistics and plant portfolios.",
  },
  {
    value: "24/7",
    unit: "On Standby",
    label: "Emergency Field Dispatch",
    description: "Rapid response mobilization to mitigate active building water intrusion and assets at risk.",
  },
];

export const COMMERCIAL_SERVICES: ServiceItem[] = [
  {
    id: "comm-roofing",
    specCode: "SPEC: SYSTEM-01",
    title: "Commercial Roofing",
    slug: "/commercial-roofing",
    shortDesc:
      "Complete roof installations, complex re-roofing over existing decks, and structural steel corrugated deck replacements for mission-critical industrial envelopes.",
    fullDesc:
      "Engineered commercial roof replacements and new construction installations. We oversee deck structural validation, multi-layer polyiso insulation layouts, and long-term wind uplift mitigation for industrial enterprises.",
    specs: [
      { label: "WARRANTY TIERS", value: "20, 25, 30-YR NDL" },
      { label: "APPLICATIONS", value: "New Build & Tear-Off" },
    ],
    features: [
      "ANSI/SPRI ES-1 Certified Perimeter Metalwork",
      "Factory-authorized installer for Carlisle, GAF Commercial & Elevate",
      "Structural steel and concrete substrate verification pull tests",
      "Tapered insulation drainage design with zero 48-hour ponding guarantee",
    ],
    ctaLabel: "System Specifications",
  },
  {
    id: "flat-roofing",
    specCode: "SPEC: MEMBRANE-02",
    title: "Flat Roofing Systems",
    slug: "/flat-roofing",
    shortDesc:
      "Precision hot-air welded TPO, chemically inert PVC, and heavy-duty EPDM single-ply membrane assemblies engineered for maximum ponding water resistance.",
    fullDesc:
      "Single-ply membrane solutions engineered to withstand extreme weather, chemical exposure, and intense mechanical HVAC rooftop traffic across large industrial footprints.",
    specs: [
      { label: "THICKNESS PROFILES", value: "60-MIL // 80-MIL ULTRA" },
      { label: "ATTACHMENT", value: "Mechanically / Fully Adhered" },
    ],
    features: [
      "Robotic hot-air seam fusion testing",
      "FM Global 1-90 and 1-120 wind uplift assemblies",
      "High solar reflectance (SRI 104+) cooling membranes",
      "FleeceBACK substrate dampening systems",
    ],
    ctaLabel: "Membrane Analytics",
  },
  {
    id: "roof-coatings",
    specCode: "SPEC: COAT-03",
    title: "Roof Coatings",
    slug: "/roof-coatings",
    shortDesc:
      "High-solids silicone, advanced acrylic, and aliphatic polyurethane fluid-applied elastomeric barriers that reflect solar radiation and seal pinholes monolithically.",
    fullDesc:
      "Liquid-applied roof restoration that transforms aged, sound commercial roofs into seamless, highly reflective waterproof shields without costly tear-offs.",
    specs: [
      { label: "SOLAR REFLECTANCE", value: "CRRC > 88% INITIAL" },
      { label: "LIFE EXTENSION", value: "+10 to +20 Years" },
    ],
    features: [
      "100% Silicone and High-Solids Polyurethane chemistry",
      "Seamless liquid membrane over metal seams and single-ply plies",
      "Immediate reduction in building cooling loads and HVAC strain",
      "Eligible for 100% first-year tax write-off under IRS Section 179",
    ],
    ctaLabel: "Coating Diagnostics",
  },
  {
    id: "roof-restoration",
    specCode: "SPEC: RESTORE-04",
    title: "Roof Restoration",
    slug: "/roof-coatings",
    shortDesc:
      "Sustainable, non-invasive remediation protocols that rejuvenate existing metal decks, modified bitumen, and built-up assemblies at up to 50% lower cost than full tear-offs.",
    fullDesc:
      "Targeted restorative engineering that identifies and repairs localized wet insulation cores, reinforces failing perimeter flashings, and encapsulates the substrate.",
    specs: [
      { label: "TAX ADVANTAGE", value: "100% Year-1 OpEx Write-Off" },
      { label: "LANDFILL IMPACT", value: "Zero Tear-off Waste" },
    ],
    features: [
      "Save 40% to 60% compared to complete tear-off operations",
      "Zero disruption to facility interior processes and manufacturing lines",
      "Renewable 10-to-20 year non-prorated manufacturer warranties",
      "Environmentally sustainable cool roof compliance",
    ],
    ctaLabel: "Restoration ROI Model",
  },
  {
    id: "maintenance",
    specCode: "SPEC: MAINT-05",
    title: "Maintenance Programs",
    slug: "/maintenance",
    shortDesc:
      "Structured bi-annual envelope diagnostics, drain flow clearing, flashing resealing, and forensic core sampling to maintain manufacturer NDL warranty compliance.",
    fullDesc:
      "Predictive preventive maintenance agreements that protect capital roofing investments, satisfy manufacturer warranty maintenance covenants, and prevent catastrophic water intrusion.",
    specs: [
      { label: "INSPECTION FREQUENCY", value: "Bi-Annual + Post-Storm" },
      { label: "DOCUMENTATION", value: "Full Photo Log & Portal" },
    ],
    features: [
      "Thermal FLIR infrared moisture scanning",
      "Digital cloud portal with full photographic history and CAD drawings",
      "Priority emergency dispatch within 4 hours",
      "Annual CapEx life-expectancy forecasting for budget planning",
    ],
    ctaLabel: "Service Agreements",
  },
  {
    id: "emergency",
    specCode: "SPEC: RAPID-06",
    title: "Emergency Commercial Roofing",
    slug: "/contact",
    shortDesc:
      "24/7 dedicated rapid strike units deployed immediately to isolate active breaches, deploy water barriers, and prevent stock or equipment ruin in critical warehouse bays.",
    fullDesc:
      "Rapid-response emergency repair crews equipped to handle wind blow-offs, catastrophic equipment punctures, and severe weather damage on commercial low-slope roofs.",
    specs: [
      { label: "SLA DISPATCH", value: "< 4 Hour Window" },
      { label: "STABILIZATION", value: "All-Weather Capable" },
    ],
    features: [
      "24/7 field command phone dispatch",
      "Immediate active leak isolation and temporary water barriers",
      "Comprehensive insurance and engineering documentation",
      "Permanent repair specifications aligned with original warranty terms",
    ],
    ctaLabel: "24/7 Emergency Line",
    badge: "URGENT",
  },
];

export const FLAT_ROOF_SYSTEMS_MATRIX: FlatRoofSystem[] = [
  {
    id: "tpo",
    name: "TPO",
    chemistry: "Thermoplastic Polyolefin",
    astm: "ASTM D6878",
    durability: "High (60-80 mil)",
    durabilityDesc: "Resists mechanical tears, excellent hail deflection with HD board.",
    chemicalResistance: "Moderate",
    chemicalDesc: "Fair resistance to acids; vulnerable to sustained grease/oils without shields.",
    sri: "SRI 102–104",
    sriDesc: "Class-Leading Reflectivity",
    attachment: [
      "Induction Welded (RhinoBond)",
      "Mechanically Fastened",
      "Fully Adhered (FleeceBACK)",
    ],
    serviceLife: "25 – 30+ Yrs",
    serviceLifeDesc: "30-Yr NDL eligible",
    maintenance: "Low. Bi-annual seam inspection and drain clearing protocols.",
  },
  {
    id: "epdm",
    name: "EPDM",
    chemistry: "Ethylene Propylene Diene Monomer",
    astm: "ASTM D4637",
    durability: "Superior Elasticity",
    durabilityDesc: "300%+ elongation absorbs thermal shock and building settling.",
    chemicalResistance: "Moderate",
    chemicalDesc: "Resistant to UV & ozone; low tolerance for animal fats, grease, or petroleum.",
    sri: "SRI 9 (Black)",
    sriDesc: "White EPDM: SRI 84",
    attachment: [
      "Adhered with Bonding Adhesive",
      "Ballasted (River rock / Pavers)",
      "Mechanically Fastened Seams",
    ],
    serviceLife: "30 – 35+ Yrs",
    serviceLifeDesc: "Exceptional lifespan",
    maintenance: "Moderate. Periodic seam tape probe and lap sealant touch-ups.",
  },
  {
    id: "pvc",
    name: "PVC",
    chemistry: "Polyvinyl Chloride (KEE Alloy)",
    astm: "ASTM D4434",
    durability: "High Tensile",
    durabilityDesc: "Internal scrim reinforcement withstands constant roof foot traffic.",
    chemicalResistance: "Superior",
    chemicalDesc: "Grease & Jet Fuel Proof",
    sri: "SRI 95–108",
    sriDesc: "Title 24 Compliant",
    attachment: [
      "Hot-Air Welded Robotic Seams",
      "Fully Adhered with Water-Based",
      "Mechanically Attached",
    ],
    serviceLife: "25 – 30 Yrs",
    serviceLifeDesc: "Permanent weld seams",
    maintenance: "Very Low. Monolithic hot-air welds do not rely on adhesives or tapes.",
  },
  {
    id: "mod-bit",
    name: "Modified Bitumen",
    chemistry: "SBS / APP Multi-Ply",
    astm: "ASTM D6163",
    durability: "Heavy-Duty Puncture",
    durabilityDesc: "Multi-ply redundance; withstands heavy tools and staging gear.",
    chemicalResistance: "Moderate to Good",
    chemicalDesc: "Withstands standing water and chemical fallout better than single-plies.",
    sri: "SRI 70–88",
    sriDesc: "With Bright Granules",
    attachment: [
      "Cold-Applied Adhesive",
      "Heat-Fused Torch Application",
      "Self-Adhesive Peel & Stick",
    ],
    serviceLife: "20 – 25 Yrs",
    serviceLifeDesc: "Expandable via cap re-coat",
    maintenance: "Moderate. Cap granule loss monitoring and flashings maintenance.",
  },
  {
    id: "bur",
    name: "Built-Up Roof (BUR)",
    chemistry: "Tar & Gravel Multi-Layer",
    astm: "ASTM D312",
    durability: "Maximum Redundancy",
    durabilityDesc: "3 to 5 layers of asphalt felt provide impenetrable physical barrier.",
    chemicalResistance: "High Physical Shield",
    chemicalDesc: "Gravel aggregate shields asphalt from ambient chemical and UV degradation.",
    sri: "SRI 15–26",
    sriDesc: "Low without cool coating",
    attachment: [
      "Hot Asphalt Mopping",
      "Cold-Applied Multi-Ply",
      "Gravel Aggregate Surfacing",
    ],
    serviceLife: "30 – 40 Yrs",
    serviceLifeDesc: "Proven century-old tech",
    maintenance: "Moderate-High. Difficult leak tracing under gravel ballast; heavy load.",
  },
];

export const TECHNICAL_DEEP_DIVE_STAGES: FlatRoofStage[] = [
  {
    step: "01",
    category: "STRUCTURAL PREPARATION",
    title: "Substrate & Decking Integrity Analysis",
    description:
      "Prior to insulation layout, our engineering crew assesses structural 22ga fluted steel, post-tensioned concrete, or tongue-and-groove wood substrates. We conduct pull-out fastener resistance tests according to ANSI/SPRI FX-1 to confirm wind uplift ratings up to FM 1-90 and FM 1-120 requirements.",
    protocolTitle: "Key Verification Protocol:",
    protocolDesc: "Substrate Moisture Gravimetric & Core Extraction Analysis (<0.5% max limit)",
  },
  {
    step: "02",
    category: "HYDROLOGY & ENERGY",
    title: "Thermal Polyiso & Tapered Drainage Systems",
    description:
      "Eliminating ponding water is paramount. We engineer multi-plane tapered Polyisocyanurate (Polyiso) insulation crickets and valleys achieving a mandatory minimum 0.25/12 architectural slope to scuppers and internal sumped drains, delivering continuous thermal resistance up to R-36.",
    protocolTitle: "Key Verification Protocol:",
    protocolDesc: "Engineered CAD Drainage Model (Zero standing water past 48 hours)",
  },
  {
    step: "03",
    category: "MEMBRANE FUSION",
    title: "Robotic Hot-Air Welded Seam Verification",
    description:
      "For thermoplastic membranes (TPO/PVC), manual seams introduce human variance. ProCore utilizes self-propelled automated hot-air welding rigs calibrated precisely for ambient temperature, relative humidity, and track speed. Every single linear foot undergoes automated physical seam probe inspection.",
    protocolTitle: "Key Verification Protocol:",
    protocolDesc: "Continuous 1.5\" to 2.0\" Monolithic Fusion Weld (Film-tearing bond test)",
  },
  {
    step: "04",
    category: "PERIMETER REINFORCEMENT",
    title: "ANSI/SPRI ES-1 Edge Metal & Parapet Enclosures",
    description:
      "Over 70% of commercial flat roof failures originate at the roof perimeter during high-wind uplift events. All ProCore fascia, copings, gravel stops, and counterflashings are custom-fabricated in-house from heavy-gauge Kynar 500 pre-finished metal to comply with ANSI/SPRI ES-1 wind uplift guidelines.",
    protocolTitle: "Key Verification Protocol:",
    protocolDesc: "Independent ES-1 Wind Load Tested (Resistant up to 160 MPH wind speeds)",
  },
];

export const CAPITAL_STRATEGY_MATRIX: CapitalStrategyOption[] = [
  {
    category: "FULL ROOF REPLACEMENT",
    title: "Complete Tear-Off to Structural Deck",
    bestSuitedFor:
      "Saturated insulation (>25% of roof area), structural deck oxidation, end-of-life assembly failure.",
    typicalScope:
      "100% removal of existing plies, deck repairs, new vapor barrier, high-R polyiso, and 80-mil membrane.",
    facilityDisruption:
      "Moderate to elevated. Staging crane operations, dumpster staging, rooftop equipment disconnection.",
    capexImpact: "100% CapEx (20-30 Yr Depreciation)",
  },
  {
    category: "ROOF RECOVER / OVERLAY",
    title: "Single-Ply Over Existing Substrate",
    bestSuitedFor:
      "Single existing roof layer in dry condition, structurally sound deck, budget-sensitive renewal.",
    typicalScope:
      "Localized wet-core extraction, high-density cover board installation, induction-welded membrane overlay.",
    facilityDisruption:
      "Minimal. Fast installation without internal facility airborne debris or weather exposure windows.",
    capexImpact: "40%–55% Cost of Full Tear-Off",
  },
  {
    category: "ENGINEERED ELASTOMERIC COATING",
    title: "Seamless Liquid-Applied Membrane",
    bestSuitedFor:
      "Structurally sound membrane nearing end of warranty with sound seams; metal roof seam restoration.",
    typicalScope:
      "High-pressure chemical wash, reinforcement fabric at seams/penetrations, dual-pass 100% silicone or urethane coat.",
    facilityDisruption:
      "Zero internal disruption. No roof penetrations or structural equipment shutdowns required.",
    capexImpact: "100% Tax Deductible (Year 1 OpEx)",
  },
  {
    category: "PREVENTIVE MAINTENANCE (PMP)",
    title: "Proactive Bi-Annual Care Program",
    bestSuitedFor:
      "Active roofs under manufacturer NDL warranty requiring strict compliance to retain coverage.",
    typicalScope:
      "Infrared thermography scan, flashing pitch-pocket replenishment, drain clearance, immediate minor puncture repair.",
    facilityDisruption:
      "None. Non-invasive scheduled inspection passes conducted by certified technicians.",
    capexImpact: "Low Scheduled OpEx Budget",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "PRO-TX-8842",
    title: "Northpoint Distribution Center",
    subtitle: "Austin, TX // Logistics & Warehouse Infrastructure",
    location: "Austin, TX",
    propertyType: "Logistics & Cross-Dock Distribution",
    roofSystem: "80-Mil FleeceBACK TPO Induction Welded",
    size: "180,000 sq. ft.",
    timeline: "28 Days (Zero Downtime)",
    warranty: "30-Year NDL Master",
    challenge:
      "Active 24/7 cross-dock distribution warehouse with 48 bays required a full tear-off and replacement. Zero interior dust or debris could fall on sensitive consumer electronics below, and staging could not block freight tractor-trailer lanes.",
    approach:
      "Engineered an induction-welded FleeceBACK 80-mil TPO system directly over a high-density polyiso cover board. Staging was managed via weekend crane shifts with perimeter safety scaffolding, allowing normal dock operations 24 hours a day.",
    results: [
      "180,000 sq. ft. completed in 28 calendar days with 0 hours of facility downtime",
      "Achieved FM Global 1-105 wind rating with documented 100% automated seam test passes",
      "Building cooling load decreased by an estimated 18% in the first summer quarter",
      "30-Year No Dollar Limit (NDL) warranty issued by manufacturer",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHlFo5giE0mmYpWTRQt2c_aGLevmxGpZY_4UOFv_w5abc-QIfsKiSgiWiEkSbppkBXERrAmx0CEz0CFu-bRO-Yn-C111ZM2_D9nuWQfOppRBP4RWEI58nPWo6vWBmr1HOZ55JrXu_YscCY0zF2KzefWumFgQWG6C1d5L2C1sCG1fxKpNCR6CEy_2iEAuL2iF6VbUaxlHTrW9cBOjkECkTLnrkQD_ws55eWDohQuy0dnrWV4mpWmPat",
    imageAlt:
      "Northpoint Industrial Park Distribution Center flat commercial roof installation aerial view",
    complianceRating: "FM Global 1-105 Wind Load Verified",
    auditBadge: "2024 Audit Pass",
  },
  {
    id: "PRO-IL-7210",
    title: "Apex Precision Dynamics Plant",
    subtitle: "Peoria, IL // Heavy Industrial Manufacturing",
    location: "Peoria, IL",
    propertyType: "Heavy Industrial Manufacturing",
    roofSystem: "Ketone Alloy PVC with Chemical Defense",
    size: "240,000 sq. ft.",
    timeline: "42 Days",
    warranty: "25-Year NDL Chemical Guarantee",
    challenge:
      "High concentrations of airborne industrial machining oils and hot exhaust vents rapidly deteriorated previous rubber membranes, leading to intermittent leaks over CNC tool lines.",
    approach:
      "Installed a fuel-and-chemical resistant DuPont Elvaloy KEE PVC system with fully heat-welded detailing around 114 rooftop exhaust stacks and vibration dampers.",
    results: [
      "Total chemical inertness to machining lubricants and continuous exhaust",
      "Eliminated recurring monthly leak maintenance costs entirely",
      "Zero unplanned stoppages on the client's robotic manufacturing lines",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL7I2Gqg8MC3przkOF-aQt-SkTHXlXs4KGffz1a5vRKjSOsAfvWd0iSQ4yf5BFgash2ZRhdNVb9zaA29m9nZSIl3SmlUSKid4NB4ihakfN92RBZq-RieSbbNYXsBUUQqxSE_1FykAER-DJatSNK6JNQ9KYOqUn0GzzHaRQuYVqC8uXbjWwwP9pM7ynjfNgaxRMbTuTDs3uo6qFEreJb1Euyoy29xFwlwp0IfVt0z_t-dgRMTmTdnmI",
    imageAlt: "Aerial view of manufacturing plant roof installation",
    complianceRating: "UL Class A Fire Rating",
    auditBadge: "Heavy Industrial Certified",
  },
  {
    id: "PRO-NC-4190",
    title: "Piedmont Biomedical Innovation Campus",
    subtitle: "Raleigh, NC // Class-A Healthcare & Labs",
    location: "Raleigh, NC",
    propertyType: "Biomedical & Laboratory Research",
    roofSystem: "Zero-VOC High-Solids Silicone Restoration",
    size: "95,000 sq. ft.",
    timeline: "14 Days",
    warranty: "20-Year Full Labor & Material",
    challenge:
      "Clean-room pharmaceutical laboratories with sensitive HVAC air intakes prohibited asphalt odors, hot-tar emissions, or loud mechanical fastener hammering.",
    approach:
      "Executed a fluid-applied zero-VOC silicone restoration assembly with fabric reinforcement across all existing metal joints and curbs. Work took place during normal lab operational hours.",
    results: [
      "100% odor-free and non-invasive application with zero lab process interruption",
      "Reduced facility peak daytime rooftop surface temperatures by 44°F",
      "Restored seamless waterproofing at 45% of the cost of full replacement",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAd5LX-AVqX_r_NQDYXQNZOSNavB0hr6t0EqdLNMX7sc5hoei3ea94qHZRzatS0AR8sbuc-D9tNPhe26CLuKK-WQQ9cpgihU0ujNWumtxmAIBVXeS3Z751-jmZeKyf7EMhGqUusv0uG1Y5i-xyWdwM7XLVDxPFoDNRV04RwfC1O85F0xX4-1rqG5X9JxDyFfoz6njy1lEsNOMNNqqKmFDciN7EkAJoCMIhF9G6g-3NzJtnhYYDSpSps",
    imageAlt: "Commercial rooftop workers welding seams next to clean industrial chillers",
    complianceRating: "LEED Gold Energy Star Approved",
    auditBadge: "Zero-VOC Clean Standard",
  },
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: "ind-01",
    code: "IND-01",
    title: "Warehouses & Distribution",
    description: "Expansive square footage requiring high thermal R-value insulation and rapid installation.",
    optimalMatch: "TPO Mechanically Attached",
    keyNeeds: [
      "Large-format continuous membrane installation",
      "Dock door vibration and foot traffic endurance",
      "High thermal R-value to lower warehouse HVAC costs",
    ],
  },
  {
    id: "ind-02",
    code: "IND-02",
    title: "Advanced Manufacturing",
    description: "Extreme vibration tolerance, rooftop air handling loads, and heavy penetration sealing.",
    optimalMatch: "Fully Adhered 80-mil PVC",
    keyNeeds: [
      "Resistance to industrial chemicals, grease, and exhaust",
      "Heavy equipment vibration resistance",
      "Penetration flashing for dozens of industrial stacks",
    ],
  },
  {
    id: "ind-03",
    code: "IND-03",
    title: "Class-A Office Buildings",
    description: "Noise abatement during work hours, tenant safety, and premium high-albedo cool roof systems.",
    optimalMatch: "Reflective Multi-Ply Mod-Bit",
    keyNeeds: [
      "Quiet installation during business operations",
      "High solar reflectance index (SRI) for energy certifications",
      "Long-term 25-30 year asset longevity",
    ],
  },
  {
    id: "ind-04",
    code: "IND-04",
    title: "Big-Box Retail & Centers",
    description: "Zero-water-leak tolerance over active merchandise floors and intensive HVAC service traffic.",
    optimalMatch: "Reinforced 60-mil TPO",
    keyNeeds: [
      "Walkway pad protection for frequent HVAC servicing",
      "Zero leak tolerance above retail inventories",
      "Budget optimization across multi-store portfolios",
    ],
  },
  {
    id: "ind-05",
    code: "IND-05",
    title: "Healthcare Facilities",
    description: "Strict VOC regulation, zero asphalt fumes, critical climate control, and non-invasive equipment.",
    optimalMatch: "Zero-VOC Fluid Applied",
    keyNeeds: [
      "Strict zero-VOC and odorless material requirements",
      "24/7 hospital critical operations with zero vibration",
      "Rapid leak containment protocols",
    ],
  },
  {
    id: "ind-06",
    code: "IND-06",
    title: "Hospitality Resorts",
    description: "Aesthetic integration, discreet staging, and durable waterproofing for rooftop lounge zones.",
    optimalMatch: "Paver Overburden + EPDM",
    keyNeeds: [
      "Discreet crane operations and staging out of guest view",
      "Overburden compatibility with pedestals and pavers",
      "Sound dampening during installation",
    ],
  },
  {
    id: "ind-07",
    code: "IND-07",
    title: "Multi-Family Portfolios",
    description: "Phased tenant-conscious replacements across garden-style and mid-rise flat complexes.",
    optimalMatch: "Restorative Silicone Coating",
    keyNeeds: [
      "Phased budget scheduling across multiple properties",
      "Fast turnarounds with minimal tenant parking disruption",
      "CapEx extension via restorative liquid systems",
    ],
  },
  {
    id: "ind-08",
    code: "IND-08",
    title: "Higher Education",
    description: "Accelerated summer break scheduling, complex architectural shapes, and campus safety protocols.",
    optimalMatch: "FleeceBACK TPO Assemblies",
    keyNeeds: [
      "Compressed installation timelines during breaks",
      "Strict pedestrian campus barricades and safety fencing",
      "Durability against hail and violent storm fronts",
    ],
  },
  {
    id: "ind-09",
    code: "IND-09",
    title: "Government & Municipal",
    description: "FAR compliance, prevailing wage payroll alignment, security clearance, and rigid submittals.",
    optimalMatch: "Class 1-90 Fire-Rated Systems",
    keyNeeds: [
      "Strict prevailing wage and FAR compliance reporting",
      "Security clearances for all jobsite personnel",
      "Independent testing laboratory submittals",
    ],
  },
  {
    id: "ind-10",
    code: "IND-10",
    title: "Heavy Industrial",
    description: "Petrochemical exposure, high sulfur emissions, and extreme thermal cyclic fatigue tolerance.",
    optimalMatch: "Heavy Gauge EPDM / Ketone Alloy",
    keyNeeds: [
      "High chemical and acid rain tolerance",
      "Heavy load bearing and tool drop puncture protection",
      "Compatibility with continuous high heat venting",
    ],
  },
];

export const WHY_PROCORE_FEATURES: WhyProCoreFeature[] = [
  {
    title: "Dedicated Project Management",
    description:
      "Single point of contact on-site superintendent coordinating logistics, submittals, and real-time daily shift reporting.",
    iconName: "badge",
  },
  {
    title: "Safety-First Work Practices",
    description:
      "Mandatory OSHA 1926 compliance, full perimeter warning barriers, automated tie-off anchorage, and zero-compromise audits.",
    iconName: "health_and_safety",
  },
  {
    title: "Detailed Inspections",
    description:
      "FLIR infrared thermographic scanning, calibrated electronic leak detection, and core testing without destructive bias.",
    iconName: "thermostat",
  },
  {
    title: "Quality Raw Materials",
    description:
      "Direct factory allocations from premier domestic manufacturers with complete mill test certifications on all fasteners and rolls.",
    iconName: "verified",
  },
  {
    title: "Clear Portal Communication",
    description:
      "Cloud portal access providing facility directors live weather tracking, automated milestone sign-offs, and HD photographic logs.",
    iconName: "hub",
  },
  {
    title: "Preventive Maintenance",
    description:
      "Proactive life-extension servicing that arrests structural degradation early to preserve high-dollar asset lifecycle targets.",
    iconName: "build_circle",
  },
  {
    title: "Minimal Business Disruption",
    description:
      "Strategic off-peak staging, odor abatement techniques, and perimeter acoustic dampening to safeguard ongoing commercial operations.",
    iconName: "volume_off",
  },
  {
    title: "Long-Term Roofing Strategy",
    description:
      "Multi-year CapEx forecasting, phased regional rollout plans, and comprehensive 10 to 30-year No Dollar Limit (NDL) warranty options.",
    iconName: "trending_up",
  },
];

export const SAFETY_PROTOCOLS: SafetyProtocol[] = [
  {
    title: "100% Tie-Off Mandate",
    description:
      "Strict passive perimeter guarding paired with engineered cable lifelines on every edge over 6 feet elevation.",
    statusBadge: "MANDATORY",
    iconName: "handyman",
  },
  {
    title: "OSHA VPP Star Level",
    description:
      "Site safety managers carry OSHA 30-hour cards; crews undergo weekly site-specific tailgate hazard training.",
    statusBadge: "100%",
    iconName: "assignment_turned_in",
  },
  {
    title: "ISNetworld & Avetta Approved",
    description:
      "Maintaining grade 'A' compliance badges across national contractor prequalification databases and networks.",
    statusBadge: "ACTIVE",
    iconName: "fact_check",
  },
  {
    title: "EMR Rating < 0.75",
    description:
      "Our Experience Modification Rate consistently outperforms industry safety averages by more than 25%.",
    statusBadge: "VERIFIED",
    iconName: "analytics",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "NRCA Master Contractor",
    issuer: "National Roofing Contractors Association",
    category: "Industry Leadership",
    description: "Highest tier of professional credentialing demonstrating verified craft competency, financial stability, and safety track record.",
    status: "ACTIVE",
    verificationCode: "NRCA-MC-9941",
  },
  {
    title: "Carlisle SynTec ESP Master Applicator",
    issuer: "Carlisle Construction Materials",
    category: "Manufacturer Master Tier",
    description: "Certified to install and issue 30-Year No Dollar Limit (NDL) manufacturer warranties across all single-ply Sure-Weld TPO & EPDM assemblies.",
    status: "ELITE TIER",
    verificationCode: "CCM-ESP-2024",
  },
  {
    title: "GAF Commercial Master Select™",
    issuer: "GAF Commercial Solutions",
    category: "Manufacturer Master Tier",
    description: "Elite commercial contractor status authorized to deliver GAF Diamond Pledge™ NDL warranties with factory-inspected QA sign-offs.",
    status: "MASTER SELECT",
    verificationCode: "GAF-CMS-883",
  },
  {
    title: "Elevate™ Red Shield Master Contractor",
    issuer: "Holcim Elevate Building Products",
    category: "Manufacturer Master Tier",
    description: "Direct authorization for Elevate UltraPly TPO and RubberGard EPDM systems with extended wind and puncture riders.",
    status: "RED SHIELD MASTER",
    verificationCode: "ELV-RSM-441",
  },
  {
    title: "ANSI/SPRI ES-1 Certified Metal Fabricator",
    issuer: "ANSI / SPRI Standards Institute",
    category: "Wind Uplift & Engineering",
    description: "In-house architectural sheet metal fabrication facility certified for ES-1 testing compliance up to 160 MPH wind speeds.",
    status: "VERIFIED",
    verificationCode: "ES1-FAB-2024",
  },
  {
    title: "ISO 9001:2015 Quality Management",
    issuer: "International Organization for Standardization",
    category: "Process Quality",
    description: "Systematic auditing of installation procedures, material traceability, core sampling, and customer delivery standards.",
    status: "AUDITED",
    verificationCode: "ISO-QM-7730",
  },
];

export const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    id: "essential",
    name: "Essential PMP",
    tagline: "Baseline Warranty Compliance",
    recommendedFor: "Newer commercial roofs (1-5 years old) under active manufacturer warranty.",
    inspectionFrequency: "Bi-Annual Scheduled Passes (Spring & Autumn)",
    features: [
      "Bi-annual 50-point visual field & perimeter inspection",
      "Full clearing of interior drains, scuppers, and downspouts",
      "Visual seam probe across all primary field welds",
      "Inspection of all rooftop HVAC pitch pockets and boots",
      "Cloud portal access with photographic compliance audit",
    ],
    deliverables: [
      "Annual Manufacturer Warranty Compliance Certificate",
      "High-resolution digital defect log with GPS coordinates",
      "Priority 8-hour emergency dispatch queue",
    ],
  },
  {
    id: "professional",
    name: "Professional PMP",
    tagline: "Most Popular // Multi-Asset Fleet Care",
    recommendedFor: "Commercial facilities (5-15 years old) and high-value distribution centers.",
    inspectionFrequency: "Bi-Annual Scheduled + Post-Severe Storm Audits",
    isPopular: true,
    features: [
      "Everything included in Essential PMP",
      "Post-severe hail / high-wind event rapid inspection passes",
      "Infrared thermographic moisture scan of high-risk sectors",
      "Immediate on-the-spot caulking and mastic touch-ups included",
      "Minor puncture repairs (up to 5 per visit included)",
      "Detailed 5-year CapEx budget forecasting dossier",
    ],
    deliverables: [
      "FLIR infrared thermographic moisture anomaly map",
      "Dedicated account manager & direct superintendent line",
      "Guaranteed 4-hour emergency response SLA",
    ],
  },
  {
    id: "comprehensive",
    name: "Enterprise Comprehensive",
    tagline: "Total Envelope Lifecycle Risk Transfer",
    recommendedFor: "Mission-critical plants, cold storage, hospitals, and enterprise portfolios.",
    inspectionFrequency: "Quarterly Comprehensive + 24/7 Automated Monitoring",
    features: [
      "Everything included in Professional PMP",
      "Quarterly technical inspections with non-destructive core tests",
      "100% covered labor for minor preventative patch work",
      "Annual drone photogrammetry and CAD elevation updates",
      "Structural steel fastener pull resistance re-verification",
      "HVAC contractor coordination and walkpad maintenance",
    ],
    deliverables: [
      "Full enterprise portfolio dashboard with live risk indices",
      "Guaranteed 2-hour emergency dispatch with on-site containment",
      "Direct executive engineering review and board-ready CapEx models",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "ProCore executed an 80-mil TPO replacement on our 350,000 sq. ft. logistics hub without interrupting a single outbound freight delivery. Their seam testing rig and daily CAD logs gave our asset board complete confidence.",
    author: "Marcus Reynolds",
    title: "Senior Director of Facilities",
    company: "Lone Star Logistics Network",
    location: "Dallas-Fort Worth, TX",
    projectType: "350,000 Sq. Ft. TPO Replacement",
    squareFootage: "350,000 sq. ft.",
  },
  {
    quote:
      "When previous contractors struggled with airborne solvent vapors affecting our cleanrooms, ProCore engineered an odorless silicone restoration that extended our roof lifecycle by 15 years at half the cost of tear-off.",
    author: "Elena Rostova",
    title: "VP of Physical Plant & Operations",
    company: "BioApex Life Sciences",
    location: "Raleigh, NC",
    projectType: "Fluid-Applied Silicone Restoration",
    squareFootage: "120,000 sq. ft.",
  },
  {
    quote:
      "Their Preventative Maintenance Program saved us hundreds of thousands in internal inventory damage during last year's hail front. Their team was on our roof within two hours of dispatch.",
    author: "David Chen",
    title: "Regional Plant Infrastructure Manager",
    company: "Vanguard Precision Machining",
    location: "Peoria, IL",
    projectType: "Enterprise Maintenance & Emergency Strike",
    squareFootage: "420,000 sq. ft. Fleet",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What is the difference between a manufacturer NDL warranty and a contractor workmanship warranty?",
    answer:
      "A No Dollar Limit (NDL) warranty is issued directly by the material manufacturer (such as Carlisle, GAF, or Elevate) after an independent factory technical inspection. It covers 100% of the replacement labor and material costs if the roof leaks due to material defect or installer craftsmanship failure, without any financial cap. ProCore holds Master Applicator credentials allowing us to provide up to 30-Year NDL coverage.",
    category: "Warranties",
  },
  {
    question: "Can we install a new flat roof over our existing commercial roof without a full tear-off?",
    answer:
      "Building codes (IBC Section 1511) typically permit up to two roof systems on a single commercial structure, provided the existing substrate is structurally sound and free from trapped moisture. ProCore performs non-destructive infrared moisture scans and core samplings to verify whether a single-ply overlay or liquid elastomeric restoration is viable, saving up to 50% of the cost of a complete tear-off.",
    category: "Technical",
  },
  {
    question: "How does ProCore prevent business disruption during warehouse or manufacturing roof replacements?",
    answer:
      "We build a customized site logistics plan before staging. This includes coordinating crane hoists during low-traffic off-peak hours, implementing strict odor-mitigation procedures, deploying interior safety catch nets over active production lines, and utilizing induction-welded fastening that generates zero interior fastener debris.",
    category: "Operations",
  },
  {
    question: "What is an SRI rating, and how does it affect our facility's energy consumption?",
    answer:
      "Solar Reflectance Index (SRI) measures a roof membrane's ability to reject solar heat. Traditional dark roofs register an SRI around 9, absorbing extreme solar heat that drives up cooling loads and rooftop chiller stress. ProCore's bright white TPO and silicone coatings feature SRI ratings of 102–108, reducing peak rooftop surface temperatures by up to 60°F and decreasing summer cooling energy consumption by 15% to 25%.",
    category: "Energy",
  },
  {
    question: "How quickly does ProCore respond to commercial emergency leaks?",
    answer:
      "ProCore operates a dedicated 24/7 Field Command dispatch center. For facility managers under our Preventative Maintenance Program, our rapid strike units arrive on-site with temporary water containment equipment within a guaranteed 2 to 4-hour SLA window.",
    category: "Emergency",
  },
];
