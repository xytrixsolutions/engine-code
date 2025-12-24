import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import Container from "@/components/Container";
import { Card } from "@/components/ui/card";
import Counter from "./counter";
import DisclaimerCard from "./disclaimer-card";

interface HeroProps {
  brandSlug: string;
  brandName: string;
  engineCount: number;
}

const Hero = ({
  brandSlug,
  brandName,
  engineCount,
}: HeroProps): JSX.Element => {
  // Define stats data dynamically based on brand
  const statsData = [
    {
      value: <Counter to={engineCount} suffix="+" />,
      description: "Engine Variants",
    },
    {
      value: <Counter to={50} suffix="+" />,
      description: "Models Covered",
    },
    {
      value: <Counter to={50} suffix=" Years" />,
      description: "of Engineering",
    },
    {
      value: "Euro 1–6",
      description: "Compliance Data",
    },
  ];

  return (
    <Container centerText spaceY={8}>
      {/* Main Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
          {brandName} Engine Codes Database
        </h1>
        <div className="text-xl md:text-5xl text-muted-foreground font-medium">
          Europe's Definitive Technical Reference (1975–2025)
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[auto_auto] items-center gap-y-6 sm:gap-x-8 px-6 md:px-0">
        <Image
          src={`/${brandSlug}/hero1.jpg`}
          alt={`${brandName} Engine Timeline`}
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-max max-w-[600px] rounded-xl"
        />
        <Image
          src={`/${brandSlug}/hero2.png`}
          alt={`${brandName} Engine Timeline`}
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-max max-w-[450px] rounded-xl"
        />
      </div>

      {/* Description */}
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
        EngineCode.uk delivers OEM-grade technical data on every {brandName}{" "}
        petrol, diesel, and hybrid engine used across Europe. Built for UK and
        EU car owners, mechanics, and restorers, this non-commercial reference
        provides precise engine specifications, model compatibility, emissions
        standards, and failure patterns based on manufacturer documentation and
        EU vehicle regulations.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsData.map((stat) => (
          <Card
            key={stat.description}
            className="text-center border-border bg-card hover:bg-accent/50 transition-colors gap-0"
          >
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              {stat.description}
            </div>
          </Card>
        ))}
      </div>

      {/* Source Disclaimer */}
      <DisclaimerCard>
        Data sourced from{" "}
        <Link
          href="https://www.bmwgroup.com/en.html"
          rel="noreferrer noopener"
          target="_blank"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          {brandName} Technical Documentation
          <ExternalLink className="h-3 w-3" />
        </Link>
        ,{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
          rel="noreferrer noopener"
          target="_blank"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          EU Regulation (EC) No 715/2007
          <ExternalLink className="h-3 w-3" />
        </Link>
        , and {brandName} Technical Service Information (TIS) documents.
      </DisclaimerCard>
    </Container>
  );
};

export default Hero;
