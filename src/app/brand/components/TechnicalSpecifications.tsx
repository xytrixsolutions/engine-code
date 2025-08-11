import { JSX } from "react";
import Container from "../../../components/Container";
import { EngineSpecsTable } from "./EngineSpecsTable";
import { Card, CardContent } from "../../../components/ui/card";
import { AlertCircle } from "lucide-react";
import { TableData } from "../types";

const TechnicalSpecifications = ({
  engineSpecs,
}: {
  engineSpecs: TableData;
}): JSX.Element => {
  return (
    <Container>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-relaxed text-center mb-6">
        N47D20A Technical Specifications
      </h1>
      <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-center">
        The N47D20A&apos;s 16.5:1 compression ratio enables efficient combustion
        critical for Euro 4 compliance, while its aluminium alloy block reduces
        mass for improved dynamics in BMW&apos;s sport-oriented chassis.
        Optimized for executive vehicles requiring sub-6L/100km efficiency, the
        engine employs a swirl-flame combustion process with piezo injectors
        enabling up to 5 injections per cycle.
      </p>
      <EngineSpecsTable data={engineSpecs} />
      <Card
        className="mt-12 rounded-xl shadow-lg border bg-card border-border
             relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none
                  bg-gradient-to-r from-amber-100/40 to-yellow-100/40
                  dark:from-amber-400/5 dark:to-yellow-400/5"
        />
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
            </div>
            <div className="space-y-2">
              <h3 className="text-foreground font-semibold text-lg">
                Practical Implications
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The single VGT turbo provides strong low-RPM torque ideal for
                urban driving but requires strict adherence to 15,000-km oil
                change intervals to prevent vanes sticking. BMW Longlife-04 oil
                is non-negotiable due to its high-ester formulation protecting
                timing chain components. Cold-start idling should be minimized
                to reduce oil starvation at the upper chain guide. The Bosch CP3
                fuel pump demands ultra-low-sulfur diesel (ULSD) to prevent
                high-pressure valve wear. Post-2010 models feature revised chain
                guides, but pre-2010 units require aftermarket tensioner
                upgrades per BMW TIS A25631.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TechnicalSpecifications;
