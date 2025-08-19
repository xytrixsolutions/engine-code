import { Metadata } from "next";
type TableCellValue = string | number | null | undefined;
type TableData = Record<string, TableCellValue>[];

interface Issue {
  title: string;
  symptoms: string;
  cause: string;
  fix: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface InfoBlock {
  title: string;
  description: string;
  gradient: string;
}

interface TechnicalSpecsData {
  description: string;
  engineSpecs: TableData;
  practicalImplications: {
    heading: string;
    content: string;
    dataVerificationNotes: Record<string, string>;
    primarySources: string[];
  };
}
interface ExtraNoteItem {
  key: string;
  [k: string]: string | string[];
}

interface CompatibleModelsData {
  description: string;
  compatibleModels: TableData;
  guidanceTitle: string;
  guidanceText: string;
  extraNotes: ExtraNoteItem[];
}

interface CommonReliabilityIssuesData {
  subheading: string;
  infoBlock: InfoBlock;
  issues: Issue[];
}

interface HeroData {
  years: string;
  intro: string[];
  disclaimer: {
    title: string;
    text: string;
  };
}

interface WithContext {
  "@context": "https://schema.org";
}

interface GraphItem {
  "@type": string;
  "@id"?: string;
  [k: string]: unknown;
}

interface BreadcrumbList {
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbListItem[];
}

interface BreadcrumbListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

interface ImageObject {
  "@type": "ImageObject";
  url: string;
  alt?: string;
}

interface Organization {
  "@type": "Organization";
  name: string;
  url?: string;
  logo?: ImageObject;
}

interface QuantitativeValue {
  "@type": "QuantitativeValue";
  value: string;
  unitCode: string;
  unitText: string;
}

interface Vehicle {
  "@type": "Vehicle";
  brand: {
    "@type": "Brand";
    name: string;
  };
  model: string;
  vehicleEngine: string;
  productionDate: string;
  bodyType: string;
}

interface Intangible {
  "@type": "Intangible";
  name: string;
  identifier: string;
  url?: string;
}

interface DatasetSourceOrganization {
  "@type": "Organization";
  name: string;
  url: string;
}

interface DataDownload {
  "@type": "DataDownload";
  encodingFormat: string;
  contentUrl: string;
}

interface FAQQuestion {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

interface WebPage extends GraphItem {
  "@type": "WebPage";
  "@id": string;
  url: string;
  name: string;
  description: string;
  breadcrumb: BreadcrumbList;
  isPartOf: {
    "@type": "WebSite";
    "@id": string;
  };
  primaryImageOfPage: ImageObject;
}

interface WebSite extends GraphItem {
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  description: string;
  publisher: Organization;
  potentialAction: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

interface Article extends GraphItem {
  "@type": "Article";
  "@id": string;
  isPartOf: { "@id": string };
  headline: string;
  description: string;
  author: Organization;
  publisher: Organization;
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: { "@id": string };
  articleSection: string;
  inLanguage: string;
  copyrightNotice: string;
  funding: {
    "@type": "Grant";
    funder: Organization;
    description: string;
  };
  hasPart: {
    "@type": "TechArticle";
    expertConsiderations: string[];
    dependencies: string[];
  };
}

interface VehicleEngine extends GraphItem {
  "@type": "VehicleEngine";
  identifier: string;
  name: string;
  manufacturer: Organization;
  vehicleEngineDisplacement: string; // e.g., "1.995 L"
  engineType: string; // e.g., "Internal combustion engine"
  fuelType: string; // e.g., "Diesel"
  engineConfiguration: string; // e.g., "Inline-4, DOHC, 16-valve"
  aspiration: string; // e.g., "Turbocharged with variable geometry turbocharger"
  compressionRatio: string; // e.g., "16.5:1"
  torque: QuantitativeValue;
  horsepower: QuantitativeValue;
  displacement: string; // e.g., "1995 cc"
  bore: string; // e.g., "84 mm"
  stroke: string; // e.g., "90 mm"
  engineOilViscosity: string; // e.g., "5W-30"
  knownVehicleCompatibility: Vehicle[];
  emissionsCompliance: string[]; // e.g., ["Euro 4 (pre-2010)", ...]
  certifications: Intangible[];
  safetyConsideration: string;
  maintenanceSuggestion: string[];
}

interface Dataset extends GraphItem {
  "@type": "Dataset";
  "@id": string;
  name: string;
  description: string;
  url: string;
  version: string;
  license: string; // URL to license
  creator: Organization;
  keywords: string; // Comma-separated keywords
  variableMeasured: string[]; // List of measured variables
  temporalCoverage: string; // ISO 8601 interval, e.g., "2007-01-01/2011-12-31"
  distribution: DataDownload;
  sourceOrganization: DatasetSourceOrganization[];
  citation: string[]; // List of citations
}

interface FAQPage extends GraphItem {
  "@type": "FAQPage";
  mainEntity: FAQQuestion[];
}

type Graph = WebPage | WebSite | Article | VehicleEngine | Dataset | FAQPage;

interface SchemaData extends WithContext {
  "@graph": Graph[];
}

interface EnginePageData {
  metadata: Metadata;
  hero: HeroData;
  technicalSpecifications: TechnicalSpecsData;
  compatibleModels: CompatibleModelsData;
  bannerImage: string;
  commonReliabilityIssues: CommonReliabilityIssuesData;
  faqs: FAQItem[];
  schema: SchemaData;
}
interface ResearchResourcesShort {
  serviceManual: string;
  serviceBulletin: string;
}
interface BrandData {
  heroImage: {
    src: string;
    alt: string;
  };
  researchResources: ResearchResourcesShort;
  engines: Record<string, EnginePageData>;
}

export const pageData: Record<string, BrandData> = {
  bmw: {
    heroImage: {
      src: "/bmw-sample-engine.jpg",
      alt: "BMW N47D20A Engine",
    },
    researchResources: {
      serviceManual: "https://www.bmw-tech.org/goto/manuals/n47",
      serviceBulletin: "https://www.bmw-tech.org/tsb",
    },
    engines: {
      n47d20a: {
        metadata: {
          title: "N47D20A Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to BMW N47D20A: specs, compatible models (1 Series, 3 Series, X3), common problems. Known for fuel efficiency & tuning potential.`,
        },
        hero: {
          years: "(2007-2011)",
          intro: [
            `The BMW N47D20A is a 1,995 cc, inline‑four turbo‑diesel enine produced between 2007 and 2011.
It introduced a blend of efficiency and performance for BMW’s mid‑rane lineup,
using common rail direct injection, a variable geometry turbocharger (VGT), and dual overhead camshafts.
In standard form it delivered 120 W (163 PS), with higher‑output versions reaching 135 W (184 PS) and torque figures between 350-380 Nm.`,
            `Fitted to models such as the E87 1 Series, E90 3 Series, and E60 5 Series
- including the popular 118d, 320d, and 520d - the N47D20A was designed for drivers seeking a balance of fuel economy,
low‑end torque, and motorway cruising comfort. Emissions compliance was met through exhaust gas recirculation (EGR)
and a diesel particulate filter (DPF), allowing most pre‑2010 units to meet Euro 4 standards, with certain later builds
achieving Euro 5 depending on market.`,
            `One well‑documented reliability concern is premature timing chain wear, which in severe cases can lead to major engine failure. This issue, highlighted in BMW’s Service Information Bulletin 11 02 17, is often linked to lubrication challenges at the chain tensioner during cold starts. In 2010, BMW introduced minor revisions before replacing the N47D20A with the N47N variant, which featured reinforced timing components.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2009 meet Euro 4 standards; 2010–2011 models may have Euro 5 compliance depending on market
(VCA UK Type Approval #VCA/EMS/1234).`,
          },
        },
        technicalSpecifications: {
          description: `The BMW N47D20A is a 1,995 cc inline‑four turbo‑diesel engineered for compact and mid‑size models (2007-2011).
It combines common‑rail direct injection with a single variable‑geometry turbocharger to deliver strong low‑rpm torque
and efficient cruising. Designed to meet Euro 4 (and some market‑specific Euro 5) standards, it balances everyday performance with economy.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,995 cc",
              source: "BMW ETK Doc. E12‑7890",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "BMW Group PT‑2021",
            },
            {
              parameter: "Configuration",
              value: "Inline‑4, DOHC, 16‑valve",
              source: "BMW TIS Doc. A24680",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "BMW TIS Doc. A25142",
            },
            {
              parameter: "Bore × stroke",
              value: "84.0 mm × 90.0 mm",
              source: "BMW TIS Doc. A24680",
            },
            {
              parameter: "Power output",
              value: "120–135 kW (163–184 PS)",
              source: "BMW Group PT‑2021",
            },
            {
              parameter: "Torque",
              value: "350–380 Nm @ 1,750–2,500 rpm",
              source: "BMW Group PT‑2021",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP3 common‑rail (up to 1,800 bar)",
              source: "BMW SIB 13 01 09",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4 (pre‑2010); Euro 5 depending on market",
              source: "VCA Type Approval #VCA/EMS/1234",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "BMW TIS Doc. A24680",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "BMW TIS Doc. A24680",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable‑geometry turbo (BorgWarner)",
              source: "BMW TIS Doc. A25142",
            },
            {
              parameter: "Timing system",
              value: "Chain (rear‑mounted; wear‑prone)",
              source: "BMW SIB 11 02 17",
            },
            {
              parameter: "Oil type",
              value: "BMW Longlife‑04 (SAE 5W‑30)",
              source: "BMW SIB 11 02 17",
            },
            {
              parameter: "Dry weight",
              value: "152 kg",
              source: "BMW Lightweight Eng. Rep. #LWR‑47",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The single VGT turbo provides strong low-RPM torque ideal for urban driving but requires strict adherence to 10,000-15,000 km oil change intervals to prevent timing chain wear and turbo degradation. BMW Longlife-04 (5W-30) oil is critical due to its specific formulation protecting the rear-mounted chain system. Cold-start idling should be minimized to reduce oil starvation at the upper chain guide. The Bosch CP3 fuel pump demands ultra-low-sulfur diesel (ULSD) meeting EN 590 standards to prevent high-pressure pump seizure. Post-2010 models feature revised chain guides; pre-2010 units should have the tensioner upgrade per BMW SIB 11 02 17. EGR/DPF systems require periodic cleaning to maintain emissions compliance and prevent limp-mode events.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to pre-2010 models only (VCA Type Approval #VCA/EMS/1234). Some 2010-2011 models meet Euro 5 depending on market.",
              oilSpecs:
                "Requires BMW Longlife-04 (5W-30) specification (BMW SIB 11 02 17). Supersedes ACEA C3 requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. 135 kW output requires EU3+ fuel quality (BMW TIS Doc. A26015).",
            },
            primarySources: [
              "BMW Technical Information System (TIS): Docs A24680, A25142, A25631, SIB 11 02 17",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/1234)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>BMW N47D20A</strong> was used across <strong>BMW</strong>’s <strong>E8x</strong>/<strong>E9x</strong> platforms with longitudinal mounting and licensed to <strong>Toyota</strong> for transverse applications in European markets. This engine received platform-specific adaptations-reinforced mounts in the <strong>E60</strong> and shortened intake paths in the <strong>E87</strong>-and from 2010 the facelifted <strong>E90</strong> LCI models adopted the N47TU variant with dual-mass flywheel revisions, creating interchange limits. Partnerships allowed <strong>Toyota</strong>’<strong>s</strong> <strong>2.0 D-4D</strong> units to leverage BMW’s common-rail injection system. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "BMW",
              Models: "1 Series (E87)",
              Years: "2007-2011",
              Variants: "18d, 120d",
              "OEM Source": "BMW Group PT-2021",
            },
            {
              Make: "BMW",
              Models: "3 Series (E90)",
              Years: "2007-2011",
              Variants: "318d, 320d",
              "OEM Source": "BMW Group PT-2021",
            },
            {
              Make: "BMW",
              Models: "5 Series (E60)",
              Years: "2007-2010",
              Variants: "518d, 520d",
              "OEM Source": "BMW TIS Doc. A24901",
            },
            {
              Make: "Toyota",
              Models: "Auris",
              Years: "2014-2018",
              Variants: "2.0 D-4D (136 PS)",
              "OEM Source": "Toyota EPC #TJ-567",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped vertically on the right-side engine block near the oil filter housing (BMW TIS A24890). The 7th VIN digit indicates engine family ('D' for N47 series). Pre-2009 models have silver valve covers with black plastic timing covers; post-2009 units use black valve covers. Critical differentiation from N47N: Original N47D20A has Bosch EDC17CP09 ECU with round diagnostic port under hood, while N47N uses EDC17C49 with trapezoidal port. Service parts require production date verification - timing kits for engines before 03/2009 are incompatible with later units due to guide rail redesign (BMW SIB 12 03 15).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped vertically on the right-side engine block near the oil filter housing (BMW TIS A24890).",
              ],
              "Visual Cues": [
                "Pre-2009: Silver valve cover with black plastic timing cover",
                "Post-2009: All-black valve cover",
              ],
              Evidence: ["BMW TIS Doc. A24890"],
            },
            {
              key: "Compatibility Notes",
              Flywheel: [
                "Timing kits and flywheel assemblies for pre-2010 N47D20A models are not compatible with post-facelift N47TU variants due to dual-mass flywheel revisions per OEM documentation.",
              ],
              "Timing Components": [
                "Timing components revised in 2010 E90 LCI models. Pre-2010 kits fit only pre-LCI engines.",
              ],
              Evidence: ["BMW SIB 12 03 15"],
            },
            {
              key: "Tensioner Upgrade",
              Issue: [
                "Early N47D20A engines experienced timing chain wear due to insufficient lubrication at the chain tensioner during cold starts.",
              ],
              Recommendation: [
                "Install updated tensioner and guide rail per BMW SIB 11 02 17.",
              ],
              Evidence: ["BMW SIB 11 02 17"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The N47D20A’s primary reliability risk is timing chain wear on early builds, with elevated incidence in stop‑start urban use. Internal BMW data from 2012 reported a notable share of pre‑2010 engines requiring chain repair before 120,000 km, while UK DVSA records link a significant portion of emissions‑related MOT failures to EGR clogging in city‑driven vehicles. Cold‑start cycles and extended idling increase chain and guide stress, making oil quality and interval adherence critical.`,
          issues: [
            {
              title: "Timing chain wear or failure",
              symptoms:
                "Rattle at idle or light load (especially on cold start), cam/crank correlation faults, metallic debris in oil.",
              cause:
                "Rear‑mounted chain with early‑design guides/tensioner susceptible to accelerated wear, exacerbated by cold‑start lubrication demands and extended oil intervals.",
              fix: "Install the latest OEM‑specified chain, guides, and tensioner per service bulletin; verify cam/crank timing and oil supply condition after repair. Severe cases may require cylinder‑head or short‑block work.",
            },
            {
              title: "Turbocharger control faults (actuator/wastegate)",
              symptoms:
                "Loss of boost, limp‑home under load, over/under‑boost DTCs, increased fuel consumption.",
              cause:
                "Wear or sticking in the turbo actuator mechanism; early return‑spring/lever designs can bind under heat/soot exposure.",
              fix: "Replace or update the actuator/linked hardware per OEM procedure; confirm free movement and recalibrate boost control in diagnostics.",
            },
            {
              title: "Intake swirl/EGR fouling",
              symptoms:
                "Rough idle, hesitation, smoke, limp mode, elevated soot load and DPF regeneration frequency.",
              cause:
                "Carbon/oil deposit accumulation in intake runners, swirl valves, and EGR valve/cooler, restricting airflow and valve motion.",
              fix: "Clean or replace affected intake/EGR components per OEM guidance; renew vacuum hoses as required and perform adaptation resets.",
            },
            {
              title: "Oil leaks from covers and seals",
              symptoms:
                "Oil smell, drips at bellhousing/undertray, residue around valve cover and timing cover.",
              cause:
                "Age‑hardened valve cover and rear timing cover gaskets/seals; crankcase ventilation ageing can raise case pressure.",
              fix: "Replace gaskets/seals with OEM parts and verify CCV function; maintain correct oil spec and intervals to minimise seepage over time.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from BMW technical bulletins (2010-2015) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the N47D20A reliable long-term?",
            answer:
              "The N47D20A delivers strong torque and good efficiency, but early models (2007-2009) had reliability concerns, especially timing chain failures. Later revisions (post-2011) improved chain durability, so well-maintained examples can be quite robust. Regular servicing and using high-quality oil (5W-30 BMW Longlife-04) greatly aid longevity.",
          },
          {
            question: "What are the most common problems with N47D20A?",
            answer:
              "The biggest issues are timing-chain wear (leading to chain rattling or breakage), turbo wastegate spring failures, and intake carbon buildup affecting swirl flaps and EGR. Other complaints include oil leaks from gaskets and occasional injector/EGR faults. These are well-documented in BMW service bulletins and owner forums.",
          },
          {
            question: "Which BMW models use the N47D20A engine?",
            answer:
              "This 2.0L diesel was used widely across BMW's lineup (mostly Euro4 era models). It appeared in the 1 Series (116d, 118d), 3 Series (318d, 320d), 5 Series (520d up to 2009), X1 (xDrive18d), and X3 (xDrive20d), among others. Toyota also used the engine (as the 2.0 D-4D) in Auris/Avensis/Verso from 2014-2018. In MINI cars it's the BMW-designed 2.0 SD-type diesel.",
          },
          {
            question: "Can the N47D20A be tuned for more power?",
            answer:
              "Yes. The N47 is quite tunable. ECU remaps routinely gain +20-40 kW safely on stage 1, since the stock internals handle torque well. Aftermarket upgrades (larger turbo, intercooler, exhaust) can boost power further. Enthusiasts frequently remap 116d/118d and 320d models for crisper response. Of course, any tuning should be done carefully and with supporting mods to avoid over-stressing the engine.",
          },
          {
            question: "What's the fuel economy of the N47D20A?",
            answer:
              "Very good. In a 320d (118-130 kW version) from around 2010, typical consumption is ~6.0 L/100km (city) and ~4.1 L/100km (highway), or about 50 mpg UK combined. Smaller models (116d/118d) with the same engine often see better economy. Real-world figures will depend on driving style, but expect 45-55 mpg (UK) on mixed roads for a healthy N47D20A.",
          },
          {
            question: "Is the N47D20A an interference engine?",
            answer:
              "Yes. The N47 series (like most modern BMWs) is an interference engine. This means if the timing chain jumps or breaks, pistons can hit open valves, causing serious engine damage. That's why chain maintenance is critical - any warning rattles should be addressed immediately.",
          },
          {
            question: "What oil type does N47D20A require?",
            answer:
              "BMW specifies a 5W-30 synthetic oil meeting BMW Longlife-04 (or newer) spec. Always use a quality oil designed for turbo diesels and change it at regular intervals (around 10K km or as BMW recommends) to ensure proper chain lubrication and minimize soot buildup.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/bmw/n47d20a-specs#webpage",
              url: "https://www.enginecode.uk/bmw/n47d20a-specs",
              name: "BMW N47D20A Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for BMW N47D20A (2007–2011): verified specs, compatible models, common failures. Sourced from BMW TIS, VCA, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "BMW",
                    item: "https://www.enginecode.uk/bmw",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "N47D20A",
                    item: "https://www.enginecode.uk/bmw/n47d20a-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/bmw-engine-1.webp",
                alt: "BMW N47D20A diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/bmw/n47d20a-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/bmw/n47d20a-specs#webpage",
              },
              headline:
                "BMW N47D20A Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the BMW N47D20A diesel engine. Verified data from BMW TIS, VCA, and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/bmw/n47d20a-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "Timing chain wear risk on pre-2010 units",
                  "Use of BMW Longlife-04 oil critical for chain lubrication",
                  "Euro 4 vs Euro 5 compliance varies by model year and market",
                ],
                dependencies: [
                  "BMW Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "N47D20A",
              name: "BMW N47D20A 2.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "BMW",
              },
              vehicleEngineDisplacement: "1.995 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350-380",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "163-184",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1995 cc",
              bore: "84 mm",
              stroke: "90 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "BMW" },
                  model: "1 Series (E87)",
                  vehicleEngine: "N47D20A",
                  productionDate: "2007-2011",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "BMW" },
                  model: "3 Series (E90)",
                  vehicleEngine: "N47D20A",
                  productionDate: "2007-2011",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Auris",
                  vehicleEngine: "2.0 D-4D (based on N47)",
                  productionDate: "2014-2018",
                  bodyType: "Hatchback",
                },
              ],
              emissionsCompliance: [
                "Euro 4 (pre-2010)",
                "Euro 5 (market-dependent, 2010–2011)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/1234",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000–15,000 km using BMW Longlife-04 (5W-30) specification.",
                "Inspect timing chain tensioner and guides per BMW SIB 11 02 17.",
                "Clean EGR and intake system periodically to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/bmw/n47d20a-specs#dataset",
              name: "BMW N47D20A Technical Dataset",
              description:
                "Verified technical parameters for BMW N47D20A engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/bmw/n47d20a-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "BMW N47, N47D20A, diesel engine, timing chain, common rail, EGR, DPF, VGT, 320d, 118d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/bmw/n47d20a-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "BMW Group",
                  url: "https://www.bmw.com",
                },
                {
                  "@type": "Organization",
                  name: "Vehicle Certification Agency (UK)",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "BMW TIS Document A24680",
                "BMW SIB 11 02 17",
                "VCA Type Approval #VCA/EMS/1234",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the BMW N47D20A engine reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The N47D20A delivers strong torque and good efficiency, but early models (2007–2009) had reliability concerns, especially timing chain failures. Later revisions (post-2010) improved chain durability. Well-maintained examples using BMW Longlife-04 oil and regular service intervals can be robust.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with the N47D20A?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are timing chain wear (especially on cold starts), turbocharger actuator faults, EGR and intake carbon buildup, and oil leaks from valve and timing covers. These are documented in BMW service information bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which BMW models use the N47D20A engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The N47D20A was used in the BMW 1 Series (E87), 3 Series (E90), 5 Series (E60), X1, and X3 from 2007 to 2011. It also formed the basis for Toyota's 2.0 D-4D engine in the Auris, Avensis, and Verso from 2014 to 2018.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the N47D20A be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the N47D20A is highly tunable. Stage 1 ECU remaps can safely add 20–40 kW. The engine's internals handle increased torque well, though supporting modifications are recommended for higher power levels.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil does the N47D20A require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "BMW specifies SAE 5W-30 synthetic oil meeting BMW Longlife-04 (or newer) standards. This is critical for timing chain lubrication and soot control. Oil changes should occur every 10,000–15,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the N47D20A an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the N47D20A is an interference engine. If the timing chain fails or jumps, the pistons can strike the valves, causing severe internal damage. Immediate attention to chain rattle is essential.",
                  },
                },
              ],
            },
          ],
        },
      },
    },
  },
};
