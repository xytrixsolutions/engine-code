import { JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, P, SH, Strong } from "@/components/Typography";
import Container from "@/components/Container";
import { Activity, AlertOctagon, CircleHelp, Info, Wrench } from "lucide-react";
import "./accent.css";

// Define responsive checkerboard styles
const getCardStyles = (index: number) => {
  const isMobileEven = index % 2 === 0;
  const row = Math.floor(index / 2);
  const col = index % 2;
  const isDesktopEven = (row + col) % 2 === 0;

  const baseClasses =
    "transition-colors duration-300 backdrop-blur-sm border-0";

  // Mobile: alternate every card
  const mobileBg = isMobileEven
    ? "bg-[hsl(var(--accent)/0.13)] dark:bg-[hsl(var(--accent)/0.18)]"
    : "bg-primary/25 dark:bg-primary/30";

  const mobileText = isMobileEven
    ? "text-accent-foreground"
    : "text-foreground";

  // Desktop: checkerboard pattern
  const desktopBg = isDesktopEven
    ? "md:bg-[hsl(var(--accent)/0.13)] md:dark:bg-[hsl(var(--accent)/0.18)]"
    : "md:bg-primary/25 md:dark:bg-primary/30";

  const desktopText = isDesktopEven
    ? "md:text-accent-foreground"
    : "md:text-foreground";

  return {
    className: `${baseClasses} ${mobileBg} ${desktopBg}`,
    textClass: `${mobileText} ${desktopText}`,
  };
};

type CommonReliabilityIssuesData = {
  issues: {
    title: string;
    symptoms: string;
    cause: string;
    fix: string;
  }[];
  heading?: string;
  brand: string;
  engine: string;
  subheading: string;
  infoBlock?: {
    title: string;
    description: string;
    gradient: string;
  };
};
const CommonReliabilityIssues = ({
  issues,
  brand,
  engine,
  subheading,
  infoBlock,
}: CommonReliabilityIssuesData): JSX.Element => {
  return (
    <Container>
      <H1>
        Common Reliability Issues - {brand.toUpperCase()} {engine.toUpperCase()}
      </H1>
      <SH>{subheading}</SH>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {issues.map((issue, idx) => {
          const { className: cardClass, textClass } = getCardStyles(idx);

          return (
            <Card
              key={issue.title}
              className={`shadow-lg border border-border ${cardClass} relative overflow-hidden`}
            >
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(
                    to top right,
                    hsla(var(--accent), ${idx % 2 === 0 ? 0.1 : 0.05}) 0%,
                    transparent 70%
                  )`,
                }}
              />

              <CardHeader className={`pb-3 relative z-10 ${textClass}`}>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertOctagon className="h-5 w-5 text-current" />
                  {issue.title}
                </CardTitle>
              </CardHeader>

              <CardContent className={`space-y-4 relative z-10 ${textClass}`}>
                {/* Symptoms */}
                <div className="flex items-start">
                  <Activity />
                  <span className="ml-2">
                    <span className="text-sm font-semibold">Symptoms: </span>
                    <span className="text-sm">{issue.symptoms}</span>
                  </span>
                </div>

                {/* Cause */}
                <div className="flex items-start">
                  <CircleHelp />
                  <span className="ml-2">
                    <span className="text-sm font-semibold">Cause: </span>
                    <span className="text-sm">{issue.cause}</span>
                  </span>
                </div>

                {/* Fix */}
                <div className="flex items-start">
                  <Wrench />
                  <span className="ml-2">
                    <span className="text-sm font-semibold">Fix: </span>
                    <span className="text-sm">{issue.fix}</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Info Block */}
      {infoBlock && (
        <Card className="mt-12 rounded-xl shadow-lg border bg-card border-border relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-r"
            style={{ background: infoBlock.gradient }}
          />
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <Strong>{infoBlock.title}</Strong>
                <P>{infoBlock.description}</P>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default CommonReliabilityIssues;
