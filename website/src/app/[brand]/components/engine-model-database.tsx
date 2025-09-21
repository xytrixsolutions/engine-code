import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DisclaimerCard from "./disclaimer-card";

interface EngineModel {
  model: string;
  chassis: string;
  years: string;
  image: string;
  engines: Array<{
    code: string;
    href: string;
  }>;
}

interface ThirdPartyModel {
  vehicle: string;
  years: string;
  image: string;
  engines: Array<{
    code: string;
    href: string;
    note?: string;
  }>;
}

const bmwModels: EngineModel[] = [
  {
    model: "114d",
    chassis: "E81/E82",
    years: "2007–2013",
    image: "/bmw/chassis/e82.png",
    engines: [
      { code: "N47D16A", href: "/bmw/n47d16a-specs" },
      { code: "M47TUD16", href: "/bmw/m47tud16-specs" },
    ],
  },
  {
    model: "116i",
    chassis: "F20",
    years: "2012–2019",
    image: "/bmw/chassis/f20.png",
    engines: [
      { code: "B38A15A", href: "/bmw/b38a15a-specs" },
      { code: "N13B16A", href: "/bmw/n13b16a-specs" },
    ],
  },
  {
    model: "118d",
    chassis: "F40",
    years: "2017–2023",
    image: "/bmw/chassis/f40.png",
    engines: [
      { code: "B47D20A", href: "/bmw/b47d20a-specs" },
      { code: "B47D20B", href: "/bmw/b47d20b-specs" },
    ],
  },
  {
    model: "120d",
    chassis: "F48",
    years: "2015–2023",
    image: "/bmw/chassis/f48.png",
    engines: [
      { code: "B47D20A", href: "/bmw/b47d20a-specs" },
      { code: "B47D20C", href: "/bmw/b47d20c-specs" },
    ],
  },
  {
    model: "318d",
    chassis: "E90",
    years: "2007–2011",
    image: "/bmw/chassis/e90.png",
    engines: [
      { code: "N47D20A", href: "/bmw/n47d20a-specs" },
      { code: "M47TUD20", href: "/bmw/m47tud20-specs" },
    ],
  },
  {
    model: "320d",
    chassis: "F30",
    years: "2012–2019",
    image: "/bmw/chassis/f30.png",
    engines: [
      { code: "N47D20C", href: "/bmw/n47d20c-specs" },
      { code: "B47D20A", href: "/bmw/b47d20a-specs" },
      { code: "B47D20B", href: "/bmw/b47d20b-specs" },
    ],
  },
  {
    model: "330i",
    chassis: "G20",
    years: "2019–Now",
    image: "/bmw/chassis/g20.png",
    engines: [
      { code: "B48B20O1", href: "/bmw/b48b20o1-specs" },
      { code: "B48B20O2", href: "/bmw/b48b20o2-specs" },
    ],
  },
  {
    model: "520d",
    chassis: "F10",
    years: "2010–2017",
    image: "/bmw/chassis/f10.png",
    engines: [
      { code: "N47D20C", href: "/bmw/n47d20c-specs" },
      { code: "B47D20A", href: "/bmw/b47d20a-specs" },
    ],
  },
  {
    model: "530e",
    chassis: "G30",
    years: "2017–Now",
    image: "/bmw/chassis/g30.png",
    engines: [{ code: "B48B20O1 + eDrive", href: "/bmw/b48b20o1-specs" }],
  },
  {
    model: "X1",
    chassis: "F48",
    years: "2016–Now",
    image: "/bmw/chassis/f48.png",
    engines: [
      { code: "B38A15A", href: "/bmw/b38a15a-specs" },
      { code: "B47D20A", href: "/bmw/b47d20a-specs" },
      { code: "B48B20O1", href: "/bmw/b48b20o1-specs" },
    ],
  },
  {
    model: "X3",
    chassis: "G01",
    years: "2018–Now",
    image: "/bmw/chassis/g01.png",
    engines: [
      { code: "B48B20O1", href: "/bmw/b48b20o1-specs" },
      { code: "B58B30A", href: "/bmw/b58b30a-specs" },
      { code: "B47D20A", href: "/bmw/b47d20a-specs" },
    ],
  },
  {
    model: "X5",
    chassis: "F15",
    years: "2013–2018",
    image: "/bmw/chassis/f15.png",
    engines: [
      { code: "N55B30A", href: "/bmw/n55b30a-specs" },
      { code: "B47D20A", href: "/bmw/b47d20a-specs" },
      { code: "M57D30T0", href: "/bmw/m57d30t0-specs" },
    ],
  },
  {
    model: "Z3",
    chassis: "E36/7",
    years: "1995–2002",
    image: "/bmw/chassis/e37.png",
    engines: [
      { code: "M44B19", href: "/bmw/m44b19-specs" },
      { code: "M54B22", href: "/bmw/m54b22-specs" },
      { code: "M54B30", href: "/bmw/m54b30-specs" },
    ],
  },
  {
    model: "Z4",
    chassis: "G29",
    years: "2018–Now",
    image: "/bmw/chassis/g29.png",
    engines: [
      { code: "B48B20O1", href: "/bmw/b48b20o1-specs" },
      { code: "S58B30A", href: "/bmw/s58b30a-specs" },
    ],
  },
  {
    model: "M3",
    chassis: "E46",
    years: "2000–2006",
    image: "/bmw/chassis/e46.png",
    engines: [{ code: "S54B32", href: "/bmw/s54b32-specs" }],
  },
  {
    model: "M3",
    chassis: "G80",
    years: "2020–Now",
    image: "/bmw/chassis/g80.png",
    engines: [{ code: "S58B30A", href: "/bmw/s58b30a-specs" }],
  },
  {
    model: "M5",
    chassis: "F90",
    years: "2018–Now",
    image: "/bmw/chassis/f90.png",
    engines: [{ code: "S63B44C", href: "/bmw/s63b44c-specs" }],
  },
  {
    model: "X3 M",
    chassis: "F97",
    years: "2019–Now",
    image: "/bmw/chassis/f97.png",
    engines: [{ code: "S58B30A", href: "/bmw/s58b30a-specs" }],
  },
  {
    model: "i3",
    chassis: "G28",
    years: "2013–2022",
    image: "/bmw/chassis/g28.png",
    engines: [{ code: "B38A15A (Range Extender)", href: "/bmw/b38a15a-specs" }],
  },
];

const thirdPartyModels: ThirdPartyModel[] = [
  {
    vehicle: "Mini Cooper D (F56)",
    years: "2014–Now",
    image: "/bmw/chassis/mini-f56.png",
    engines: [
      { code: "B37C15A", href: "/bmw/b37c15a-specs" },
      { code: "B47D20A", href: "/bmw/b47d20a-specs" },
    ],
  },
  {
    vehicle: "Mini One D (F55)",
    years: "2015–Now",
    image: "/bmw/chassis/mini-f55.png",
    engines: [{ code: "B37C15A", href: "/bmw/b37c15a-specs" }],
  },
  {
    vehicle: "Toyota GR Supra (J29)",
    years: "2019–Now",
    image: "/bmw/chassis/g28.png",
    engines: [
      { code: "B48B20O1", href: "/bmw/b48b20o1-specs" },
      { code: "B58B30A", href: "/bmw/b58b30a-specs" },
    ],
  },
  {
    vehicle: "Land Rover Freelander 2 (L359)",
    years: "2007–2014",
    image: "/bmw/chassis/lr-l359.png",
    engines: [
      { code: "N47D20A", href: "/bmw/n47d20a-specs", note: "marketed as TD4" },
    ],
  },
  {
    vehicle: "Alpina B7 (G12)",
    years: "2016–2022",
    image: "/bmw/chassis/alpina-g12.png",
    engines: [{ code: "N63B44C", href: "/bmw/n63b44c-specs", note: "tuned" }],
  },
  {
    vehicle: "Alpina D5 (G30)",
    years: "2017–Now",
    image: "/bmw/chassis/alpina-g30.png",
    engines: [{ code: "B57D30A", href: "/bmw/b57d30a-specs", note: "tuned" }],
  },
];

const BMWModelCard = ({ model }: { model: EngineModel }) => (
  <Card className="border-border mb-4">
    <CardContent className="p-5">
      <h3 className="font-bold text-lg text-foreground">
        BMW {model.model} ({model.chassis})
      </h3>
      <div className="flex items-start gap-3">
        <Image
          src={model.image}
          alt={`${model.model} chassis ${model.chassis}`}
          width={216}
          height={144}
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-foreground mb-2">
          Available Engines:
        </h4>
        <div className="flex flex-wrap gap-2 justify-center">
          {model.engines.map((engine) => (
            <Link
              key={engine.code}
              href={engine.href}
              className="text-primary hover:underline"
            >
              <Badge
                variant="outline"
                className="hover:bg-primary/10 text-[10px] px-0.5 py-0.5"
              >
                {engine.code}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

const ThirdPartyModelCard = ({ model }: { model: ThirdPartyModel }) => (
  <Card className="border-border mb-4">
    <CardContent className="p-5">
      <h3 className="font-bold text-lg text-foreground">{model.vehicle}</h3>
      <p className="text-sm text-muted-foreground">Years: {model.years}</p>
      <div className="flex items-start gap-3">
        <Image
          src={model.image || "/images/placeholder-chassis.png"}
          alt={`${model.vehicle} years ${model.years}`}
          width={216}
          height={144}
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-foreground mb-2">
          BMW Engines Used:
        </h4>
        <div className="flex flex-wrap gap-2 justify-center">
          {model.engines.map((engine) => (
            <Link
              key={engine.code}
              href={engine.href}
              className="text-primary hover:underline"
            >
              <Badge
                variant="outline"
                className="hover:bg-primary/10 text-[10px] px-0.5 py-0.5"
              >
                {engine.code}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function EngineModelDatabase() {
  return (
    <Container centerText>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
          BMW Models & Compatible Engines: Full UK/EU Production Guide
        </h1>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed px-4">
          Find all engines used in your BMW model — by series, generation, and
          trim. Data reflects UK/EU production vehicles only, sourced from{" "}
          <Link
            href="https://www.bmw-techinfo.com/"
            target="_blank"
            rel="noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            BMW ISTA FA allocations <ExternalLink className="h-3 w-3" />
          </Link>
          ,{" "}
          <Link
            href="https://www.gov.uk/vehicle-approval"
            target="_blank"
            rel="noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            UK DVLA V5C records <ExternalLink className="h-3 w-3" />
          </Link>
          , and{" "}
          <Link
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
            target="_blank"
            rel="noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            EU Regulation (EC) No 715/2007 <ExternalLink className="h-3 w-3" />
          </Link>
          .
        </p>
      </div>
      <div className="space-y-8">
        {/* BMW Series & M Models */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">BMW Series & M Models</CardTitle>
            <CardDescription>
              Engines listed are specific to UK/EU market variants. Each engine
              code links to its technical specification.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Desktop Table View - Hidden on mobile */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <div className="max-h-[600px] overflow-y-auto border rounded-lg">
                  <table className="w-full">
                    <thead className="sticky top-0 bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left p-3 font-semibold"></th>

                        <th className="text-left p-3 font-semibold">
                          Model (Chassis)
                        </th>
                        <th className="text-center p-3 font-semibold">
                          Production Years
                        </th>
                        <th className="text-left p-3 font-semibold">
                          Available Engine Codes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bmwModels.map((model, index) => (
                        <tr
                          key={`${model.model}-${model.chassis}`}
                          className={
                            index % 2 === 0 ? "bg-muted/50" : "bg-background"
                          }
                        >
                          <td className="flex justify-center">
                            <Image
                              src={model.image || ""}
                              alt={`${model.model} chassis ${model.chassis}`}
                              width={162}
                              height={108}
                              className="object-contain"
                              priority={false} // Set to true only for above-the-fold images if needed
                            />
                          </td>
                          <td className="p-3 font-medium text-left">
                            <span>
                              {model.model} ({model.chassis})
                            </span>
                          </td>
                          <td className="p-3 text-muted-foreground">
                            {model.years}
                          </td>
                          <td className="p-3">
                            <div className="flex flex-wrap gap-2">
                              {model.engines.map((engine) => (
                                <Link
                                  key={engine.code}
                                  href={engine.href}
                                  className="text-primary hover:underline text-sm"
                                >
                                  <Badge
                                    variant="outline"
                                    className="hover:bg-primary/10"
                                  >
                                    {engine.code}
                                  </Badge>
                                </Link>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Mobile Card View - Hidden on desktop */}
            <div className="md:hidden">
              <div className="space-y-3">
                {bmwModels.map((model) => (
                  <BMWModelCard
                    key={`${model.model}-${model.chassis}`}
                    model={model}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Models */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Third-Party Models Using BMW Engines
            </CardTitle>
            <CardDescription>
              Several non-BMW vehicles use BMW-sourced engines. Compatibility
              and service data apply.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Desktop Table View - Hidden on mobile */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <div className="max-h-[600px] overflow-y-auto border rounded-lg">
                  <table className="w-full">
                    <thead className="sticky top-0 bg-primary text-primary-foreground">
                      <tr>
                        <th className="text-left p-3 font-semibold"></th>
                        <th className="text-left p-3 font-semibold">
                          Vehicle Model
                        </th>
                        <th className="text-center p-3 font-semibold">
                          Production Years
                        </th>
                        <th className="text-left p-3 font-semibold">
                          BMW Engine Used
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {thirdPartyModels.map((model, index) => (
                        <tr
                          key={model.vehicle}
                          className={
                            index % 2 === 0 ? "bg-muted/50" : "bg-background"
                          }
                        >
                          <td className="flex justify-center">
                            <Image
                              src={model.image}
                              alt={`${model.vehicle} vehicle`}
                              width={162}
                              height={108}
                              className="object-contain"
                              priority={false}
                            />
                          </td>

                          <td className="p-3 font-medium text-left">
                            <span>{model.vehicle}</span>
                          </td>
                          <td className="p-3 text-muted-foreground">
                            {model.years}
                          </td>
                          <td className="p-3">
                            <div className="flex flex-wrap gap-2">
                              {model.engines.map((engine) => (
                                <div
                                  key={engine.code}
                                  className="flex items-center gap-1"
                                >
                                  <Link
                                    href={engine.href}
                                    className="text-primary hover:underline text-sm"
                                  >
                                    <Badge
                                      variant="outline"
                                      className="hover:bg-primary/10"
                                    >
                                      {engine.code}
                                    </Badge>
                                  </Link>
                                  {engine.note && (
                                    <span className="text-xs text-muted-foreground">
                                      ({engine.note})
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Mobile Card View - Hidden on desktop */}
            <div className="md:hidden">
              <div className="space-y-3">
                {thirdPartyModels.map((model) => (
                  <ThirdPartyModelCard key={model.vehicle} model={model} />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Source Disclaimer */}
        <DisclaimerCard>
          <Link
            href="https://www.bmw-techinfo.com/document/A15001"
            target="_blank"
            rel="noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            BMW ISTA FA Allocation Codes <ExternalLink className="h-3 w-3" />
          </Link>
          ,{" "}
          <Link
            href="https://www.gov.uk/vehicle-approval"
            target="_blank"
            rel="noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            UK DVLA V5C records <ExternalLink className="h-3 w-3" />
          </Link>
          , and{" "}
          <Link
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
            target="_blank"
            rel="noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            EU Regulation (EC) No 715/2007 – Article 7 (Vehicle Identification){" "}
            <ExternalLink className="h-3 w-3" />
          </Link>
          . Data reflects UK/EU production variants only.
        </DisclaimerCard>
      </div>
    </Container>
  );
}
