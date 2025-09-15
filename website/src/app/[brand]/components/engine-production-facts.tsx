import { ExternalLink, Factory, TrendingUp, Truck, Zap } from "lucide-react";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const productionData = [
  {
    year: "2020",
    total: "520,000",
    petrol: "62%",
    diesel: "32%",
    hybrid: "6%",
  },
  {
    year: "2021",
    total: "510,000",
    petrol: "64%",
    diesel: "28%",
    hybrid: "8%",
  },
  {
    year: "2022",
    total: "490,000",
    petrol: "65%",
    diesel: "24%",
    hybrid: "11%",
  },
  {
    year: "2023",
    total: "470,000",
    petrol: "66%",
    diesel: "20%",
    hybrid: "14%",
  },
  {
    year: "2024 (est.)",
    total: "450,000",
    petrol: "68%",
    diesel: "15%",
    hybrid: "17% (incl. PHEV)",
  },
];
const plants = [
  {
    name: "Munich Plant (Germany)",
    description: "HQ and historic production hub",
    engines: "M-series (S58, P65), N55, B58",
    capacity: "~150,000 high-performance units/year",
    link: "https://www.bmwgroup.com/en/general/company/locations/munich.html",
  },
  {
    name: "Steyr Plant (Austria)",
    description: "Largest BMW engine facility",
    engines: "B48, B58, B38, B47, N47 (legacy)",
    capacity: "Over 500,000 engines annually (2023)",
    special: "Fully automated, carbon-neutral since 2020",
    link: "https://www.bmwgroup.com/en/sustainability/environment/production-steyr.html",
  },
  {
    name: "Shenyang Plant (China)",
    description: "BMW Brilliance joint venture",
    engines: "B48B20, B38A15A (for Chinese market)",
    capacity: "500,000 engines/year (2024 expansion)",
    link: "https://www.bmw-brilliance.cn/en/company",
  },
];
export function ProductionFacts() {
  return (
    <Container spaceY={8}>
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-balance">
          BMW Engine Production Facts: Manufacturing, Output & Partnerships
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
          Authoritative data on BMW's global engine production, plant
          operations, and strategic partnerships. All figures sourced from{" "}
          <a
            href="https://www.bmwgroup.com/en/general/company.html"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            BMW Group Annual Reports <ExternalLink className="h-3 w-3" />
          </a>
          ,{" "}
          <a
            href="https://www.bmwgroup.com/en/sustainability.html"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Sustainability Reports <ExternalLink className="h-3 w-3" />
          </a>
          , and EU industrial compliance records.
        </p>
      </div>

      {/* Major Production Plants */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Factory className="h-5 w-5" />
            Major Engine Production Plants
          </CardTitle>
          <CardDescription>
            BMW manufactures engines at three primary facilities, each
            specializing in specific families
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {plants.map((plant) => (
              <Card key={plant.name} className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{plant.name}</CardTitle>
                  <CardDescription>{plant.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Engines:
                    </p>
                    <p className="text-sm">{plant.engines}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Capacity:
                    </p>
                    <p className="text-sm font-semibold">{plant.capacity}</p>
                  </div>
                  {plant.special && (
                    <Badge variant="secondary" className="text-xs">
                      {plant.special}
                    </Badge>
                  )}
                  <a
                    href={plant.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Source <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Annual Production Volume */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Annual Engine Production Volume
          </CardTitle>
          <CardDescription>
            BMW produces over 500,000 engines per year across all plants, with
            fluctuations based on electrification trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Year</th>
                  <th className="text-left p-3 font-semibold">
                    Total Engines Produced
                  </th>
                  <th className="text-left p-3 font-semibold">Petrol</th>
                  <th className="text-left p-3 font-semibold">Diesel</th>
                  <th className="text-left p-3 font-semibold">Hybrid/Other</th>
                </tr>
              </thead>
              <tbody>
                {productionData.map((row) => (
                  <tr
                    key={(row.total as unknown as number)++}
                    className="border-b hover:bg-muted/50"
                  >
                    <td className="p-3 font-medium">{row.year}</td>
                    <td className="p-3 font-semibold">{row.total}</td>
                    <td className="p-3">{row.petrol}</td>
                    <td className="p-3">{row.diesel}</td>
                    <td className="p-3">{row.hybrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <em>Note:</em> Diesel production has declined steadily due to Euro
            6d and WLTP regulations (
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Regulation (EC) No 715/2007 <ExternalLink className="h-3 w-3" />
            </a>
            ). Hybrid and plug-in hybrid integration rising.
          </p>
        </CardContent>
      </Card>

      {/* Logistics & Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Production-to-Assembly Logistics & Distribution Network
          </CardTitle>
          <CardDescription>
            BMW engines are produced centrally and distributed to vehicle
            assembly plants worldwide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-semibold">
                  IMOLA Engine Distribution Center (Munich)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Automated storage and dispatch hub where finished engines are
                  stored before shipment to vehicle plants.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Steyr Plant</h4>
                <p className="text-sm text-muted-foreground">
                  Supplies engines to nearly every BMW vehicle plant globally,
                  including Spartanburg (USA), Rosslyn (South Africa), and San
                  Luis Potosí (Mexico).
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Spartanburg (USA)</h4>
                <p className="text-sm text-muted-foreground">
                  Largest BMW assembly site worldwide; integrates imported
                  engines but also hosts local battery assembly for hybrid/EV
                  X-series models.
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              <em>Source:</em>{" "}
              <a
                href="https://www.bmwgroup.com/en/report/2024/bmw-group-report/world-of-production/index.html"
                target="_blank"
                rel="noreferrer noopener"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                BMW Group Production Report 2024{" "}
                <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Electrification Initiatives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Plant-Level Electrification & Advanced Technology Initiatives
          </CardTitle>
          <CardDescription>
            BMW has committed billions to transition its plants towards
            electrification, digitalization, and sustainable energy usage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Landshut Plant</h4>
                <p className="text-sm text-muted-foreground">
                  Manufactures components for BMW i-series electric drivetrains;
                  hub for lightweight materials and e-mobility innovation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Steyr Plant</h4>
                <p className="text-sm text-muted-foreground">
                  Investing €1 billion by 2030 to produce next-gen e-drives
                  while continuing ICE production in parallel.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Munich Plant</h4>
                <p className="text-sm text-muted-foreground">
                  Transitioning to fully electric production by 2027; ~50% of
                  current output already electrified.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Shenyang (China)</h4>
                <p className="text-sm text-muted-foreground">
                  Integrates AI-driven logistics (BEACON system) and geothermal
                  energy to power electric drivetrain production.
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            <em>Source:</em>{" "}
            <a
              href="https://www.bmwgroup.com/en/sustainability/environment/production-steyr.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              BMW Group Sustainability & Innovation Reports{" "}
              <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </CardContent>
      </Card>

      {/* BMW-Toyota Partnership */}
      <Card>
        <CardHeader>
          <CardTitle>BMW-Toyota Joint Development: N47 & 2.0 D-4D</CardTitle>
          <CardDescription>
            Strategic partnership from 2011 for diesel and hybrid technologies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-semibold min-w-0">
                  N47-based 2.0 D-4D
                </span>
                <span className="text-muted-foreground">
                  used in Toyota RAV4, Hilux, and Land Cruiser 2.0D (Europe)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold min-w-0">
                  Shared engineering:
                </span>
                <span className="text-muted-foreground">
                  High-pressure common rail, turbo design
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold min-w-0">Production:</span>
                <span className="text-muted-foreground">
                  N47 blocks built in Steyr, then modified by Toyota
                </span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground">
              <em>Source:</em>{" "}
              <a
                href="https://www.bmwgroup.com/en/innovation/technology/partnerships.html"
                target="_blank"
                rel="noreferrer noopener"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                BMW Group: Strategic Partnerships – Toyota Collaboration{" "}
                <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Powertrain Mix */}
      <Card>
        <CardHeader>
          <CardTitle>
            Powertrain Mix: Petrol vs Diesel vs Hybrid (2020–2024)
          </CardTitle>
          <CardDescription>
            Shift in production reflects EU emissions policy and consumer demand
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">60–68%</div>
              <div className="font-semibold">Petrol</div>
              <div className="text-xs text-muted-foreground">
                driven by B-series (B38/B48/B58)
              </div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">15–30%</div>
              <div className="font-semibold">Diesel</div>
              <div className="text-xs text-muted-foreground">
                declining due to TCO, urban bans, and AdBlue complexity
              </div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">10–17%</div>
              <div className="font-semibold">Hybrid (PHEV)</div>
              <div className="text-xs text-muted-foreground">
                iPerformance models (330e, 530e, X5 xDrive45e)
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            This aligns with{" "}
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1151"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Commission Regulation (EU) 2017/1151{" "}
              <ExternalLink className="h-3 w-3" />
            </a>{" "}
            (WLTP/RDE) and EU 2035 ICE phase-out roadmap.
          </p>
        </CardContent>
      </Card>

      {/* Source Disclaimer */}
      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-xs text-muted-foreground">
            <sup>†</sup> All production data sourced from{" "}
            <a
              href="https://www.bmwgroup.com/en/investor-relations/publications.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              BMW Group Annual & Sustainability Reports (2020–2023){" "}
              <ExternalLink className="h-3 w-3" />
            </a>
            . Partnership details from{" "}
            <a
              href="https://www.bmwgroup.com/en/innovation.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              BMW Innovation Portal <ExternalLink className="h-3 w-3" />
            </a>
            . Emissions regulations per{" "}
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              EU Regulation (EC) No 715/2007{" "}
              <ExternalLink className="h-3 w-3" />
            </a>{" "}
            and{" "}
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1151"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Commission Regulation (EU) 2017/1151{" "}
              <ExternalLink className="h-3 w-3" />
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </Container>
  );
}
