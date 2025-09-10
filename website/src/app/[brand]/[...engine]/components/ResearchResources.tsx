import Container from "@/components/Container";
import { H1, SH } from "@/components/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  FileText,
  Globe,
  Info,
  Shield,
  ExternalLink,
} from "lucide-react";

interface ResearchResourcesProps {
  brand: string;
  researchResources: ResearchResourcesShort;
}

export default function ResearchResources({
  brand,
  researchResources,
}: ResearchResourcesProps) {
  const Brand = brand.toUpperCase();
  const sections: ResourceSection[] = [
    {
      icon: <Info className="h-5 w-5 text-primary" />,
      title: "About EngineCode.uk",
      description:
        "Independent technical reference for engine identification and verification",
      categories: [
        {
          type: "text-block",
          icon: <Info className="h-4 w-4" />,
          title: "Platform Overview",
          content: [
            {
              title: "Independent Technical Reference",
              description: `EngineCode.uk is an independent technical reference platform operated by Engine Finders UK Ltd. We are not affiliated with ${Brand} or any other manufacturer. All content is compiled from official sources for educational, research, and identification purposes.`,
            },
          ],
        },
        {
          type: "text-block",
          icon: <Shield className="h-4 w-4" />,
          title: "Sourcing Policy",
          content: [
            {
              title: "Strict Sourcing Protocol",
              description:
                "Only official OEM publications and government portals are cited.",
            },
            {
              title: "No Unverified Sources",
              description:
                "No Wikipedia, forums, blogs, or third-party aggregators are used.",
            },
            {
              title: "Transparency in Gaps",
              description:
                "If a data point is not officially disclosed, it is marked 'Undisclosed'.",
            },
            {
              title: "Regulatory Stability",
              description:
                "EU regulations are referenced using CELEX identifiers for long-term stability.",
            },
          ],
        },
      ],
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: "Primary Sources & Documentation",
      description:
        "Official OEM and government publications used for data verification",
      categories: [
        {
          type: "text-block",
          icon: <Globe className="h-4 w-4" />,
          title: "Primary Sources",
          content: [
            {
              title: `${Brand} Official Site`,
              description:
                "Owner literature, service manuals, technical releases, and plant documentation.",
            },
            {
              title: "EUR-Lex",
              description:
                "EU emissions and type-approval regulations (e.g., CELEX:32007R0715, CELEX:32017R1151).",
            },
            {
              title: "GOV.UK: Vehicle Approval & V5C",
              description:
                "UK vehicle approval processes, import rules, and MoT guidance.",
            },
            {
              title: "DVLA: Engine Changes & MoT",
              description:
                "Official guidance on engine swaps and inspection implications.",
            },
            {
              title: "Vehicle Certification Agency (VCA)",
              description:
                "UK type-approval authority for automotive products.",
            },
          ],
        },
        {
          type: "link",
          icon: <FileText className="h-4 w-4" />,
          title: "Official Documentation",
          links: [
            {
              title: `${Brand} Service Manual`,
              href: `${researchResources.serviceManual}`,
            },
            {
              title: `${Brand} Technical Service Bulletins`,
              href: `${researchResources.serviceManual}`,
            },
          ],
        },
        {
          type: "link",
          icon: <Shield className="h-4 w-4" />,
          title: "Regulatory Compliance",
          links: [
            {
              title: "UK VCA Type Approval Database",
              href: "https://www.gov.uk/vehicle-approval",
            },
            {
              title: "EU Commission Regulation (EC) No 715/2007",
              href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
            },
            {
              title: "Commission Regulation (EU) 2017/1151 (WLTP/RDE)",
              href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1151",
            },
          ],
        },
      ],
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Regulatory Context & Methodology",
      description:
        "Framework and processes ensuring data accuracy and compliance",
      categories: [
        {
          type: "text-block",
          icon: <Globe className="h-4 w-4" />,
          title: "Regulatory Context",
          content: [
            {
              title: "Regulation (EC) No 715/2007",
              description:
                "Euro emissions framework for vehicle type approval.",
            },
            {
              title: "Commission Regulation (EU) 2017/1151",
              description:
                "WLTP and RDE testing procedures for emissions certification.",
            },
            {
              title: "GOV.UK: Vehicle Approval",
              description:
                "UK compliance and certification requirements for imported and modified vehicles.",
            },
            {
              title: "VCA Certification Portal",
              description: "Type-approval guidance and documentation.",
            },
          ],
        },
        {
          type: "text-block",
          icon: <Info className="h-4 w-4" />,
          title: "Methodology",
          content: [
            {
              title: "Data Compilation",
              description:
                "All data is compiled from OEM and government publications, reviewed by our editorial team, and updated regularly.",
            },
            {
              title: "Corrections & Submissions",
              description:
                "To request a correction or submit documentation, email: corrections@enginecode.uk",
            },
          ],
        },
      ],
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Legal, Privacy & Commercial Disclosure",
      description: "Copyright, data privacy, and funding transparency",
      categories: [
        {
          type: "text-block",
          icon: <Info className="h-4 w-4" />,
          title: "Copyright & Legal",
          content: [
            {
              title: "Fair Dealing Use",
              description:
                "All engine and vehicle images are used under UK 'fair dealing' principles for technical identification and educational use. Rights remain with their respective owners.",
            },
            {
              title: "Copyright Concerns",
              description:
                "For copyright concerns, email: copyrights@enginecode.uk",
            },
          ],
        },
        {
          type: "text-block",
          icon: <Shield className="h-4 w-4" />,
          title: "Data Privacy",
          content: [
            {
              title: "GDPR Compliance",
              description:
                "EngineCode.uk complies with UK GDPR. We do not collect personal data unless explicitly provided.",
            },
            {
              title: "Data Requests",
              description:
                "For access, correction, or deletion requests, email: gdpr@enginecode.uk",
            },
          ],
        },
        {
          type: "text-block",
          icon: <Info className="h-4 w-4" />,
          title: "Trademarks",
          content: [
            {
              title: "Trademark Notice",
              description:
                "All trademarks, logos, and engine codes are the property of their respective owners. Use on this site is strictly for reference and identification.",
            },
          ],
        },
        {
          type: "text-block",
          icon: <Shield className="h-4 w-4" />,
          title: "Commercial Disclosure",
          content: [
            {
              title: "No Paid Endorsements",
              description:
                "This website contains no paid endorsements, affiliate links, or commercial partnerships. We do not sell parts or services.",
            },
            {
              title: "Funding Model",
              description:
                "Our mission is to provide accurate, verifiable, and neutral technical data for owners, restorers, and technicians. This site is self-funded.",
            },
          ],
        },
      ],
    },
  ];
  return (
    <Container>
      <H1>Research Resources</H1>
      <SH className="text-center">
        Comprehensive technical documentation and regulatory references
      </SH>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        {sections.map((section, i) => (
          <Card
            key={i}
            className="shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                {section.icon}
                <CardTitle className="text-xl text-foreground">
                  {section.title}
                </CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.categories?.map((cat, j) => (
                <div key={j}>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    {cat.icon}
                    {cat.title}
                  </h4>

                  {cat.type === "text-block" || cat.type === "mixed" ? (
                    <div className="space-y-3 ml-6">
                      {cat?.content?.map((item, k) => (
                        <div key={k} className="p-3 rounded-lg bg-muted">
                          <p className="font-medium text-foreground">
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                {item.title}{" "}
                                <ExternalLink className="inline h-3 w-3" />
                              </a>
                            ) : (
                              item.title
                            )}
                          </p>
                          {item.description && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2 ml-6">
                      {cat.links?.map((link, k) => (
                        <a
                          key={k}
                          href={link.href}
                          className="flex items-center gap-2 text-primary hover:underline transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-10 " id="verification-note">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.165-2.052-.48-3.016z"
              />
            </svg>
            Last Updated: 16 August 2025
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            All specifications and compatibility data verified against official
            {Brand} documentation and EU/UK regulatory texts. Where official
            data is unavailable, entries are marked &ldquo;Undisclosed&ldquo; .
          </p>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          All external links open in new tabs. Please verify current
          availability of resources.
        </p>
      </div>
    </Container>
  );
}
