"use client";
import { ExternalLink, Fuel, Trophy, X, Zap } from "lucide-react";
import Image from "next/image";
import { GiBarrel } from "react-icons/gi";
import Container from "@/components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DisclaimerCard from "./disclaimer-card";
import Link from "next/link";
import { ImageDialog } from "./image-dialog";

const EngineTimeline = () => {
  const timelineData = [
    {
      decade: "1970s",
      years: "1970–1979",
      image: "/bmw/Engines/1-bmw-m10.webp",
      engines: [
        {
          code: "M10",
          type: "Petrol",
          years: "1970–1988",
          models: "2002, E12 5 Series",
          anchor: "m10",
        },
        {
          code: "M30",
          type: "Petrol",
          years: "1968–1995",
          models: "E3, E9, E24 6 Series",
          anchor: "m30",
        },
      ],
    },
    {
      decade: "1980s",
      years: "1980–1989",
      image: "/bmw/Engines/2-bmw-m20.webp",
      engines: [
        {
          code: "M40",
          type: "Petrol",
          years: "1989–1994",
          models: "E30 316i, E36 316i",
          anchor: "m40",
        },
        {
          code: "M21",
          type: "Diesel",
          years: "1983–1991",
          models: "E30 324d, E34 524td",
          anchor: "m21",
        },
      ],
    },
    {
      decade: "1990s",
      years: "1990–1999",
      image: "/bmw/Engines/3-bmw-m40.webp",
      engines: [
        {
          code: "M42",
          type: "Petrol",
          years: "1989–1996",
          models: "E30 318i",
          anchor: "m42",
        },
        {
          code: "M44",
          type: "Petrol",
          years: "1996–2000",
          models: "E36 318i",
          anchor: "m44",
        },
        {
          code: "M51",
          type: "Diesel",
          years: "1991–2000",
          models: "E34 525tds, E38 725tds",
          anchor: "m51",
        },
        {
          code: "M52",
          type: "Petrol",
          years: "1994–2000",
          models: "E36 323i, E39 528i",
          anchor: "m52",
        },
      ],
    },
    {
      decade: "2000s",
      years: "2000–2009",
      image: "/bmw/Engines/4-bmw-s54.webp",
      engines: [
        {
          code: "M54",
          type: "Petrol",
          years: "2000–2006",
          models: "E46 330i, Z4",
          anchor: "m54",
        },
        {
          code: "M47",
          type: "Diesel",
          years: "1998–2007",
          models: "E46 320d, E60 520d",
          anchor: "m47",
        },
        {
          code: "M62",
          type: "Petrol",
          years: "1995–2005",
          models: "E39 540i, E53 X5",
          anchor: "m62",
        },
      ],
    },
    {
      image: "/bmw/Engines/6-bmw-b47d20.webp",
      decade: "2010s",
      years: "2010–2019",
      engines: [
        {
          code: "N47",
          type: "Diesel",
          years: "2007–2015",
          models: "E90 320d, F30 320d",
          anchor: "n47",
        },
        {
          code: "N20",
          type: "Petrol",
          years: "2011–2017",
          models: "F30 328i",
          anchor: "n20",
        },
        {
          code: "B47",
          type: "Diesel",
          years: "2014–Now",
          models: "F56 Mini, G20 318d",
          anchor: "b47",
        },
        {
          code: "B48",
          type: "Petrol",
          years: "2015–Now",
          models: "G20 330i, Z4",
          anchor: "b48",
        },
        {
          code: "B37",
          type: "Diesel",
          years: "2014–Now",
          models: "F56 Mini One D",
          anchor: "b37",
        },
      ],
    },
    {
      image: "/bmw/Engines/7-bmw_p48.webp",
      decade: "2020s",
      years: "2020–Now",
      engines: [
        {
          code: "B58",
          type: "Petrol",
          years: "2015–Now",
          models: "G20 M340i, G80 M3",
          anchor: "b58",
        },
        {
          code: "S58",
          type: "Petrol",
          years: "2020–Now",
          models: "G80 M3, G82 M4",
          anchor: "s58",
        },
        {
          code: "P-Series",
          type: "Race",
          years: "1982–Now",
          models: "M1 Procar, M Hybrid V8",
          anchor: "p-series",
        },
        {
          code: "iX5 Hydrogen",
          type: "fuel cell",
          years: "2023–Now",
          models: "iX5",
          anchor: "ix5-hydrogen",
        },
      ],
    },
  ];
  const getEngineIcon = (type: string) => {
    switch (type) {
      case "Petrol":
        return <Fuel className="h-4 w-4" />;
      case "Diesel":
        return <GiBarrel className="h-4 w-4" />;
      case "Race":
        return <Trophy className="h-4 w-4" />;
      case "fuel cell":
        return <Zap className="h-4 w-4" />;
      default:
        return <Fuel className="h-4 w-4" />;
    }
  };
  const getEngineVariant = (type: string) => {
    switch (type) {
      case "Petrol":
        return "default";
      case "Diesel":
        return "secondary";
      case "Race":
        return "destructive";
      case "fuel cell":
        return "outline";
      default:
        return "default";
    }
  };
  const handleEngineClick = (anchor: string) => {
    const element = document.getElementById(`family-${anchor}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container spaceY={8}>
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          BMW Engine Evolution Timeline (1970–2025)
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          Track 55+ years of BMW engineering across Petrol, Diesel, hybrid, and
          Race powertrains. Data sourced from{" "}
          <a
            href="https://www.bmwgroup.com/en.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
          >
            BMW Group PT-2023
            <ExternalLink className="h-3 w-3" />
          </a>{" "}
          and{" "}
          <a
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
          >
            EU Regulation (EC) No 715/2007
            <ExternalLink className="h-3 w-3" />
          </a>{" "}
          on vehicle type approval.
        </p>
        {/* <Image */}
        {/*   src="/image.png" */}
        {/*   alt="BMW Engine Timeline" */}
        {/*   width={0} */}
        {/*   height={0} */}
        {/*   sizes="100%" */}
        {/*   className="w-full rounded-xl" */}
        {/* /> */}
      </div>

      {/* Desktop Timeline - Horizontal Scroll */}
      <div className="hidden lg:block">
        <div className="overflow-x-auto">
          {" "}
          {/* ← THIS IS THE KEY */}
          <div className="flex gap-6 min-w-full pb-4">
            {timelineData.map((period) => (
              <Card
                key={period.decade}
                className="min-w-[320px] flex-shrink-0 bg-card border-border"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {period.decade}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {period.years}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ImageDialog src={period.image} alt={"BMW Engine Timeline"} />
                  {/* <Dialog> */}
                  {/*   <DialogTrigger asChild> */}
                  {/*     <Image */}
                  {/*       src={period.image} */}
                  {/*       alt="BMW Engine Timeline" */}
                  {/*       width={200} */}
                  {/*       height={200} */}
                  {/*       sizes="100%" */}
                  {/*       className="w-full h-48 object-cover rounded-xl" */}
                  {/*     /> */}
                  {/*   </DialogTrigger> */}
                  {/*   <DialogContent */}
                  {/*     className="max-w-max p-0" */}
                  {/*     showCloseButton={false} */}
                  {/*   > */}
                  {/*     <DialogTitle hidden></DialogTitle> */}
                  {/*     <DialogClose asChild> */}
                  {/*       <button */}
                  {/*         type="button" */}
                  {/*         className="absolute top-2 right-2 bg-transparent text-white/60 hover:text-white transition" */}
                  {/*       > */}
                  {/*         <X className="h-5 w-5" /> */}
                  {/*       </button> */}
                  {/*     </DialogClose> */}
                  {/*     <Image */}
                  {/*       src={period.image} */}
                  {/*       alt="BMW Engine Timeline" */}
                  {/*       width={0} */}
                  {/*       height={0} */}
                  {/*       sizes="100%" */}
                  {/*       className="w-full object-contain rounded-lg" */}
                  {/*     /> */}
                  {/*   </DialogContent> */}
                  {/* </Dialog> */}

                  {/* <Image */}
                  {/*   src={period.image} */}
                  {/*   alt="BMW Engine Timeline" */}
                  {/*   width={256} */}
                  {/*   height={256} */}
                  {/*   sizes="100%" */}
                  {/*   className=" rounded-xl" */}
                  {/* /> */}
                  {/* <Image */}
                  {/*   src={period.image} */}
                  {/*   alt="BMW Engine Timeline" */}
                  {/*   width={256} */}
                  {/*   height={256} */}
                  {/*   sizes="100%" */}
                  {/*   className="w-full h-48 object-cover rounded-xl" */}
                  {/* /> */}

                  {period.engines.map((engine) => (
                    <Card
                      key={engine.code}
                      className="p-3 cursor-pointer hover:bg-accent/50 transition-colors border-border bg-background"
                      onClick={() => handleEngineClick(engine.anchor)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {getEngineIcon(engine.type)}
                          <span className="font-semibold text-foreground">
                            {engine.code}
                          </span>
                        </div>
                        <Badge
                          variant={getEngineVariant(engine.type)}
                          className="text-xs"
                        >
                          {engine.type}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div className="font-medium">{engine.years}</div>
                        <div className="text-pretty">{engine.models}</div>
                      </div>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline - Accordion */}
      <div className="lg:hidden">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {timelineData.map((period) => (
            <AccordionItem
              key={period.decade}
              value={period.decade}
              className="border-border"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-foreground">
                    {period.decade}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {period.years}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {period.engines.map((engine) => (
                  <Card
                    key={engine.code}
                    className="p-3 cursor-pointer hover:bg-accent/50 transition-colors border-border bg-background"
                    onClick={() => handleEngineClick(engine.anchor)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getEngineIcon(engine.type)}
                        <span className="font-semibold text-foreground">
                          {engine.code}
                        </span>
                      </div>
                      <Badge
                        // biome-ignore lint/suspicious/noExplicitAny: <idk>
                        variant={getEngineVariant(engine.type) as any}
                        className="text-xs"
                      >
                        {engine.type}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="font-medium">{engine.years}</div>
                      <div className="text-pretty">{engine.models}</div>
                    </div>
                  </Card>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Source Disclaimer */}
      <DisclaimerCard>
        Engine production years verified via{" "}
        <Link
          href="https://www.bmwgroup.com/en.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          BMW Group Product Reports
          <ExternalLink className="h-3 w-3" />
        </Link>{" "}
        and{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          EU type-approval records
          <ExternalLink className="h-3 w-3" />
        </Link>
        .
      </DisclaimerCard>
    </Container>
  );
};

export default EngineTimeline;
